import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MapPin, Briefcase, Clock } from 'lucide-react-native';

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
            className="bg-white p-4 rounded-xl mb-4 border border-gray-100 shadow-sm"
        >
            <View className="flex-row items-center mb-3">
                <View className="w-12 h-12 bg-gray-50 rounded-lg items-center justify-center mr-3 border border-gray-100">
                    {job.logo ? (
                        <Image
                            source={{ uri: job.logo }}
                            className="w-8 h-8"
                            resizeMode="contain"
                        />
                    ) : (
                        <Briefcase size={20} color="#94A3B8" />
                    )}
                </View>
                <View className="flex-1">
                    <Text className="font-bold text-base text-gray-900" numberOfLines={1}>
                        {job.title}
                    </Text>
                    <Text className="text-gray-500 text-sm">{job.company}</Text>
                </View>
            </View>

            <View className="flex-row flex-wrap gap-2 mb-3">
                <View className="flex-row items-center bg-green-50 px-2 py-1 rounded-md">
                    <Briefcase size={12} color="#10B981" />
                    <Text className="text-primary text-xs ml-1 font-medium">{job.type}</Text>
                </View>
                <View className="flex-row items-center bg-gray-50 px-2 py-1 rounded-md">
                    <MapPin size={12} color="#64748B" />
                    <Text className="text-gray-500 text-xs ml-1">{job.location}</Text>
                </View>
                <View className="flex-row items-center bg-gray-50 px-2 py-1 rounded-md">
                    <Clock size={12} color="#64748B" />
                    <Text className="text-gray-500 text-xs ml-1">{job.date}</Text>
                </View>
            </View>

            <Text className="text-gray-900 font-semibold text-sm">
                {job.salary}
            </Text>
        </TouchableOpacity>
    );
}
