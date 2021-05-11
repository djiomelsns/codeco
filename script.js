var selection = document.getElementById("selection"); //select
var inputt =document.getElementById("inputt"); // text area 1
var valuee =document.getElementById("valuee"); //text area 2
var text ;//=document.getElementById("text");
var result ;//=document.getElementById("result");


inputt.addEventListener("input",()=>{
    decoder();
    
})
selection.addEventListener("change",()=>{
    decoder();
   
    
})

function decoder(){
    if(selection.value=='encode'){
    valuee.value = btoa(inputt.value);
    
    

    }else {
    valuee.value = atob(inputt.value);
    
    

    }
}








