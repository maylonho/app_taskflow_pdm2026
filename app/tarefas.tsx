import { StyleSheet, Text, View, Button } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export default function Tarefas() {
    function voltarInicio(){
        router.dismissAll()
        router.push("/")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>
            <Button
                title="Voltar"
                onPress={router.back}
            />

            <Button
                title='Configurações'
                onPress={() => router.push("/configuracoes")}
            />

            <Button
                title='INICIO'
                onPress={voltarInicio}
            />
        </View>
    )
}