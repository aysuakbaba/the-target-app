import { View, Image, StyleSheet, Text } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../utils/colors"
import PrimaryButton from "../components/ui/PrimaryButton"
function GameOverScreen() {
    return(
        <View style={styles.rootContainer}>
            <Title style={styles.title}>GAME OVER!</Title>
            <View style={styles.imageContainer}>

            <Image style={styles.image} source={require('../assets/success.png')}/>
            </View>
            <Text style= {styles.summaryText}>Your phone needed <Text style= {styles.highlight}>x</Text> rounds to guess the number <Text style= {styles.highlight}>y</Text>.</Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
       

    )
}


export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 4,
        borderColor: 'white',
        overflow: 'hidden',
        margin: 36

    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        width: '80%',
        alignSelf: 'center'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        width: '92%',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }

})
