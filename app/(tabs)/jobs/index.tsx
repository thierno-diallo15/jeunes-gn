import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { JobCard } from '../../../components/domain/JobCard';
import { MOCK_JOBS } from '../../../data/jobs';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function JobsScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-background">
            {/* Modern Gradient Header */}
            <LinearGradient
                colors={['#10B981', '#059669']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="pt-12 pb-6 px-4"
            >
                <Text className="text-3xl font-bold text-white mb-1">Offres d'emploi</Text>
                <Text className="text-primary-100 text-sm mb-4">{MOCK_JOBS.length} opportunités disponibles</Text>

                {/* Modern Search Bar */}
                <View className="flex-row gap-3">
                    <View className="flex-1 flex-row items-center bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-4 py-3">
                        <Search size={20} color="white" />
                        <TextInput
                            placeholder="Rechercher..."
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            className="flex-1 ml-3 text-white text-base"
                        />
                    </View>

                    <TouchableOpacity className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl w-12 h-12 items-center justify-center">
                        <SlidersHorizontal size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <FlatList
                data={MOCK_JOBS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <JobCard
                        job={item}
                        onPress={() => router.push({ pathname: '/jobs/[id]', params: { id: item.id } })}
                    />
                )}
                contentContainerStyle={{ padding: 16, paddingTop: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
