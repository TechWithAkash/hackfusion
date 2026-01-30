import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--gray-700)] mb-1.5"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--gray-400)]">
            {leftIcon}
          </div>
        )}
        
        <input
          id={inputId}
          className={`
            w-full px-4 py-2.5 rounded-lg
            border ${error ? 'border-[var(--error)]' : 'border-[var(--border-color)]'}
            bg-white text-[var(--gray-900)]
            placeholder:text-[var(--gray-400)]
            transition-all duration-200
            focus:outline-none focus:ring-2 
            ${error ? 'focus:ring-[var(--error)]' : 'focus:ring-[var(--primary)]'}
            focus:border-transparent
            disabled:bg-[var(--gray-100)] disabled:cursor-not-allowed
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${className}
          `}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--gray-400)]">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1.5 text-sm text-[var(--error)] flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[var(--gray-500)]">{helperText}</p>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-[var(--gray-700)] mb-1.5"
        >
          {label}
        </label>
      )}
      
      <textarea
        id={textareaId}
        className={`
          w-full px-4 py-2.5 rounded-lg
          border ${error ? 'border-[var(--error)]' : 'border-[var(--border-color)]'}
          bg-white text-[var(--gray-900)]
          placeholder:text-[var(--gray-400)]
          transition-all duration-200
          focus:outline-none focus:ring-2 
          ${error ? 'focus:ring-[var(--error)]' : 'focus:ring-[var(--primary)]'}
          focus:border-transparent
          disabled:bg-[var(--gray-100)] disabled:cursor-not-allowed
          resize-vertical
          ${className}
        `}
        {...props}
      />
      
      {error && (
        <p className="mt-1.5 text-sm text-[var(--error)] flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[var(--gray-500)]">{helperText}</p>
      )}
    </div>
  );
};
