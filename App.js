import {useState} from 'react';
import { View,FlatList, StyleSheet,Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem'; 

export default function App() {

const [title,setTitle] = useState('Shopping List');
const [items,setItems] = useState([
{
  id : 'm1',
  text :'Yam'
},
{
  id : 'm2',
  text :'Beans'
},
{
  id : 'm3',
  text :'Bread'
},{
  id :'m4' ,
  text :'Rice'
}]);

const setShoppingList = (value) => {
   if(typeof value === 'string'){
    setTitle(value);
   }
}

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id !== id);
  })
}


const addItem = (text) => {
  if(!text){
    Alert.alert('Error','Please enter a text',{text :'Ok'})
  }else{
    setItems(prevItems => {
      return [{id : `m_${text}` ,text : text }, ...prevItems];
    });
  }
}


const renderItem = ({item}) =>   <ListItem item = {item} deleteItem={deleteItem}/>

  return (
    <View style={styles.container}>
      <Header title={title}/>
      <AddItem  addItem={addItem}/>
      <FlatList 
        data={items}
        renderItem={renderItem}
        />
    </View>
  );
}



const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: 40
   }
})