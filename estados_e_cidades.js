/*****************************************************
 * Objetivo:Filtrar sobre estados e cidades
 * Data:18/10/2023
 * Autor:Gabriel
 * Versão:1.0
******************************************************/
var estados_e_cidades = require('./estados_cidades')


const getListaDeEstudos = function () {

const arrayDosEstados = [];

const jsonDosEstados = {}

estados_e_cidades.estadosCidades.estados.forEach(estado => {

   arrayDosEstados.push(estado.sigla)
    

});

jsonDosEstados.uf = arrayDosEstados
jsonDosEstados.quantidade = arrayDosEstados.length

return jsonDosEstados;


}

//console.log(getListaDeEstudos());

const getDadosEstado = function (siglaE) { 

const estado = siglaE;
jsonSiglas = {};

estados_e_cidades.estadosCidades.estados.forEach(gaEstado => {

if(estado == gaEstado.sigla){

   jsonSiglas.uf = gaEstado.sigla;
   jsonSiglas.descricao = gaEstado.nome
   jsonSiglas.capital = gaEstado.capital
   jsonSiglas.regiao = gaEstado.regiao
}


});

console.log(jsonSiglas);



}

//getDadosEstado('SP');

const getCapitalEstado = function (siglaEs) {

const capital = siglaEs;
jsonCapital = {};

estados_e_cidades.estadosCidades.estados.forEach(cEstado => {

if(capital == cEstado.sigla){
   jsonCapital.uf = cEstado.sigla
   jsonCapital.descricao = cEstado.nome
   jsonCapital.capital = cEstado.capital
}
   
});

console.log(jsonCapital)
}

//getCapitalEstado('AC');

const getEstadosRegiao = function () { //incompleto
   const arrayDosEstados = [];

   const jsonDosEstados = {}
   
   estados_e_cidades.estadosCidades.estados.forEach(gaRegiao => {
   
      arrayDosEstados.push(gaRegiao.sigla)
       
   
   });
   
   jsonDosEstados.uf = gaRegiao.sigla
   jsonDosEstados.descricao = gaRegiao.nome
   
   return jsonDosEstados;
   
   
   }
//console.log(getEstadosRegiao(''));


const getCapitalPais = function(){
   const capitais = []
  
   
   estados_e_cidades.estadosCidades.estados.forEach(estadosCap => {
      jsonEstadosCap = {}
   
       if(estadosCap.capital_pais?.capital != null){
        jsonEstadosCap.capital_atual = estadosCap.capital_pais?.capital
        jsonEstadosCap.uf = estadosCap.sigla
        jsonEstadosCap.descricao = estadosCap.nome
        jsonEstadosCap.capital = estadosCap.capital
        jsonEstadosCap.regiao = estadosCap.regiao
        jsonEstadosCap.capital_pais_ano_inicio = estadosCap.capital_pais?.ano_inicio
        jsonEstadosCap.capital_pais_ano_termino = estadosCap.capital_pais?.ano_fim
        
        capitais.push(jsonEstadosCap)
        }
        
   });
   const jsonCapital = {}

   jsonCapital.capitais = capitais

   return jsonCapital;
  

}
getCapitalPais();