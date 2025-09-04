import React, { ReactNode, useEffect, useRef } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = ''
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Add smooth scrolling behavior
    scroller.style.scrollBehavior = 'smooth';
    
    // Add touch event listeners for better mobile experience
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      scroller.classList.add('active');
      startX = e.pageX - scroller.offsetLeft;
      scrollLeft = scroller.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scroller.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      scroller.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      const walk = (x - startX) * 2;
      scroller.scrollLeft = scrollLeft - walk;
    };

    // Add mouse events for desktop drag scrolling
    scroller.addEventListener('mousedown', handleMouseDown);
    scroller.addEventListener('mouseleave', handleMouseLeave);
    scroller.addEventListener('mouseup', handleMouseUp);
    scroller.addEventListener('mousemove', handleMouseMove);

    return () => {
      scroller.removeEventListener('mousedown', handleMouseDown);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
      scroller.removeEventListener('mouseup', handleMouseUp);
      scroller.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
