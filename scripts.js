const checkbox =
document.getElementById("editorCheck");


const dadosEditor =
document.getElementById("dadosEditor");



if(checkbox){


checkbox.addEventListener("change",()=>{


if(checkbox.checked){


dadosEditor.classList.remove("hidden");


}else{


dadosEditor.classList.add("hidden");


}


});


}




const form =
document.getElementById("formCadastro");



if(form){



form.addEventListener("submit",(e)=>{


e.preventDefault();



if(checkbox.checked){



let editores =
JSON.parse(localStorage.getItem("editores")) || [];



let novoEditor = {


nome:
document.getElementById("nome").value,


email:
document.getElementById("email").value,


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



alert("Editor cadastrado!");



}else{


alert("Cliente cadastrado!");


}



window.location="index.html";

const ADMIN_EMAIL = "matheus.alonso@email.com";
// troque pelo seu email real


let id = new URLSearchParams(
window.location.search
).get("id");



let editores =
JSON.parse(localStorage.getItem("editores")) || [];



let editor = editores[id];



const perfil =
document.getElementById("perfil");



if(editor){


perfil.innerHTML = `


<div class="editor">


<img class="avatar"
src="https://cdn-icons-png.flaticon.com/512/149/149071.png">


<h2>${editor.nome}</h2>


<p>✔ Verificado</p>


<p>⭐ ${editor.nivel}</p>


<p>💰 R$ ${editor.valor}</p>


<p>📄 ${editor.certificado}</p>



<button onclick="editarPreco(${id})">

Editar preço

</button>


</div>


`;


}




function editarPreco(id){


let novoValor =
prompt("Novo preço:");



if(novoValor){


editores[id].valor = novoValor;


localStorage.setItem(

"editores",

JSON.stringify(editores)

);


location.reload();


}


}




// sistema admin


let emailAtual =
localStorage.getItem("emailUsuario");



if(emailAtual === ADMIN_EMAIL){


document
.getElementById("adminPanel")
.classList.remove("hidden");



let lista =
document.getElementById("listaAdmin");



editores.forEach((e,index)=>{


lista.innerHTML += `


<div class="editor">


<p>${e.nome}</p>


<button onclick="excluirEditor(${index})">

Excluir

</button>


</div>


`;


});


}



function excluirEditor(id){


editores.splice(id,1);



localStorage.setItem(

"editores",

JSON.stringify(editores)

);



alert("Editor removido");


location.reload();


}



});

}
