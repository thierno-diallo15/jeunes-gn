import { View, Text, Image, ScrollView, Alert } from 'react-native';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'expo-router';
import { Settings, Edit, FileText, Heart, LogOut } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
    const router = useRouter();

    const handleLogout = () => {
        Alert.alert("Déconnexion", "Vous avez été déconnecté.");
        router.replace('/');
    }

    return (
        <ScrollView className="flex-1 bg-background">
            <View className="bg-white p-6 pt-12 border-b border-gray-100">
                <View className="items-center">
                    <View className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden">
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/300' }}
                            className="w-full h-full"
                        />
                    </View>
                    <Text className="text-2xl font-bold text-gray-900">Thierno Diallo</Text>
                    <Text className="text-gray-500">Développeur Fullstack</Text>
                    <Text className="text-gray-400 text-sm mt-1">Conakry, Guinée</Text>
                </View>

                <View className="flex-row justify-center mt-6 gap-4">
                    <View className="items-center bg-gray-50 p-3 rounded-xl w-24">
                        <Text className="font-bold text-lg text-gray-900">12</Text>
                        <Text className="text-xs text-gray-500">Candidatures</Text>
                    </View>
                    <View className="items-center bg-gray-50 p-3 rounded-xl w-24">
                        <Text className="font-bold text-lg text-gray-900">5</Text>
                        <Text className="text-xs text-gray-500">Entretiens</Text>
                    </View>
                    <View className="items-center bg-gray-50 p-3 rounded-xl w-24">
                        <Text className="font-bold text-lg text-gray-900">2</Text>
                        <Text className="text-xs text-gray-500">Offres</Text>
                    </View>
                </View>
            </View>

            <View className="p-6 gap-4">

                <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-xl border border-gray-100">
                    <View className="w-10 h-10 bg-blue-50 rounded-full items-center justify-center mr-4">
                        <FileText size={20} color="#3B82F6" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-semibold text-gray-900">Mon CV</Text>
                        <Text className="text-gray-500 text-sm">cv_thierno_diallo_2025.pdf</Text>
                    </View>
                    <Edit size={16} color="#94A3B8" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-xl border border-gray-100">
                    <View className="w-10 h-10 bg-red-50 rounded-full items-center justify-center mr-4">
                        <Heart size={20} color="#EF4444" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-semibold text-gray-900">Offres favorites</Text>
                        <Text className="text-gray-500 text-sm">3 offres sauvegardées</Text>
                    </View>
                    <Edit size={16} color="#94A3B8" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-xl border border-gray-100">
                    <View className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center mr-4">
                        <Settings size={20} color="#64748B" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-semibold text-gray-900">Paramètres</Text>
                        <Text className="text-gray-500 text-sm">Notifications, mot de passe...</Text>
                    </View>
                    <Edit size={16} color="#94A3B8" />
                </TouchableOpacity>

                <Button
                    label="Se déconnecter"
                    variant="outline"
                    className="mt-4 border-red-200"
                    onPress={handleLogout}
                />

            </View>
        </ScrollView>
    );
}
