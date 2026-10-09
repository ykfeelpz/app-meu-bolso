import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import BalanceCard from '../../src/components/BalanceCard.js';
import AppButton from '../../src/components/AppButton.js';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Meu Bolso</Text>
                    <Text style={styles.sub}>Resumo financeiro</Text>
                    <TouchableOpacity>
                        <Text style={styles.profile}>Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <BalanceCard balance={1000} />

            <AppButton title="Gerar relatório PDF"/>

            <View style={styles.row}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16
    },
    title: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2f3640'
    },
    sub: {
        color: '#7f8c8d'
    },
    profile: {
        color: '#008f72',
        fontWeight: '700'
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: -4
    }
});