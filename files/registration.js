function addUser() {
    event.preventDefault();
   //step 1:Get form values
   var userName = $("#userName").val();
   var password = $("#password").val();
   var gender = $("gender").val();
   var dob = $("#dob").val();
   var contactNumber = $("#contactNumber").val();
   var mailId = $("#mailId").val();
   

  
      var url="https://apiebusin.cfapps.io/api/addbuses?available_seats="+availableSeats+"&bus_id="+busId+"&bus_name="+busName+"&from_location="+fromLocation+"&journey_date="+journeyDate+"&maximun_seats="+maxSeats+"&ticket_price="+ticketPrice+"&to_location="+toLocation+"&travelling_time="+travelTime;

      $.post(url, function(data) {
         console.log(data);
    
    });

}