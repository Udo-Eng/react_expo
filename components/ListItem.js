// import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function ListItem({ item , deleteItem}) {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.text}>{item.text}</Text>
                <MaterialIcons name="highlight-remove" size={20} color="red"  onPress= {() => {deleteItem(item.id)}}/>
            </View>
        </TouchableOpacity>
    );2
}



const styles = StyleSheet.create({
    listItem: { padding: 15, backgroundColor: '#f8f8f8', borderBottomWidth: 1, borderColor: '#eee' },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontSize: 18,
        textAlign: 'left'
    }
})


export default ListItem;