var allMyEvents = {
  url: '/reservations.json',
  backgroundColor: 'black'
};
var r1Events = {
  url: '/reservations.json',
  data: {
    room_id: 2, //Mountain king hall
  },
  backgroundColor: 'yellow',
  error: function(){
    console.log("error fetching events");
  }
};
var r2Events = {
  url: '/reservations.json',
  data: {
    room_id: 3, //al pacino
  },
  backgroundColor: 'black',
  error: function(){
    console.log("error fetching events");
  }
};
var r3Events = {
  url: '/reservations.json',
  data: {
    room_id: 4, //clear heights
  },
  backgroundColor: 'green',
  error: function(){
    console.log("error fetching events");
  }
};
var r4Events = {
  url: '/reservations.json',
  data: {
    room_id: 5, //hall of destiny
  },
  backgroundColor: 'tomato'  ,
  error: function(){
    console.log("error fetching events");
  }
};


$(function(){
  $('#button-1').on('change', function() {
    console.log("clicked first one");
    $("#calendar").fullCalendar('removeEventSource', r1Events);
    $("#calendar").fullCalendar('removeEventSource', r2Events);
    $("#calendar").fullCalendar('removeEventSource', r3Events);
    $("#calendar").fullCalendar('removeEventSource', r4Events);
    $("#calendar").fullCalendar('addEventSource', allMyEvents);
  });
  $('#button-2').on('change', function(){
    console.log('clicked number 2');
    $("#calendar").fullCalendar('removeEventSource', allMyEvents);
    $("#calendar").fullCalendar('addEventSource', r1Events);
  });
});


$(document).on('ready page:load', function() {
  console.log('dup')

  $('#calendar').fullCalendar({
    header: { left: 'today prev,next', center: 'title', right: 'month, agendaWeek, agendaDay' }, // buttons for switching between views
    buttonIcons: { prev: 'left-single-arrow', next: 'right-single-arrow' },
    businessHours: {
      start: '00:00',
      end: '23:00',
      dow: [0, 1, 2, 3, 4, 5, 6]
      // days of week. an array of zero-based day of week integers (0=Sunday)
    },

    height: 'auto',
    contentHeight: 'auto',
    defaultView: 'agendaWeek',
    eventLimit: true,
    // editable: true,
    eventLimit: true,
    allDayDefault: false,

    eventSources: allMyEvents,

    views: {
      agenda: {
        minTime: "7:00:00",
        maxTime: "23:00:00"
        // timeFormat: 'h:mm'. options apply to agendaWeek and agendaDay views
      },
    },

    dayClick: function(date, jsEvent, view) {
      if (view.name === "month" || "week") {
          $('#calendar').fullCalendar('gotoDate', date);
          $('#calendar').fullCalendar('changeView', 'agendaDay');
      } else {
        
      };
      console.log('Clicked on: ' + date.format());
      console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
      console.log('Current view: ' + view.name);
    },

    eventClick: function( event, jsEvent, view ) {
      // window.open(event.url);
      console.log('Event: ' + event.title);
      console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
      console.log('View: ' + view.name); 
      $(this).css('border-color', 'red');
      $(this).fullCalendar('updateEvent', event);
    }
  });
});



// modal button

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});