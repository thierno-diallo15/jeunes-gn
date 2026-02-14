import { TextInput, View, Text, TextInputProps } from 'react-native';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

const Input = forwardRef<TextInput, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <View className="w-full mb-4">
                {label && (
                    <Text className="text-neutral mb-1 font-medium">{label}</Text>
                )}
                <TextInput
                    ref={ref}
                    className={cn(
                        "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-900 focus:border-primary",
                        error && "border-alert",
                        className
                    )}
                    placeholderTextColor="#94A3B8"
                    {...props}
                />
                {error && <Text className="text-alert text-sm mt-1">{error}</Text>}
            </View>
        );
    }
);

Input.displayName = 'Input';

export { Input };
