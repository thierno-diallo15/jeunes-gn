import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { MOCK_TRAININGS } from '../../data/trainings';
import { Clock, Tag, Building2 } from 'lucide-react-native';

export default function TrainingScreen() {
    return (
        <View className="flex-1 bg-background p-4 pt-12">
            <Text className="text-2xl font-bold text-gray-900 mb-6">Formations</Text>

            <FlatList
                data={MOCK_TRAININGS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity className="bg-white rounded-xl mb-4 overflow-hidden border border-gray-100 shadow-sm">
                        <Image
                            source={{ uri: item.image }}
                            className="w-full h-40"
                            resizeMode="cover"
                        />
                        <View className="p-4">
                            <View className="flex-row justify-between items-start mb-2">
                                <Text className="text-sm font-semibold text-primary mb-1 uppercase tracking-wide">{item.category}</Text>
                                <Text className="font-bold text-gray-900">{item.cost}</Text>
                            </View>

                            <Text className="text-lg font-bold text-gray-900 mb-2">{item.title}</Text>

                            <View className="flex-row items-center mb-2">
                                <Building2 size={14} color="#64748B" />
                                <Text className="text-gray-500 ml-2 text-sm">{item.provider}</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Clock size={14} color="#64748B" />
                                <Text className="text-gray-500 ml-2 text-sm">{item.duration}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
