import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native'
import {useState} from 'react'
import {entrar} from '../services/auth'

export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarLogin() {
        if(!email || !senha){
            alert("Ainda faltam campos.")
            return
        }
        try {
            await entrar(email, senha)
            navigation.navigate('Home')
        } catch(error){
            alert("Email ou senha incorretos.")
            console.log(error)
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Olá! Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <View style={styles.botao}>
                <Button
                    title='Login'
                    onPress={realizarLogin}
                />
            </View>
            <View style={styles.botao}>
                <Button
                    title='Não tenho conta'
                    onPress={()=>navigation.navigate('Cadastro')}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#375686',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    botao: {
        marginBottom: 10,
    },
})
