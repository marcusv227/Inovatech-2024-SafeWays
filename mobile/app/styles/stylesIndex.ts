import { StyleSheet } from "react-native";
import theme from "../../assets/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    centerButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 50,
        elevation: 5,
    },
    permissionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    permissionText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    permissionButton: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: theme.colors.text,
        fontWeight: 'bold',
    },
    fab: {
        backgroundColor: theme.colors.primary,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    fab2: {
        backgroundColor: theme.colors.alert,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 60,
    },
});