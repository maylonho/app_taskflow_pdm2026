
import { useState } from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

type SeletorImagemProps = {
    onImagemSelecionada?: (uri: string | null) => void;
    imagemInicial?: string | null;
    permiteCamera?: boolean;
    permiteGaleria?: boolean;
    permiteEdicao?: boolean;
    aspect?: [number, number];
};

export default function SeletorImagem({
    onImagemSelecionada,
    imagemInicial = null,
    permiteCamera = true,
    permiteGaleria = true,
    permiteEdicao = true,
    aspect = [1, 1],
}: SeletorImagemProps) {
    const [imagem, setImagem] = useState<string | null>(
        imagemInicial
    );

    function atualizarImagem(uri: string | null) {
        setImagem(uri);
        onImagemSelecionada?.(uri);
    }

    async function selecionarImagem() {
        const resultado =
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                allowsEditing: permiteEdicao,
                aspect,
                quality: 0.8,
            });

        if (!resultado.canceled) {
            atualizarImagem(resultado.assets[0].uri);
        }
    }

    async function tirarFoto() {
        const permissao =
            await ImagePicker.requestCameraPermissionsAsync();

        if (!permissao.granted) {
            Alert.alert(
                'Permissão necessária',
                'Acesso à câmera negado.'
            );
            return;
        }

        const resultado = await ImagePicker.launchCameraAsync({
            allowsEditing: permiteEdicao,
            aspect,
            quality: 0.8,
        });

        if (!resultado.canceled) {
            atualizarImagem(resultado.assets[0].uri);
        }
    }

    function excluirImagem() {
        Alert.alert(
            'Excluir imagem',
            'Deseja remover a imagem selecionada?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => atualizarImagem(null),
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.areaImagem}>
                {imagem ? (
                    <>
                        <Image
                            source={{ uri: imagem }}
                            style={styles.imagem}
                            resizeMode="cover"
                        />

                        <Pressable
                            style={styles.botaoExcluir}
                            onPress={excluirImagem}
                            accessibilityLabel="Excluir imagem"
                        >
                            <Ionicons
                                name="trash-outline"
                                size={20}
                                color="#FFFFFF"
                            />
                        </Pressable>
                    </>
                ) : (
                    <View style={styles.estadoVazio}>
                        <Ionicons
                            name="image-outline"
                            size={48}
                            color="#E40613"
                        />
                        <Text style={styles.textoVazio}>
                            Nenhuma imagem selecionada
                        </Text>
                    </View>
                )}
            </View>

            {permiteGaleria && (
                <Pressable
                    style={styles.botaoPrincipal}
                    onPress={selecionarImagem}
                >
                    <Ionicons
                        name="images-outline"
                        size={22}
                        color="#FFFFFF"
                    />
                    <Text style={styles.textoBotaoPrincipal}>
                        Escolher da galeria
                    </Text>
                </Pressable>
            )}

            {permiteCamera && (
                <Pressable
                    style={styles.botaoSecundario}
                    onPress={tirarFoto}
                >
                    <Ionicons
                        name="camera-outline"
                        size={22}
                        color="#E40613"
                    />
                    <Text style={styles.textoBotaoSecundario}>
                        Tirar foto
                    </Text>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 12,
    },

    areaImagem: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 18,
        backgroundColor: '#F7F7FA',
        borderWidth: 1,
        borderColor: '#E8E8EF',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagem: {
        width: '100%',
        height: '100%',
    },

    estadoVazio: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 12,
    },

    textoVazio: {
        fontSize: 14,
        color: '#777985',
        textAlign: 'center',
    },

    botaoExcluir: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: '#E40613',
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoPrincipal: {
        minHeight: 54,
        backgroundColor: '#E40613',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 16,
    },

    textoBotaoPrincipal: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },

    botaoSecundario: {
        minHeight: 54,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E8E8EF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 16,
    },

    textoBotaoSecundario: {
        color: '#30313A',
        fontSize: 15,
        fontWeight: '600',
    },
});