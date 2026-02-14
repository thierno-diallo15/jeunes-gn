import { View, Text, Alert, ScrollView } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

const companyRegisterSchema = z.object({
    companyName: z.string().min(2, 'Le nom de l\'entreprise est requis'),
    sector: z.string().min(2, 'Le secteur est requis'),
    size: z.string().min(1, 'La taille est requise (ex: 10-50)'), // Could be a select
    location: z.string().min(2, 'La localisation est requise'),
    email: z.string().email('Email professionnel requis'),
    password: z.string().min(6, 'Le mot de passe doit faire au moins 6 caractères'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
});

type CompanyRegisterFormData = z.infer<typeof companyRegisterSchema>;

export default function RegisterCompany() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<CompanyRegisterFormData>({
        resolver: zodResolver(companyRegisterSchema),
    });

    const onSubmit = async (data: CompanyRegisterFormData) => {
        setLoading(true);
        // TODO: Integration Supabase (SignUp + Insert into companies table)

        setTimeout(() => {
            setLoading(false);
            Alert.alert("Info", "Demande de création de compte entreprise envoyée (Simulation)");
        }, 1000);
    };

    return (
        <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1, padding: 24, justifyContent: 'center' }}>
            <View className="mb-6">
                <Text className="text-3xl font-bold text-gray-900 mb-2">Espace Entreprise</Text>
                <Text className="text-neutral text-base">
                    Recrutez les meilleurs talents guinéens.
                </Text>
            </View>

            <Controller
                control={control}
                name="companyName"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Nom de l'entreprise"
                        placeholder="Ex: Orange Guinée"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.companyName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="sector"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Secteur d'activité"
                        placeholder="Ex: Télécommunications, Mines..."
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.sector?.message}
                    />
                )}
            />

            <View className="flex-row gap-4">
                <View className="flex-1">
                    <Controller
                        control={control}
                        name="size"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Taille"
                                placeholder="10-50"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.size?.message}
                            />
                        )}
                    />
                </View>
                <View className="flex-1">
                    <Controller
                        control={control}
                        name="location"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Ville / Siège"
                                placeholder="Conakry"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.location?.message}
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
                        label="Email Professionnel"
                        placeholder="contact@entreprise.gn"
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
                label="Créer un compte entreprise"
                onPress={handleSubmit(onSubmit)}
                loading={loading}
                className="mt-2 mb-4"
            />

            <View className="flex-row justify-center pb-8">
                <Text className="text-neutral">Déjà inscrit ? </Text>
                <Link href="/(auth)/login" className="text-primary font-bold">
                    Se connecter
                </Link>
            </View>
        </ScrollView>
    );
}
