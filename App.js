 import React, { useState, useEffect } from 'react';
 import { View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';

import api from './src/services/api';



 export default function App(){
 
  const [ lista, setLista] = useState('');
  

  async function pegaFilme(){
    
      const response = await api.get('/movie/popular?api_key=816b06d4e2b0c80d072ec02f102bea0b&language=en-US');
      //console.log(response.data);
      setLista(response.data.results);
      
      
   
    } 
    
    useEffect( () => {
     

      pegaFilme();
      
      
    },[])
  
   return(   
     
     <View style = {styles.container}>

       <View>
         <Text>
           Bem Vindos!
         </Text>
       </View>
       
         <FlatList
         style={styles.lista}
         data={lista}
         renderItem={({ item }) => 

         <View style={styles.card}>
            <Text style={styles.titulo}>Filme: {item.title}</Text> 
            
            <Image
            style={styles.capa}
            source={{
              uri: "https://image.tmdb.org/t/p/original" + item.poster_path
            }}
            />
         </View>
         }
         keyExtractor={item => item.id}     
         />
       
     </View>

   
     
   );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  lista:{

  },
  card:{
    shadowColor:'#000',
    backgroundColor:'#FFF',
    shadowOffset:{width:0, height:1},
    shadowOpacity:0.8,
    margin: 15,
    shadowRadius:5,
    borderRadius: 5,
    elevation: 3,

  },
  titulo:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    fontSize: 18,
    padding: 10,
  },
  capa:{
    width:381,
    height: 550,

  }

});







