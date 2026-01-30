import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  icon,
}) => {
  const baseStyles = `
    inline-flex items-center font-medium rounded-full
    transition-all duration-200
  `;

  const variants = {
    success: 'bg-[var(--secondary-light)] text-[var(--secondary-dark)] border border-[var(--secondary)]',
    warning: 'bg-orange-50 text-orange-700 border border-orange-200',
    error: 'bg-[var(--accent-light)] text-[var(--accent-dark)] border border-[var(--accent)]',
    info: 'bg-blue-50 text-blue-700 border border-blue-200',
    neutral: 'bg-[var(--gray-100)] text-[var(--gray-700)] border border-[var(--gray-300)]',
    primary: 'bg-[var(--primary-light)] text-[var(--primary-dark)] border border-[var(--primary)]',
    secondary: 'bg-[var(--secondary-light)] text-[var(--secondary-dark)] border border-[var(--secondary)]',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-sm gap-1.5',
    lg: 'px-3 py-1.5 text-base gap-2',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

// Severity Badge for medical use cases
interface SeverityBadgeProps {
  severity: 'low' | 'medium' | 'high' | 'critical';
  className?: string;
}

export const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity, className = '' }) => {
  const severityConfig = {
    low: { label: 'Low', variant: 'success' as const },
    medium: { label: 'Medium', variant: 'warning' as const },
    high: { label: 'High', variant: 'error' as const },
    critical: { label: 'Critical', variant: 'error' as const },
  };

  const config = severityConfig[severity];

  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
};
