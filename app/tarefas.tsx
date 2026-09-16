import { StyleSheet, Text, View, Button } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Botao from "@/components/Botao";

export default function Tarefas() {
    function voltarInicio(){
        router.dismissAll()
        router.push("/")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>
            <Botao
                texto="Voltar"
                onPress={router.back}
            />

            <Botao
                texto='Configurações'
                onPress={() => router.push("/configuracoes")}
            />

            <Botao
                texto='INICIO'
                onPress={voltarInicio}
            />
            <Botao
                texto='Excluir'
                onPress={voltarInicio}
                cor="#f00"
            />
        </View>
    )
}