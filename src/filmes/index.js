import React, { useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native'

import Detalhes from '../Detalhes'

export default function Filmes({ data }) {

    const [modalOn, setModalOn] = useState(false)
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.title}>{data.nome}</Text>

                <Image
                    source={{ uri: data.foto }}
                    style={styles.photo} />

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao}
                        onPress={() => {setModalOn(true)}}>
                        <Text style={styles.botaoText}>Leia mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalOn}>
                <Detalhes filme={data} voltar={()=> setModalOn(false)}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2
    },
    photo: {
        height: 250,
        zIndex: 2
    },
    title: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9
    },
    botao: {
        width: 100,
        backgroundColor: '#09afff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    botaoText: {
        color: 'white',
        textAlign: 'center'
    }
})