function validate(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var emailId = document.getElementById("email").value;
    var applyPosition = document.getElementById("applyPos").value;
    var personGender = document.querySelector('input[name="Gender"]:checked').value;
    var city = document.getElementById("dropdown").value;
    var earlyDate = document.getElementById("earliestPossibleDate").value;
    var preferDate = document.getElementById("preferInterviewDate").value;

    console.log(firstName,lastName,phoneNumber,emailId,personGender,applyPosition,city,earlyDate,preferDate);    

    var regName  = /^[A-Za-z][A-Za-z_]{0,29}$/ 
    var regPhn =  /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
    var regEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    var regPos  = /^[A-Za-z][A-Za-z_ ]{0,29}$/

     if(regName.test(firstName) && regName.test(lastName) && regPhn.test(phoneNumber) && regEmail.test(emailId) && regPos.test(applyPosition)){
        localStorage.setItem("Firstname",firstName);
        localStorage.setItem("Lastname",lastName);
        localStorage.setItem("Email Id",emailId);
        localStorage.setItem("Phone Number",phoneNumber);
        localStorage.setItem("Applied Position", applyPosition);
        localStorage.setItem("City",city);
        localStorage.setItem("Gender",personGender);
        localStorage.setItem("Prefered Interview Date",preferDate);
        localStorage.setItem("Earliest Possible Start Date",earlyDate);
        alert("You have successfully applied for full stack developer...");
     }
     else{
        alert("Invalid Credentials");
     }
}

function reload(){
   document.getElementById("firstname").value = localStorage.getItem("Firstname");
   document.getElementById("lastname").value = localStorage.getItem("Lastname");
   document.getElementById("phonenumber").value = localStorage.getItem("Phone Number");
   document.getElementById("email").value = localStorage.getItem("Email Id");
   document.getElementById("dropdown").value = localStorage.getItem("City");
   document.getElementById("applyPos").value = localStorage.getItem("Applied Position");
   document.getElementById("preferInterviewDate").value = localStorage.getItem("Prefered Interview Date");
   document.getElementById("earliestPossibleDate").value = localStorage.getItem("Earliest Possible Start Date");

   var gender = localStorage.getItem("Gender");
   var radio = document.querySelector(`input[type="radio"][value="${gender}"]`);
   if(radio){
      radio.checked = true;
   }
   
   console.log(localStorage.getItem("Time"));

}
window.onload= reload;
