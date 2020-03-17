function updateBus() {
    event.preventDefault();
   //step 1:Get form values
   var busId = $("#busId").val(); 
   var travelTime = $("#travellingTime").val();

   var url="https://apiebusin.cfapps.io/api/updateBusTimings?bus_id="+busId+"&travelling_time="+travelTime;
   $.post(url, function(data) {}
  
);

}