import { View, Text, FlatList, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { JobCard } from '../../../components/domain/JobCard';
import { MOCK_JOBS } from '../../../data/jobs';
import { Search } from 'lucide-react-native';

export default function JobsScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-background">
            <View className="bg-white p-4 pt-12 pb-4 border-b border-gray-100">
                <Text className="text-2xl font-bold text-gray-900 mb-4">Offres d'emploi</Text>
                <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                    <Search size={20} color="#94A3B8" />
                    <TextInput
                        placeholder="Rechercher un poste, une entreprise..."
                        className="flex-1 ml-2 text-base text-gray-900"
                        placeholderTextColor="#94A3B8"
                    />
                </View>
            </View>

            <FlatList
                data={MOCK_JOBS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <JobCard
                        job={item}
                        onPress={() => router.push({ pathname: '/jobs/[id]', params: { id: item.id } })}
                    />
                )}
                contentContainerStyle={{ padding: 16 }}
            />
        </View>
    );
}
