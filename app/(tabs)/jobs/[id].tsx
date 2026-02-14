import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MOCK_JOBS } from '../../../data/jobs';
import { MapPin, Briefcase, Clock, DollarSign, Building } from 'lucide-react-native';


// Re-using UI Button
import { Button as UiButton } from '../../../components/ui/Button';

export default function JobDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const job = MOCK_JOBS.find(j => j.id === id);

    if (!job) {
        return (
            <View className="flex-1 items-center justify-center p-4">
                <Text className="text-lg text-gray-500">Offre non trouvée</Text>
                <UiButton label="Retour" onPress={() => router.back()} className="mt-4" />
            </View>
        );
    }

    const handleApply = () => {
        Alert.alert("Candidature", "Votre candidature a été envoyée avec succès !");
    };

    return (
        <View className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ padding: 20 }}>

                <View className="items-center mb-6">
                    <View className="w-20 h-20 bg-white rounded-xl items-center justify-center border border-gray-100 mb-4 shadow-sm">
                        {job.logo ? (
                            <Image source={{ uri: job.logo }} className="w-12 h-12" resizeMode="contain" />
                        ) : (
                            <Building size={32} color="#94A3B8" />
                        )}
                    </View>
                    <Text className="text-2xl font-bold text-gray-900 text-center mb-2">{job.title}</Text>
                    <Text className="text-lg text-primary font-medium">{job.company}</Text>
                </View>

                <View className="flex-row flex-wrap justify-center gap-3 mb-8">
                    <View className="flex-row items-center bg-white px-3 py-2 rounded-lg border border-gray-100">
                        <MapPin size={16} color="#64748B" />
                        <Text className="ml-2 text-gray-600">{job.location}</Text>
                    </View>
                    <View className="flex-row items-center bg-white px-3 py-2 rounded-lg border border-gray-100">
                        <Briefcase size={16} color="#64748B" />
                        <Text className="ml-2 text-gray-600">{job.type}</Text>
                    </View>
                    <View className="flex-row items-center bg-white px-3 py-2 rounded-lg border border-gray-100">
                        <DollarSign size={16} color="#64748B" />
                        <Text className="ml-2 text-gray-600">{job.salary}</Text>
                    </View>
                </View>

                <View className="bg-white p-6 rounded-2xl mb-6 shadow-sm">
                    <Text className="text-lg font-bold text-gray-900 mb-4">Description du poste</Text>
                    <Text className="text-gray-600 leading-6">
                        {job.description}
                        {'\n\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </View>
                <View className="bg-white p-6 rounded-2xl mb-6 shadow-sm">
                    <Text className="text-lg font-bold text-gray-900 mb-4">Pré-requis</Text>
                    <View className="gap-2">
                        <Text className="text-gray-600">• Diplôme en informatique ou équivalent</Text>
                        <Text className="text-gray-600">• 2 ans d'expérience minimum</Text>
                        <Text className="text-gray-600">• Maîtrise de React Native et TypeScript</Text>
                        <Text className="text-gray-600">• Esprit d'équipe et autonomie</Text>
                    </View>
                </View>

            </ScrollView>

            <View className="p-4 bg-white border-t border-gray-100">
                <UiButton label="Postuler maintenant" onPress={handleApply} size="lg" />
            </View>
        </View>
    );
}
