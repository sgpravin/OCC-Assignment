function function1(){
    
    if(document.getElementById('red').checked === true){
       document.getElementById('id1').classList.add("mystyle");
    }
    if(document.getElementById('green').checked === true){
        document.getElementById('id1').classList.add("mystyle1");
    }
    if(document.getElementById('blue').checked === true){
       document.getElementById('id1').classList.add("mystyle2");
   }

}
function function2(){
   if(document.getElementById('font1').checked === true){
       document.getElementById('id1').classList.add("mystyle3");
   }
       if(document.getElementById('font2').checked === true){
           document.getElementById('id1').classList.add("mystyle4");
       }
           if(document.getElementById('font3').checked === true){
               document.getElementById('id1').classList.add("mystyle5");
           }
   }