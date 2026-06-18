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



});

}
