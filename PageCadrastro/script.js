const formulario = document.querySelector("form")

const Inome =  document.querySelector(".nome")
const Iemail =  document.querySelector(".email")
const Isenha =  document.querySelector(".senha")
const Itel =  document.querySelector(".tel")
const Ipeso =  document.querySelector(".peso")
const Ialtura =  document.querySelector(".altura")
const Iidade =  document.querySelector(".idade")
const Iobjetivo =  document.querySelector(".objetivo")
const Ialergia =  document.querySelector(".alergia")
const Irefeicoes =  document.querySelector(".refeicoes")
const IhorasAtividades =  document.querySelector(".horas-atividade") 
const Iintolerancia =  document.querySelector(".intolerancia")
const Idiabetes =  document.querySelector(".diabetes")
const Icolesterol=  document.querySelector(".colesterol")
const Idoencas =  document.querySelector(".doencas") 

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dados = {
        nome: Inome.value,
        email: Iemail.value,
        senha: Isenha.value,
        tel: Itel.value,
        peso: Ipeso.value,
        altura: Ialtura.value,
        idade: Iidade.value,
        objetivo: Iobjetivo.value,
        alergia: Ialergia.value,
        refeicoes: Irefeicoes.value,
        horasAtividades: IhorasAtividades.value,
        diabetes: Idiabetes.value,
        colesterol: Icolesterol.value,
        doencas: Idoencas.value 
    };
    console.log(dados)
});