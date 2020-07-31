import React, { useState } from 'react';
import { View, Text , StyleSheet , Picker , Image, Linking , ScrollView  } from 'react-native';
import Button from 'apsl-react-native-button';
import { Link } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Container } from './styles';

const styles = StyleSheet.create({
  informe: {
   color: 'white',
   textAlign: 'center',
   fontSize: 30,
  },
  seuPeso:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
  },
  scrollView1: {
    marginHorizontal: 20,
    width: 40,
    marginTop: 40,
    height: 65,
  },
  picker:{
    color:'white',
   marginLeft: 20,
   marginTop: 40,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
   linha: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
   botao: {
     marginTop: 110,
     backgroundColor: 'white',
     borderRadius: 30,
   },
   textButton: {
     color: '#2968A1',
     fontWeight: 'bold',
   },
   clockText: {
     fontSize: 60,
     textAlign: 'center',
     color: 'white',
   },
   ViewScroll: {
     flexDirection: 'row',
     width: 300,
   },
   ponto: {
     fontSize: 60,
     color: 'white',
     marginTop: 35,
   },
   tinyLogo: {
     height: 150,
     width: 150,
     marginLeft: 75,
     marginTop: 20,
     alignItems: 'center',

   },
 });

const Start = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
      <>
        <Container>
          <View>
            <Text style={styles.informe}>Que Horas você dorme?</Text>
         
            <View style={styles.ViewScroll}>
            <ScrollView style={styles.scrollView1}><Text style={styles.clockText}>00</Text><Text style={styles.clockText}>01</Text><Text style={styles.clockText}>02</Text></ScrollView>
           
            <Text style={styles.ponto}>:</Text>
            <ScrollView style={styles.scrollView1}><Text style={styles.clockText}>00</Text><Text style={styles.clockText}>2</Text><Text style={styles.clockText}>3</Text></ScrollView>
            </View>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images.vexels.com/media/users/3/153630/isolated/preview/f157393ba1bbd3471c532c9516b894f2-lua-crescente---cone-plana-by-vexels.png',
        }}
      />
            <Text style={styles.seuPeso}> Enquanto você estiver dormindo não enviaremos notificações.</Text>        
        <Button style={styles.botao}>
        <Link to="/Home">Próximo</Link>
        </Button>    
         </View>  
        </Container> 
      </>        
  );
}
export default Start; 

