import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends TouchableOpacityProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
    label: string;
    loading?: boolean;
}

const Button = forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', label, loading, disabled, ...props }, ref) => {

        const variants = {
            primary: 'bg-primary border-transparent',
            secondary: 'bg-secondary border-transparent',
            outline: 'bg-transparent border-primary',
            ghost: 'bg-transparent border-transparent',
        };

        const textVariants = {
            primary: 'text-white',
            secondary: 'text-white',
            outline: 'text-primary',
            ghost: 'text-primary',
        };

        const sizes = {
            default: 'py-3 px-4',
            sm: 'py-2 px-3',
            lg: 'py-4 px-6',
        };

        const textSizes = {
            default: 'text-base',
            sm: 'text-sm',
            lg: 'text-lg',
        };

        return (
            <TouchableOpacity
                ref={ref}
                disabled={disabled || loading}
                className={cn(
                    "flex-row items-center justify-center rounded-xl border relative",
                    variants[variant],
                    sizes[size],
                    (disabled || loading) && "opacity-50",
                    className
                )}
                {...props}
            >
                {loading ? (
                    <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? '#10B981' : 'white'} />
                ) : (
                    <Text className={cn("font-bold text-center", textVariants[variant], textSizes[size])}>
                        {label}
                    </Text>
                )}
            </TouchableOpacity>
        );
    }
);

Button.displayName = 'Button';

export { Button };
