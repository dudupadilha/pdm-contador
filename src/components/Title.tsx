import { StyleSheet, View, Text } from 'react-native';

export function Title(){
    return (
        <View>
            <Text style={styles.title}>Contador Simples</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
});