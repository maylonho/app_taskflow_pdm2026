import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { router } from 'expo-router'
import Botao from '@/components/Botao'
import { useState } from 'react'
import { salvarUsuario } from '@/utils/armazenamento'

export default function Configuracoes() {
    const [nome, setNome] = useState("")

    async function salvar() {
        if(nome.trim() === ""){
            Alert.alert("Atenção!", "Digite um nome de usuario.")
            return;
        }

        const usuario = {
            username: nome.trim()
        }

        await salvarUsuario(usuario);

        Alert.alert("Sucesso!", "Nome de usuario alterado.")
        router.replace("/tarefas/tarefas")
    }

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 30 }}>Tela de Configurações</Text>

            <Text style={styles.label}>Nome * </Text>

            <TextInput
                style={styles.campo}
                placeholder='Digite seu nome ou apelido'
                value={nome}
                onChangeText={setNome}
            />

            <View style={{alignSelf: 'flex-end'}}>
                <Botao
                    texto='Salvar'
                    onPress={salvar}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },
    campo: {
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15
    },
});