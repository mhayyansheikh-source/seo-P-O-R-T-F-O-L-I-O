import React, { useState } from 'react';
import { cn } from './Button';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function Image({ src, alt, className, containerClassName, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        !isLoaded && "bg-gray-200 animate-pulse",
        containerClassName
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
}
