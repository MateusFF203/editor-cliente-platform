const checkbox =
document.getElementById("editorCheck");


const dados =
document.getElementById("dadosEditor");



if(checkbox){

checkbox.addEventListener("change",()=>{


if(checkbox.checked){

dados.classList.remove("hidden");


}else{

dados.classList.add("hidden");

}


});

}



function criarConta(){


if(checkbox.checked){


let editores =
JSON.parse(localStorage.getItem("editores")) || [];



let novoEditor = {


nome:
document.getElementById("nome").value,


certificado:
document.getElementById("certificado").value,


nivel:
document.getElementById("nivel").value,


valor:
document.getElementById("valor").value,


verificado:true


};



editores.push(novoEditor);



localStorage.setItem(

"editores",

JSON.stringify(editores)

);



alert("Editor criado com sucesso!");



}else{


alert("Conta de cliente criada!");

}


window.location="index.html";


}
