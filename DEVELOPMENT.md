# Development Guidelines

## ESLint Rules & Code Quality

This project includes strict ESLint rules to prevent common mistakes and ensure code quality.

### Key Rules That Prevent Common Issues

#### 1. Unescaped Entities (`react/no-unescaped-entities`)
**What it prevents:** Unescaped quotes, apostrophes, and other special characters in JSX
**Examples:**
```jsx
// ❌ Bad - Will cause build errors
<p>Don't use "quotes" like this</p>

// ✅ Good - Properly escaped
<p>Don&apos;t use &quot;quotes&quot; like this</p>

// ✅ Also good - Using template literals
<p>{`Don't use "quotes" like this`}</p>
```

#### 2. HTML Link Navigation (`@next/next/no-html-link-for-pages`)
**What it prevents:** Using `<a>` tags for internal navigation instead of Next.js `Link`
**Examples:**
```jsx
// ❌ Bad - Will cause build errors
<a href="/about">About</a>

// ✅ Good - Using Next.js Link
import Link from 'next/link';
<Link href="/about">About</Link>
```

#### 3. Security Issues (`react/jsx-no-target-blank`)
**What it prevents:** Security vulnerabilities with `target="_blank"`
**Examples:**
```jsx
// ❌ Bad - Security risk
<a href="https://example.com" target="_blank">External Link</a>

// ✅ Good - Secure external links
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
```

### Available Scripts

- `npm run lint` - Run ESLint on all files
- `npm run lint:check` - Run ESLint with zero warnings allowed (used in prebuild)
- `npm run lint:fix` - Automatically fix ESLint issues where possible
- `npm run build` - Build the project (automatically runs lint checks first)

### Pre-commit Protection

The project includes a `prebuild` script that runs linting before every build. This ensures:
- No unescaped entities reach production
- No HTML links are used for internal navigation
- All code follows React/Next.js best practices

### VS Code Integration

The project includes VS Code settings that:
- Enable ESLint validation in real-time
- Auto-fix ESLint issues on save
- Provide proper syntax highlighting for React/TypeScript files

### Common Fixes

#### Fixing Unescaped Entities
1. **Apostrophes:** `don't` → `don&apos;t`
2. **Quotes:** `"text"` → `&quot;text&quot;`
3. **Template literals:** Use `{`text with "quotes"`}` for complex strings

#### Fixing HTML Links
1. Import Link: `import Link from 'next/link';`
2. Replace `<a href="/path">` with `<Link href="/path">`
3. Keep `<a>` tags only for external links

### Troubleshooting

If you encounter ESLint errors:
1. Run `npm run lint:fix` to auto-fix issues
2. Check the specific rule documentation
3. Use the VS Code ESLint extension for real-time feedback
4. Ensure all imports are correct and components are properly defined

### Adding New Rules

To add new ESLint rules, edit `eslint.config.mjs` and add them to the `rules` object. Test changes with `npm run lint:check` before committing.
