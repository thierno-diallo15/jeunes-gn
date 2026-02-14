import { Tabs } from 'expo-router';
import { Home, Briefcase, GraduationCap, User } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#10B981',
                tabBarInactiveTintColor: '#64748B',
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: '#E2E8F0',
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Accueil',
                    tabBarIcon: ({ color }) => <Home size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="jobs"
                options={{
                    title: 'Offres',
                    tabBarIcon: ({ color }) => <Briefcase size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="training"
                options={{
                    title: 'Formations',
                    tabBarIcon: ({ color }) => <GraduationCap size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color }) => <User size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
