import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AppInput from '../src/components/AppInput.js'
import AppButton from '../src/components/AppButton.js'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 

    return (
        <View style={styles.container}>
            <Text>Meu Bolso</Text>
            <Text>Controle suas finanças.</Text>
            <AppInput label="E-mail" placeholder="Digite seu e-mail"
            autoCapitalize="none" keyboardType="email-address"
            value={email} onChangeText={setEmail}/>

            <AppInput label="Senha" secureTextEntry placeholder="Digite sua senha"
            value={password} onChangeText={setPassword} />

            <AppButton title="Entrar" loading={loading}/>
            <TouchableOpacity>
                <Text>Criar nova conta</Text>
            </TouchableOpacity>
        </View>
    )
}