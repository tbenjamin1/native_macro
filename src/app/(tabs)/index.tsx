import HomeHeader from '@/components/homeHeader';
import { globalStyles } from '@/styles/global';
import { Link } from 'expo-router';
import { Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
     <HomeHeader />
      {/* <Link href='/meals' style={{ fontSize: 18, color: '#007bff' }}>
        Go to Meals
      </Link> */}
    </ScrollView>
  );
}
