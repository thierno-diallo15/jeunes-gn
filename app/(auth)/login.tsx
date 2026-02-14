import { View, Text, Alert } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';
import { useState } from 'react';

const loginSchema = z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(6, 'Le mot de passe doit faire au moins 6 caractères'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setLoading(true);
        // TODO: Integrer Supabase Auth
        // const { error } = await supabase.auth.signInWithPassword({
        //   email: data.email,
        //   password: data.password,
        // });

        // Simulation de connexion réussie pour le développement UI
        setTimeout(() => {
            setLoading(false);
            // if (error) Alert.alert('Erreur', error.message);
            // else router.replace('/(tabs)/home'); // Redirection vers espace connecté
            Alert.alert("Info", "Connexion simulée (Supabase non configuré)");
        }, 1000);
    };

    return (
        <View className="flex-1 bg-background p-6 justify-center">
            <View className="mb-8">
                <Text className="text-3xl font-bold text-gray-900 mb-2">Bon retour !</Text>
                <Text className="text-neutral text-base">
                    Connectez-vous pour accéder à votre espace.
                </Text>
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
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Mot de passe"
                        placeholder="Votre mot de passe"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.password?.message}
                    />
                )}
            />

            <View className="items-end mb-6">
                <Link href="/(auth)/register" className="text-primary font-medium">
                    Mot de passe oublié ?
                </Link>
            </View>

            <Button
                label="Se connecter"
                onPress={handleSubmit(onSubmit)}
                loading={loading}
                className="mb-4"
            />

            <View className="flex-row justify-center mt-4">
                <Text className="text-neutral">Pas encore de compte ? </Text>
                <Link href="/(auth)/register" className="text-primary font-bold">
                    S'inscrire
                </Link>
            </View>
        </View>
    );
}
