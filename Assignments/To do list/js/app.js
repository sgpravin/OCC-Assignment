$("#btn1").click(function(){
    console.log("entered");
    var content = $("#value1").val();
    console.log(content);
   
    if(typeof(!localStorage==undefined)){
       localStorage.setItem(content,value1);
    };
  
 const ul = document.getElementById("list");
 const add =document.createElement('li');
 add.textContent = content;
 console.log(add);
  
 const sub = document.createElement('button');
  sub.innerHTML = "Remove";
  sub.className = "rem";
  add.append(sub);
  $(".list").append(add);
  
 });
 $(".list").on("click",".rem",function(){
    $(this).closest("li").remove();
 });