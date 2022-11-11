import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function AddItem({ addItem }) {

    const [text, setText] = useState('');
    const onChange = (textValue) => setText(textValue);

    const addItemHandler = () => {
        addItem(text);
    }

    return (
        <View>
            <TextInput
                placeholder='Add an item...'
                style={styles.input}
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={addItemHandler}>
                <Text style={styles.btnText}>
                    <Ionicons name="ios-add" size={20} color="darkslateblue" style={styles.icon} />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
} ``


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,

    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },
    icon: {
        marginRight: 10
    }
})


export default AddItem;