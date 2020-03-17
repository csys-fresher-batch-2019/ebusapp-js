function deleteBus() {
    event.preventDefault();
   //step 1:Get form values
   var busId = $("#busId").val(); 
  

   var url="https://apiebusin.cfapps.io/api/removeBus?bus_id="+busId;

   $.post(url, function(data) {}
  
);

}