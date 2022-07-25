

const textIn = document.getElementById('textIn');
const buttonAdd= document.getElementById('buttonAdd');
const listTask=document.getElementById('list-task');
const buttonDelete=document.getElementById('buttonTwo');
const formOne=document.querySelector("#formOne");
const localButton=document.querySelectorAll('#localButton');

formOne.addEventListener("submit",handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    

    const task=textIn.value;

    if(!task){
        alert("Lütfen Boş Alanı Doldurduruz !");
    }
    else{
        var list=document.createElement("li")
        document.getElementById("list-task").appendChild(list);
        list.setAttribute("id","addtion");
        list.innerHTML=task;
        textIn.value="";
        console.log(textIn);
        
        document.getElementById("addtion").appendChild(localButton);

        
    }
}



buttonDelete.addEventListener("click",function(e){
e.preventDefault(); // butonun varsayılanını sıfırlar
// e.stopPropagation

    if(confirm("Emin misiniz ?")){
        document.getElementById("list-task").innerHTML="";

    }
    
    
})


