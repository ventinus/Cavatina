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

    events: '/reservations.json',

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

    
    // dayClick: function(date) {

    //   var myCalendar = $('#calendar'); 
    //   myCalendar.fullCalendar();
    //   var myEvent = {
    //     title:"my new event",
    //     allDay: false,
    //     start: new Date(),
    //     end: new Date()
    //   };
    //   myCalendar.fullCalendar( 'renderEvent', 'addEvent' );


    //   function refreshCalendar(){
    //     $("#calendar").fullCalendar( 'refetchEvents' );
    //   };

    //   function errorHandler(error){
    //     console.log("error: ", error);
    //   };

    //   function addEvent(event, refreshCalendar, errorHandler) {
    //     $.ajax({
    //       type: "POST",
    //       data: myEvent,
    //       dataType: "JSON",
    //       success: refreshCalendar,
    //       error: errorHandler,
    //     });
    //   };
    // },


    // eventMouseover: function( event, jsEvent, view ) {},

  });
});