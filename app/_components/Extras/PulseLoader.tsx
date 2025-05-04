import { useState, useEffect, useRef, memo } from 'react';

// Define types for props
interface PulseLoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  speedMultiplier?: number;
  variant?: 'dots' | 'spinner' | 'wave';
}

// Calculate styles based on size
const getSizeStyles = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small': return { dotSize: 8, gap: 6 };
    case 'large': return { dotSize: 16, gap: 12 };
    default: return { dotSize: 12, gap: 8 }; // medium
  }
};

// Memoized loader component for better performance
const PulseLoader = memo(({ 
  size = 'medium', 
  color = '#6366F1', 
  speedMultiplier = 1,
  variant = 'dots'
}: PulseLoaderProps) => {
  // State for managing animation triggers
  const [isVisible, setIsVisible] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  
  // Styles based on size
  const { dotSize, gap } = getSizeStyles(size);
  
  // Animation duration calculated based on speed multiplier
  const duration = 1.8 / speedMultiplier;
  
  // Use intersection observer for performance optimization
  useEffect(() => {
    setIsVisible(true);
    
    // Use Intersection Observer to pause animations when not in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  // Conditional rendering based on variant
  const renderLoader = () => {
    switch (variant) {
      case 'spinner':
        return (
          <div className="relative w-12 h-12">
            <div 
              className={`absolute w-full h-full rounded-full border-4 border-t-transparent`}
              style={{
                borderColor: `${color}33`,
                borderTopColor: color,
                width: dotSize * 3,
                height: dotSize * 3,
                animation: isVisible ? `spin ${duration}s linear infinite` : 'none'
              }}
            />
          </div>
        );
        
      case 'wave':
        return (
          <div className="flex items-end gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-indigo-500 rounded-full"
                style={{
                  width: dotSize / 1.5,
                  height: ((i % 2 === 0 ? 1 : 0.7) + (i === 2 ? 0.6 : 0)) * dotSize,
                  backgroundColor: color,
                  animation: isVisible ? `wave ${duration}s ease-in-out ${i * 0.1}s infinite alternate` : 'none'
                }}
              />
            ))}
          </div>
        );
        
      default: // dots
        return (
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: color,
                  marginRight: gap,
                  animation: isVisible ? `pulse ${duration}s ease-in-out ${i * 0.16}s infinite` : 'none'
                }}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div 
      ref={loaderRef}
      className="flex flex-col items-center justify-center"
      style={{ 
        // Force hardware acceleration for better performance
        transform: 'translateZ(0)',
        willChange: 'opacity'
      }}
    >
      {renderLoader()}
      
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.5); opacity: 0.5; }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes wave {
          0% { transform: scaleY(0.5); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
});

export default PulseLoader;