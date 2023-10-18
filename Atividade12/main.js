var aluno1 = new Object()
aluno1.ra = "1234"
aluno1.nome = "Breno"
alert("ra: " + aluno1.ra + "\n" + "nome: " + aluno1.nome)

var aluno2 = {}
aluno2.ra = "2345"
aluno2["nome"] = "GGA"
alert ("ra: " + aluno2.ra + "\n" + "nome: " + aluno2.nome)

var aluno3 = {
    ra: "3456",
    nome: "Lucas"
}
alert("ra: " + aluno3.ra + "\n" + "nome: " + aluno3.nome)

function Aluno(ra, nome){
    this.ra = ra
    this.nome = nome

    this.MostrarDados = function(){
        return "ra: " + this.ra + "\n" + "nome: " + this.nome
    }
}
var aluno4 = new Aluno("4567", "Japa")
alert(aluno4.MostrarDados())

function Aluno2(){
    var ra
    var nome
    this.setRa = function (value){
        this.ra = value
    }
    this.getRa = function(){
        return this.ra
    }
    this.setNome = function (value){
        this.nome = value
    }
    this.getNome = function(){
        return this.nome
    }
}
var aluno5 = new Aluno2()
aluno5.setRa("5678")
aluno5.setNome("Giovana")
alert("ra: " + aluno5.getRa() + "\n" + "nome: " + aluno5.getNome())


