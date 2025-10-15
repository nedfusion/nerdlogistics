import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className = '',
  children,
  fullWidth = false,
  bgColor = 'bg-white',
}) => {
  return (
    <section className={`section ${bgColor} ${className}`}>
      {fullWidth ? (
        <>
          {(title || subtitle) && (
            <div className="container mb-12">
              {title && <h2 className="section-title">{title}</h2>}
              {subtitle && (
                <p className="text-center text-neutral-600 max-w-3xl mx-auto mt-4">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </>
      ) : (
        <div className="container">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && (
            <p className="text-center text-neutral-600 max-w-3xl mx-auto -mt-4 mb-12">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;