import { View, Text, Alert, ScrollView } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

const registerSchema = z.object({
    firstName: z.string().min(2, 'Le prénom est requis'),
    lastName: z.string().min(2, 'Le nom est requis'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(9, 'Numéro de téléphone invalide'), // Basic validation for Guinea
    password: z.string().min(6, 'Le mot de passe doit faire au moins 6 caractères'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        setLoading(true);
        // TODO: Integrer Supabase Auth (SignUp)
        // const { error } = await supabase.auth.signUp(...)

        setTimeout(() => {
            setLoading(false);
            Alert.alert("Info", "Inscription simulée (Supabase non configuré)");
            // router.replace('/(auth)/login'); 
        }, 1000);
    };

    return (
        <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1, padding: 24, justifyContent: 'center' }}>
            <View className="mb-6">
                <Text className="text-3xl font-bold text-gray-900 mb-2">Créer un compte</Text>
                <Text className="text-neutral text-base">
                    Rejoignez la plateforme et trouvez votre opportunité.
                </Text>
            </View>

            <View className="flex-row gap-4">
                <View className="flex-1">
                    <Controller
                        control={control}
                        name="firstName"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Prénom"
                                placeholder="Thierno"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.firstName?.message}
                            />
                        )}
                    />
                </View>
                <View className="flex-1">
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Nom"
                                placeholder="Diallo"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.lastName?.message}
                            />
                        )}
                    />
                </View>
            </View>

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Email"
                        placeholder="exemple@email.com"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.email?.message}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                )}
            />

            <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Téléphone"
                        placeholder="620 00 00 00"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.phone?.message}
                        keyboardType="phone-pad"
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Mot de passe"
                        placeholder="******"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.password?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Confirmer mot de passe"
                        placeholder="******"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.confirmPassword?.message}
                    />
                )}
            />

            <Button
                label="S'inscrire"
                onPress={handleSubmit(onSubmit)}
                loading={loading}
                className="mt-2 mb-4"
            />

            <View className="flex-row justify-center pb-8">
                <Text className="text-neutral">Déjà un compte ? </Text>
                <Link href="/(auth)/login" className="text-primary font-bold">
                    Se connecter
                </Link>
            </View>
        </ScrollView>
    );
}
