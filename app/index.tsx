import { View, Text, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center bg-background p-4">
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="auto" />

            <View className="items-center mb-8">
                <Text className="text-3xl font-bold text-primary mb-2">Jeunes GN</Text>
                <Text className="text-lg text-neutral text-center">
                    Votre passerelle vers l'emploi et l'entrepreneuriat
                </Text>
            </View>

            <View className="w-full max-w-sm gap-4">
                <Link href="/(auth)/register" asChild>
                    <TouchableOpacity className="bg-primary p-4 rounded-xl items-center">
                        <Text className="text-white font-bold text-lg">Je cherche un emploi</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/(auth)/register-company" asChild>
                    <TouchableOpacity className="bg-white border-2 border-primary p-4 rounded-xl items-center">
                        <Text className="text-primary font-bold text-lg">Je recrute</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}
