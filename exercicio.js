
class Aluno{
    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const aluno1 = new Aluno('Bruna', 8);
const aluno2 = new Aluno('Calebe', 10);
const aluno3 = new Aluno('Alícia', 5);
const aluno4 = new Aluno('Manuella', 4);

const alunos = [aluno1, aluno2, aluno3, aluno4];

console.log(alunos);

const notaMaiorSeis = alunos.filter(function(item){
    return item.nota >= 6;
})

console.log(notaMaiorSeis);
