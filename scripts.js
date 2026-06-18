const editorCheck = document.getElementById("editorCheck");

const areaEditor = document.getElementById("areaEditor");


if(editorCheck){

editorCheck.addEventListener("change",()=>{


if(editorCheck.checked){

areaEditor.classList.remove("hidden");


}else{


areaEditor.classList.add("hidden");


}


});


}




function salvarEditor(){


let editores = JSON.parse(

localStorage.getItem("editores")

) || [];



let editor = {


nome:
document.getElementById("nome").value,


nivel:
document.getElementById("nivel").value,


valor:
document.getElementById("valor").value,


certificado:
document.getElementById("certificado").value


};



editores.push(editor);



localStorage.setItem(

"editores",

JSON.stringify(editores)

);



alert("Editor cadastrado!");



window.location="index.html";


}
