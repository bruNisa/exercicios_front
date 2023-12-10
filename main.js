function Transportadora(transp, cidade, estado){
    this.transp = transp;
    this.cidade = cidade;
    this.estado = estado;
}

function Proprietario (nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.dizOi = function(){
        console.log(this.nome + " diz OI!");
    }
}

function Veiculo (tipo, marca, modelo, anoModelo, anoFab, cor, nome, idade, transp, cidade, estado){
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    this.anoFab = anoFab;
    this.cor = cor;

    this.acelera = function(){
        console.log(this.modelo +  " vrruuummmm");
    }

    Proprietario.call(this, nome, idade);
    Transportadora.call(this, transp, cidade, estado);
}

const carro = new Veiculo("carro", "Ford", "Ka", 2015, 2015, "Branco", "Calebe", 39, "ProLog", "Betim", "MG");
const moto = new Veiculo("moto", "Honda", "Bros", 2010, 2010, "Laranja", "Bruna", 34, "ProLog", "Betim", "MG");
const utilitario = new Veiculo("utilitario", "Fiat", "Fiorino", 2012, 2012, "Branco", "Josué", 30, "ProLog", "Betim", "MG");

console.log(carro);
console.log(moto);
console.log(utilitario);

carro.acelera();
moto.acelera();
utilitario.acelera();

carro.dizOi();
moto.dizOi();
utilitario.dizOi();
