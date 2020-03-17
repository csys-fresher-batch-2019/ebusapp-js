function addBus() {
    event.preventDefault();
   //step 1:Get form values
   var busId = $("#busId").val();
   var busName = $("#busName").val();
   var fromLocation = $("#fromLocation").val();
   var toLocation = $("#toLocation").val();
   var journeyDate = $("#journeyDate").val();
   var travelTime = $("#travellingTime").val();
   var ticketPrice = $("#ticketPrice").val();
   var maxSeats = $("#maxSeats").val();  
    var availableSeats = $("#availableSeats").val();

   // var formData = {busId:busId,busName:busName,fromLocation:fromLocation
       // ,toLocation:thttps://apiebusin.cfapps.io/api/addbuses?available_seats=40&bus_id=115&bus_name=ABC&from_location=salem&journey_date=2020-03-03&maximun_seats=40&ticket_price=600&to_location=trichy&travelling_time=20%3A00%20to%2004%3A00oLocation,ticketPrice:ticketPrice,journeyDate:journeyDate
        //,travellingTime:travelTime,maximumSeats:maxSeats,availableSeats:availableSeats};
//console.log(formData);https://apiebusin.cfapps.io/api/addbuses?available_seats=40&bus_id=116&bus_name=YBM&from_location=chennai&journey_date=2020-03-09&maximun_seats=40&ticket_price=800&to_location=tirupur&travelling_time=20%3A00%20to%2006%3A00


      var url="https://apiebusin.cfapps.io/api/addbuses?available_seats="+availableSeats+"&bus_id="+busId+"&bus_name="+busName+"&from_location="+fromLocation+"&journey_date="+journeyDate+"&maximun_seats="+maxSeats+"&ticket_price="+ticketPrice+"&to_location="+toLocation+"&travelling_time="+travelTime;

      $.post(url, function(data) {
         console.log(data);
        // add(data);
    });

}