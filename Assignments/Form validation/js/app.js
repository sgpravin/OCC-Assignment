let fName;
let lName;
let gender;
let email;
let course;
let c;
let d;
$(document).ready(function(){
    $("#btn").click(function(){
    fName=$("#first").val();
    if(fName.length===0 || fName.length<3){
    $(".first").show();
    }
    else{
        $(".first").hide();
    }
    
    lName=$("#last").val();
    if(lName.length===0 || lName.length<3){
    $(".last").show();
    }
    else{
        $(".last").hide();
    }

    gender=$("#gender").val();
    if(gender==="select"){
    $(".gender").show();
    }
    else{
        $(".gender").hide();
    }

    email=$("#email").val();
    if(email.length===0 || email.length<3){
    $(".email").show();
    }
    else{
        $(".email").hide();
    }

    var course1=$("#check1").val();
    var course2=$("#check2").val();
   
        if($("#check1").prop("checked") == true||$("#check2").prop("checked") == true){
        if($("#check1").prop("checked") == true&&$("#check2").prop("checked") == true){
            $(".course").hide();
            c=[course1,course2];
            
        }
        else if($("#check1").prop("checked") == true){
            $(".course").hide();
            c=course1
        }
        else if($("#check2").prop("checked") == true){
            $(".course").hide();
            c=course2
        }
    }
    else
    {
        $(".course").show();
    }
    // });
    let obj={
        firstname: fName,
        lastname: lName,
        gender: gender,
        email: email,
        course: c
    }
    console.log(obj);
});
});


// $(document).ready(function(){

//     $('.needs-validation').validate({
//                    rules: {
//                        'checkbox': {
//                            required: true
//                        }
//                    },
//                    highlight: function (input) {
//                        $(input).addClass('is-invalid');
//                    },
//                    unhighlight: function (input) {
//                       $(input).removeClass('is-invalid');
//                    },
//                    errorPlacement: function (error, element) {
//                        $(element).next().append(error);
//                    }
//                });
    
//    });