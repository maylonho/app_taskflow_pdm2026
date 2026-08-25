import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image 
                    source={require("../assets/images/logo.png")}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <Text style={styles.titulo}>TaskFlow</Text>

                <Text style={styles.descricao}>
                    Organize sua tarefas de forma simples
                </Text>
            </View>
        </SafeAreaView>
    );
}

