import React, { useState } from 'react';
import { View, Text , StyleSheet , Picker , Image, Linking } from 'react-native';
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
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
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
     marginTop: 180,
     backgroundColor: 'white',
     borderRadius: 30,
   },
   textButton: {
     color: '#2968A1',
     fontWeight: 'bold',
   },
 });

const Start = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
      <>
        <Container>
          <View>
            <Text style={styles.informe}>Informe Seu Peso</Text>
            <Text style={styles.seuPeso}>Seu peso</Text>
          <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
           
        <Picker.Item label="70 Kilos" value="70" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <View style={styles.linha}/>      
<Text style={styles.seuPeso}>Consumo de Água adequado em ml para seu peso</Text>
          <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>    
        <Picker.Item label="2100" value="70" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>  
      <View style={styles.linha}/>     
        <Button style={styles.botao} textStyle={{fontSize: 18}} onPress={() => Linking.openURL('SecondStep')}>
        <Link to="/SecondStep">Próximo</Link>
        </Button>    
         </View>  
        </Container> 
      </>        
  );
}


export default Start;

