import { View, Text, TextInput, Button, Alert } from 'react-native'
import { useState } from 'react'
import { cadastrar } from '../services/auth'

export	default function Cadastro(){
    const [email, setEmail] = useState('navigation')
    const [senha, setSenha] = useState('')

    async function realizarCadastro(){
        if(!email||!senha){
            alert('Preencha todos os campos.')
            return
    }
    
    try{
        await cadastrar(email, senha)
        alert('Usuário cadastrado.')
        navigation.navigate('Login')
    }catch(error){
        alert('Não foi possível cadastrar o usuário')
        console.log(error)
        }
    }

    return(
        <View>
            <Text>Cadastro</Text>
            <TextInput>
                placeholder='email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-adress'
                autoCapitalize='none'
            </TextInput>
            <TextInput>
                placeholder='senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            </TextInput>
            <Button>
                title='Cadastrar
                onPress={realizarCadastro}
            </Button>
            <Button>
                title='Já tenho uma conta'
                onPress={()=>navigation.navigate('Login')}
            </Button>
        </View>
    )
}