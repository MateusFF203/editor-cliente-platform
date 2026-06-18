const editorCheck =
document.getElementById("editorCheck");

const dadosEditor =
document.getElementById("dadosEditor");

editorCheck.addEventListener("change", () => {

    if(editorCheck.checked){

        dadosEditor.classList.remove("esconder");

    }else{

        dadosEditor.classList.add("esconder");

    }

});
