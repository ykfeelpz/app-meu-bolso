import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ HeaderShown: false}}>
            <Stack.Screen name="index" screenOptions={{ HclseaderShown: false }} />
            <Stack.Screen name="register" options={{ title:'Criar conta' }} />
        </Stack>
    );
}