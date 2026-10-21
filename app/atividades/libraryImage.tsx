import {Image, Pressable, View, Text, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import Botao from '@/components/Botao'

export default function Galeria(){
    const [image, setImage] = useState<string | null>(null)

    async function selecionarImagem(){
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.8
        })
        if(!resultado.canceled){
            setImage(resultado.assets[0].uri)
        }
    }

    async function tirarFoto() {
        const permissao = await ImagePicker.requestCameraPermissionsAsync()
        
        if(!permissao.granted){
            Alert.alert("Permissão Necessária", "Acesso a camera negado.")
            return
        }

        const resultado = await ImagePicker.launchCameraAsync()
        if (!resultado.canceled){
            setImage(resultado.assets[0].uri)
        }
    }

    return(
        <View>
            <Text>Galeria</Text>
            <Botao
                texto='Selecionar Imagem'
                onPress={selecionarImagem}
            />
            <Botao
                texto='Tirar foto'
                onPress={tirarFoto}
            />
            {image && <Image source={{uri: image}} style={{width:200, height:200}}/>}
        </View>
    )
}