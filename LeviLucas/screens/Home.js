import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../config/firebase";
import { sair } from "../services/auth";

export default function Home({ navigation }) {

    async function realizarLogout() {
        await sair();
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Seja bem vindo! Agora saia!</Text>
            <Text style={styles.usuario}>
                Usuário: {auth.currentUser?.email}
            </Text>
            <View style={styles.botao}>
                <Button
                    title="Sair"
                    onPress={realizarLogout}
                />
            </View>
        </View>
    );
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
        marginBottom: 100,
    },
});
