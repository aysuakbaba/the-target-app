import { StyleSheet, Text, Platform } from "react-native";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 0 : 2 ,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 8,
    borderRadius: 8,
    maxWidth: '80%',
    width: 300
  
  },
});
