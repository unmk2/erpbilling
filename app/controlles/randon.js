const _ = require('randomstring');

module.exports.ExeRandon = (app,tamanho = 4,numerico=0,letras=0,especial=0)=>{
    var tamanho     = tamanho;
    var numeric     = numerico == 1 ? '0123456789' : ''
    var especial    = especial == 1 ? '!@#$%^&*' : '';
    var minusculas  = letras == 1 ? 'abcdefghijlmnopkrstuvxzywk' : '';
    var chaset      =  minusculas +  numeric  + especial ;
    var numero = _.generate({
        length: tamanho,
        charset: chaset
    });
    console.log(numero);
    return numero;
}