var errormessage="";
var missingfield="";
var success="";

   // if($.isNumeric($("#phoneNo").val()) == false){
        //     errormessage+="<p>Invalid phone number</p>";
        // }

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }


$("#submitbtn").click(function(){
    if($("#email").val() == ""){
        missingfield+="<p>Email is not filled </p>"
    }
    if($("#phoneNo").val() == ""){
        missingfield+="<p>Phone Number is not filled </p>"
    }
    if($("#password").val() == ""){
        missingfield+="<p>Password is not filled </p>"
    }
    if($("#confirmpassword").val() == ""){
        missingfield+="<p>Confirm Password is not filled </p>"
    }




    if(isEmail($("#email").val()) == false){
        errormessage+="<p>Invalid email id </p>";
    }

    var phoneNumber = $("#phoneNo").val();

    // Use a regular expression to check if the phone number consists of exactly 10 numeric characters
    var numericRegex = /^[1-9][0-9]{9}$/;

    if (!numericRegex.test(phoneNumber)) {
        errormessage += "<p>Invalid phone number</p>";
    }

    if($("#password").val() != $("#confirmpassword").val()){
        errormessage+="<p>Password does not match </p>";
    }


    if(errormessage ==""){
        $("#success").html("You have successfully registered!");
    }
    else{
        $("#errors").html( errormessage + missingfield);
    }

});





