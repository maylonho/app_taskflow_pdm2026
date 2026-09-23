import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function AddTarefas() {
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")

    return (
        <View>
            <Text>Nova Tarefa</Text>
            <TextInput
                value={titulo}
                style={styles.campo}
                onChangeText={(texto) => { setTitulo(texto) }}
                placeholder="Digite o título da tarefa"
            />
            <TextInput
                value={descricao}
                style={styles.campo}
                onChangeText={(texto) => { setDescricao(texto) }}
                placeholder="Digite a descricao da tarefa"
                multiline
            />

        </View>
    )
}

const styles = StyleSheet.create({
    campo: {
        borderWidth: 3
    }
})