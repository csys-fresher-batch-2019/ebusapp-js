function findBus() {
     event.preventDefault();
    //step 1:Get form values
    var src = $("#fromLocation").val();
    var des = $("#toLocation").val();
    var date = $("#date").val();

    console.log(src, des, date);

    // STEP 2:get data from SQL

    var url = "https://apiebusin.cfapps.io/api/searchbuses?from_location="+src+"&journey_date="+date+"&to_location="+des;
   // var url = "https://apiebusin.cfapps.io/api/searchbuses?from_location=theni&journey_date=coimbatore&to_location=23-02-2020";
    console.log(url);
    $.getJSON(url, function (data) {
        console.log(data);
        displayInTable(data);
    });


    // step 3:display Data in Table

    function displayInTable(busList) {
        $("#busTbl").empty();
        var row = "";
        var j = 1;
        for (var i = 0; i < busList.length; i++) {
            var busObj = busList[i];
            console.table(busObj);
            row += "<tr><td>" + (j++) + "</td><td>" + busObj.busName + "</td><td>" + busObj.busId + "</td><td>" + busObj.ticketPrice + "</td><td>" + busObj.travellingTime + "</td></tr>";
        }
       // alert("success");
        $("#busTbl").append(row);
    }


}
