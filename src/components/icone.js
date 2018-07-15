import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
const imgPedra = require('../../pedra.png');
const imgPapel = require('../../papel.png');
const imgTesoura = require('../../tesoura.png');

class Icone extends Component {
  render(){
    if (this.props.escolha=='pedra') {
      return(
        <View>
          <Text >{this.props.jogador}</Text>
          <Image source={imgPedra} style={{width:60, height: 60}} />
        </View>
      )
    } else if (this.props.escolha =='papel') {
      return (
        <View>
          <Text >{this.props.jogador}</Text>
          <Image source={imgPapel} style={{width:60, height: 60}} />
        </View>
      )
    } else if (this.props.escolha =='tesoura') {
      return (
        <View>
          <Text >{this.props.jogador}</Text>
          <Image source={imgTesoura} style={{width:60, height: 60}}/>
        </View>
      )
    }
      return false;
      //O RETURN FALSE FAZ COM QUE NO COMEÇO NADA APAREÇA NO PALCO
    
  }
}

export default Icone;
