function validateLogin() {
    event.preventDefault();
   //step 1:Get form values
   var userId = $("#userId").val();
   var password = $("#password").val();
   
   
   var url="https://apiebusin.cfapps.io/api/login?password="+password+"&userId="+userId;

   
   $.getJSON(url, function (data) {
       if(data==true)
       {
        window.location.href="findBus.html";
       }
       else{ window.location.href="login.html";
       alert("invalid userId or password");

       }
    
   });




}
