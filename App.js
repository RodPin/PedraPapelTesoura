import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

export default class App extends React.Component {
  // PARA BOTAR O VALOR COMO ZERADO ANTES DE DAR O ONPRESS-----------------
  constructor(props) {
    super(props);
    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: '' } 
  }

  //PARA ACONTECER QUANDO CLICA NO BOTAO------------------------

  jokenpo(variavel) {
    //Para gerar a escolha do computador----------------------------
    let aleatorio=Math.floor(Math.random()*3);
    let ppt = ['pedra' , 'papel' , 'tesoura']
    let escolhido=ppt[aleatorio];

    //Para comparar resultados------------------------------------
    let result = '';
    let escolhaComputador = escolhido;
    let escolhaUsuario = variavel;
    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        result = 'Empate'
      }
      if (escolhaUsuario =='papel') {
        result = 'Vitoria'
      }
      if (escolhaUsuario == 'tesoura') {
        result = 'Derrota'
      }
    }
    if (escolhaComputador =='papel') {
      if (escolhaUsuario =='papel') {
        result ='Empate'
      }
      if (escolhaUsuario =='tesoura') {
        result = 'Vitoria'
      }
      if (escolhaUsuario =='pedra') {
        result='Derrota'
      }
    }
    if(escolhaComputador=='tesoura'){
      if(escolhaUsuario=='tesoura'){
        result='Empate'
      }
      if (escolhaUsuario=='pedra'){
        result='Vitoria'
      }
      if(escolhaUsuario=='papel'){
        result='Derrota'
      }
    }
    //PARA REESCREVER ---------------------------------------------
    this.setState(
      {escolhaUsuario: variavel,
      escolhaComputador: escolhido,
      resultado: result
      } 
    );
  }

  //devemos divir o app em 4 view: principal,topo,operaçoes, palco
  render(){
    return(
      <View style={style.tudo}>
        <Topo />
        <Text style={style.jogada}>Escolha sua jogada:</Text>
        <View style={style.painel}>          
           <View style={style.btnEscolha}>
              <Button title="pedra" style={style.botoes} onPress = { () => { this.jokenpo('pedra')}}/>
           </View>

           <View style={style.btnEscolha}>
              <Button title="papel" style={style.botoes}  onPress = { () => { this.jokenpo('papel')}}/>
            </View>

           <View style={style.btnEscolha}>
             <Button title="tesoura" style={style.botoes} onPress= { () => { this.jokenpo('tesoura')}}/>
           </View>
        </View>
        <View style={style.palco}>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuario:'></Icone>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador:'></Icone>
          <Text style={style.txtResultado}>{this.state.resultado}</Text>
        </View>
        
      </View>
    )
  }
}

const style=StyleSheet.create({
  btnEscolha:{
    width:90,
    
  },
  botoes:{
    backgroundColor:'yellow',
    borderColor:'black',
    borderWidth:10,
    borderRadius:90
  },
  painel:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },
  tudo:{
    marginTop:20,
    backgroundColor:'#FFD700',
    flex:1
  },
  palco:{
    alignItems:'center', 
    marginTop:10
  },
  txtResultado:{
    fontSize:25,
    fontWeight:'bold',
    color:'blue'  
  },txt:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    alignItems:'center'
  },
  jogada:{
    fontSize:16,
    color:'black',
    fontWeight:'bold',
    marginHorizontal:100,
    marginTop:20
  }
})

