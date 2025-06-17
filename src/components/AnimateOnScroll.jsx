import React, { useEffect, useRef, useState, forwardRef } from 'react';

const AnimateOnScroll = forwardRef(({ 
  children, 
  animation = 'fade-up', 
  duration = 800, 
  delay = 0, 
  className = '',
  threshold = 0.1 
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Use the forwarded ref if provided, otherwise use internal ref
  const targetRef = ref || elementRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [delay, threshold, targetRef]);

  const getAnimationClasses = () => {
    const durationClass = duration <= 300 ? 'duration-300' : 
                         duration <= 500 ? 'duration-500' : 
                         duration <= 700 ? 'duration-700' : 
                         duration <= 1000 ? 'duration-1000' : 'duration-1000';
    
    const baseClasses = `transition-all ease-out ${durationClass}`;
    
    switch (animation) {
      case 'fade':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'fade-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;
      case 'fade-down':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`;
      case 'fade-left':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`;
      case 'fade-right':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`;
      case 'zoom-in':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`;
      case 'zoom-out':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`;
      case 'slide-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`;
      case 'slide-down':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'}`;
      default:
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  return (
    <div 
      ref={targetRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
});

AnimateOnScroll.displayName = 'AnimateOnScroll';

export default AnimateOnScroll;