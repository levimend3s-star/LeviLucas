import {View, Text, TextInput, Button, Alert} from 'react-native'
import { useState } from 'react'

import { entrar } from '../services/auth'

export	default function Login(navigation){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarLogin(){
        if(!email||!senha){
            alert('Preencha todos os campos.')
            return
        }

        try{
            await entrar(email, senha)
            navigation.navigate('Home')
        }catch(error){
            alert('Email ou senha incorretos.')
            console.log(error)
        }
    }
    return(
        <View>
            <Text>Login</Text>
            <TextInput>
                placeholder='email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-adress'
                autoCapitalize='none'
            </TextInput>
            <Button>
                title='Acessar'
                onPress={realizarLogin}
            </Button>
            <Button>
                title='Criar uma conta'
                onPress={()=>navigation.navigate('Cadastro')}
            </Button>
        </View>
    )
}