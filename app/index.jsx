import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  fullHeight: {
    height: "100%",
  },
});

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={tw`bg-black`}>
        <View
          style={[tw`flex-1 items-center justify-center `, styles.fullHeight]}
        >
          <Text style={tw`text-red-500 text-4xl`}>Home</Text>
          <Link href="/profile" style={tw`mt-4 text-blue-500 text-lg`}>
            Go to profile
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
