import HomeHeader from "@/components/homeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { Text, ScrollView, View } from "react-native";

import { getMeals, Meal } from "@/storage/meals";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import ShareButton from "@/components/ShareButton";
import CopyButton from "@/components/CopyButton";
import ReminderToggle from "@/components/ReminderToggle";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log("Loaded meals:", data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>MacroZone</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      {/* <ScrollView style={globalStyles.container}> */}
      <CopyButton meals={meals} />
      <ReminderToggle />
      <RecentMeals meals={meals} onDelete={loadMeals} />
      {/* </ScrollView> */}
    </View>
  );
}
