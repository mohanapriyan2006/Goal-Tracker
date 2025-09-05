import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import GoalsModal from "./GoalsModal";

export default function Main() {

  const [isModelVisible, setIsModelVisible] = useState(false);


  return (
    <View
      style={styles.appContainer}
    >

      <Image style={styles.image} source={require('../assets/images/goal.jpg')} />

      <Text style={styles.textStyle}>Welcome to To-Do Goal App!</Text>
      <Button color="#008ed5ff" title="Show Goals" onPress={() => { setIsModelVisible(true) }} />

      <GoalsModal visible={isModelVisible} setIsModelVisible={setIsModelVisible} />

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 200,
    backgroundColor: '#ffffff',
  },
  textStyle: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'semibold',
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginVertical: 10,
  }
});
