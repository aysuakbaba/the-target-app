import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 300) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title style={styles.title}>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 4,
    borderColor: "white",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    width: "80%",
    alignSelf: "center",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    width: "92%",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
