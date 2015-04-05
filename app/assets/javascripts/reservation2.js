// this is trial code to make clicking date to render modal with timeClicked  as well as date be the automatically selected

dayClick: function(date, jsEvent, view) {
  if (view.name == "agendaWeek") {
    // debugger;
    $('#calendar').fullCalendar('gotoDate', date);
    $('#calendar').fullCalendar('changeView', 'agendaDay');
  } else {
    if (!$("#modal-1").attr("checked")){
      $("#modal-1").attr("checked", true);
      var selectedTime = date.format("hh:mm");
    }
  };

  console.log('Clicked on: ' + date.format("hh:mm"));
  console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
  console.log('Current view: ' + view.name);
}
