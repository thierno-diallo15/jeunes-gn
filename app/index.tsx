import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Briefcase, Building2, TrendingUp, Users } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function Home() {
    return (
        <View className="flex-1 bg-dark-900">
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />

            {/* Gradient Background */}
            <LinearGradient
                colors={['#0F172A', '#1E293B', '#10B981']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="absolute inset-0"
            />

            {/* Floating Orbs for Visual Interest */}
            <View className="absolute top-20 right-10 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-3xl" />
            <View className="absolute bottom-40 left-10 w-40 h-40 bg-secondary-400 rounded-full opacity-20 blur-3xl" />

            <View className="flex-1 items-center justify-center px-6">
                {/* Hero Section */}
                <View className="items-center mb-12">
                    <View className="bg-primary-500/10 px-4 py-2 rounded-full mb-6 border border-primary-400/30">
                        <Text className="text-primary-300 font-semibold text-sm">
                            🇬🇳 Plateforme Guinéenne d'Emploi
                        </Text>
                    </View>

                    <Text className="text-5xl font-bold text-white mb-4 text-center">
                        Jeunes GN
                    </Text>

                    <Text className="text-xl text-gray-300 text-center leading-7 px-4">
                        Votre passerelle vers{'\n'}
                        <Text className="text-primary-400 font-bold">l'emploi</Text> et{' '}
                        <Text className="text-secondary-400 font-bold">l'entrepreneuriat</Text>
                    </Text>
                </View>

                {/* Stats Cards */}
                <View className="flex-row gap-3 mb-10 px-2">
                    <View className="bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/20">
                        <Text className="text-white font-bold text-lg">500+</Text>
                        <Text className="text-gray-300 text-xs">Offres</Text>
                    </View>
                    <View className="bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/20">
                        <Text className="text-white font-bold text-lg">1200+</Text>
                        <Text className="text-gray-300 text-xs">Candidats</Text>
                    </View>
                    <View className="bg-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/20">
                        <Text className="text-white font-bold text-lg">80+</Text>
                        <Text className="text-gray-300 text-xs">Entreprises</Text>
                    </View>
                </View>

                {/* CTA Buttons */}
                <View className="w-full max-w-sm gap-4">
                    <Link href="/(auth)/register" asChild>
                        <TouchableOpacity className="overflow-hidden rounded-2xl">
                            <LinearGradient
                                colors={['#10B981', '#059669']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                className="p-5 items-center"
                            >
                                <View className="flex-row items-center gap-2">
                                    <Briefcase size={20} color="white" />
                                    <Text className="text-white font-bold text-lg">Je cherche un emploi</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/(auth)/register-company" asChild>
                        <TouchableOpacity className="bg-white/10 backdrop-blur-xl border-2 border-white/30 p-5 rounded-2xl items-center">
                            <View className="flex-row items-center gap-2">
                                <Building2 size={20} color="white" />
                                <Text className="text-white font-bold text-lg">Je recrute</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/(tabs)/jobs" asChild>
                        <TouchableOpacity className="items-center mt-2">
                            <Text className="text-gray-400 font-medium">
                                Explorer les offres →
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
}
