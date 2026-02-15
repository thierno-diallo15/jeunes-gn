import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { MOCK_TRAININGS } from '../../data/trainings';
import { Clock, Building2, BookOpen } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TrainingScreen() {
    return (
        <View className="flex-1 bg-background">
            {/* Modern Gradient Header */}
            <LinearGradient
                colors={['#F97316', '#EA580C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="pt-12 pb-6 px-4"
            >
                <Text className="text-3xl font-bold text-white mb-1">Formations</Text>
                <Text className="text-orange-100 text-sm">{MOCK_TRAININGS.length} formations disponibles</Text>
            </LinearGradient>

            <FlatList
                data={MOCK_TRAININGS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="bg-white rounded-3xl mb-4 overflow-hidden border border-gray-100"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.08,
                            shadowRadius: 12,
                            elevation: 4,
                        }}
                    >
                        {/* Image with Gradient Overlay */}
                        <View className="relative">
                            <Image
                                source={{ uri: item.image }}
                                className="w-full h-48"
                                resizeMode="cover"
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.6)']}
                                className="absolute inset-0"
                            />

                            {/* Category Badge */}
                            <View className="absolute top-3 left-3">
                                <LinearGradient
                                    colors={['#F97316', '#EA580C']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    className="px-3 py-1.5 rounded-full"
                                >
                                    <Text className="text-white font-bold text-xs uppercase tracking-wide">
                                        {item.category}
                                    </Text>
                                </LinearGradient>
                            </View>

                            {/* Price Badge */}
                            <View className="absolute top-3 right-3 bg-white/90 backdrop-blur-xl px-3 py-1.5 rounded-full">
                                <Text className="font-bold text-gray-900 text-sm">{item.cost}</Text>
                            </View>
                        </View>

                        <View className="p-5">
                            <Text className="text-xl font-bold text-gray-900 mb-3 leading-6">
                                {item.title}
                            </Text>

                            <View className="flex-row items-center mb-2">
                                <View className="w-8 h-8 bg-orange-50 rounded-full items-center justify-center mr-2">
                                    <Building2 size={14} color="#F97316" />
                                </View>
                                <Text className="text-gray-600 text-sm font-medium flex-1">{item.provider}</Text>
                            </View>

                            <View className="flex-row items-center">
                                <View className="w-8 h-8 bg-blue-50 rounded-full items-center justify-center mr-2">
                                    <Clock size={14} color="#3B82F6" />
                                </View>
                                <Text className="text-gray-600 text-sm font-medium">{item.duration}</Text>
                            </View>

                            {/* CTA Button */}
                            <View className="mt-4 pt-4 border-t border-gray-100">
                                <View className="bg-secondary-500 py-3 rounded-xl items-center">
                                    <Text className="text-white font-bold">En savoir plus</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ padding: 16, paddingTop: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
