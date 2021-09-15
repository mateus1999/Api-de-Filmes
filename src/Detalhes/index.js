import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Detalhes(props){
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>

                <TouchableOpacity style={styles.voltar}
                    onPress={props.voltar}
                >
                    <Text style={{color: 'white', fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.title}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse</Text>
                <Text style={styles.desc}>{props.filme.sinopse}</Text>

            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight:10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        width: '90%',
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    voltar: {
        backgroundColor: 'red',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    title:{
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    sinopse:{
        color: 'white',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    desc: {
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    }
})