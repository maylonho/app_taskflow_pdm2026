import { StyleSheet, Text, View, Button } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Botao from "@/components/Botao";
import TarefaCard from "@/components/TarefaCard";

export default function Tarefas() {
    function voltarInicio() {
        router.dismissAll()
        router.push("/")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>

            <TarefaCard
                titulo="Atividade de PDM"
                descricao="Entregar a atividade até 12/10"
                prioridade="Alta"
            />

            <TarefaCard
                titulo="Atividade de outros professores"
                descricao="Atividade das demais disciplinas"
                prioridade="Media"

            />

            <Botao
                texto="Voltar"
                onPress={router.back}
            />
        </View>
    )
}