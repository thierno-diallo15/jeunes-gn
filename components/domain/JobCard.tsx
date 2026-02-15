import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MapPin, Briefcase, Clock, TrendingUp } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface JobCardProps {
    job: {
        id: string;
        title: string;
        company: string;
        location: string;
        type: string;
        salary: string;
        date: string;
        logo?: string | null;
    };
    onPress: () => void;
}

export function JobCard({ job, onPress }: JobCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-white rounded-3xl mb-4 overflow-hidden border border-gray-100"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.08,
                shadowRadius: 12,
                elevation: 4,
            }}
        >
            {/* Gradient Top Border */}
            <LinearGradient
                colors={['#10B981', '#059669']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="h-1"
            />

            <View className="p-5">
                {/* Header with Logo and Title */}
                <View className="flex-row items-start mb-4">
                    <View className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl items-center justify-center mr-4 border border-primary-200">
                        {job.logo ? (
                            <Image
                                source={{ uri: job.logo }}
                                className="w-9 h-9"
                                resizeMode="contain"
                            />
                        ) : (
                            <Briefcase size={22} color="#10B981" />
                        )}
                    </View>

                    <View className="flex-1">
                        <Text className="font-bold text-lg text-gray-900 mb-1" numberOfLines={2}>
                            {job.title}
                        </Text>
                        <Text className="text-gray-600 text-sm font-medium">{job.company}</Text>
                    </View>
                </View>

                {/* Tags */}
                <View className="flex-row flex-wrap gap-2 mb-4">
                    <View className="bg-gradient-to-r from-primary-50 to-primary-100 px-3 py-2 rounded-xl border border-primary-200">
                        <View className="flex-row items-center">
                            <Briefcase size={12} color="#10B981" />
                            <Text className="text-primary-700 text-xs ml-1.5 font-semibold">{job.type}</Text>
                        </View>
                    </View>

                    <View className="bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
                        <View className="flex-row items-center">
                            <MapPin size={12} color="#64748B" />
                            <Text className="text-gray-600 text-xs ml-1.5 font-medium">{job.location}</Text>
                        </View>
                    </View>

                    <View className="bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
                        <View className="flex-row items-center">
                            <Clock size={12} color="#64748B" />
                            <Text className="text-gray-600 text-xs ml-1.5 font-medium">{job.date}</Text>
                        </View>
                    </View>
                </View>

                {/* Salary with Icon */}
                <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                    <View className="flex-row items-center">
                        <TrendingUp size={16} color="#10B981" />
                        <Text className="text-gray-900 font-bold text-base ml-2">
                            {job.salary}
                        </Text>
                    </View>

                    <View className="bg-primary-500 px-4 py-2 rounded-xl">
                        <Text className="text-white font-semibold text-xs">Voir détails</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
