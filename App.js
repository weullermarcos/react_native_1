import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default () =>{

  return(

      //O SafeAreaView usa somente a área segura da tela, recomendado para o caso do iphone
      <SafeAreaView style = {styles.page}>
        <Text style = {styles.texto}>Texto 1</Text>
        <Text style = {styles.texto}>Texto 2</Text>
        <Text style = {[styles.texto, {fontSize: 17}]}>Texto 3</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  page:{
    width: 300,
    height: 300,
    backgroundColor: '#CC1111',
  },

  texto:{

    color: '#FFFFFF',
    fontSize: 25,

  },

});

