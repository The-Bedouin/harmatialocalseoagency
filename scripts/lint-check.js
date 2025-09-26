#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🔍 Running ESLint checks...');

try {
    // Run ESLint on all TypeScript and JavaScript files
    execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --max-warnings 0', {
        stdio: 'inherit',
        cwd: process.cwd()
    });

    console.log('✅ All ESLint checks passed!');
    process.exit(0);
} catch (error) {
    console.error('❌ ESLint checks failed. Please fix the errors above.');
    process.exit(1);
}
