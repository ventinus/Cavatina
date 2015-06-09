var allMyEvents = {
  url: '/reservations.json',
  backgroundColor: 'black'
};
var r1Events = {
  url: '/reservations.json',
  data: {
    room_id: 1, //Mountain king hall
  },
  backgroundColor: 'yellow',
  textColor: 'black',
  error: function(){
    console.log("error fetching events");
  }
};
var r2Events = {
  url: '/reservations.json',
  data: {
    room_id: 2, //al pacino
  },
  backgroundColor: 'blue',
  error: function(){
    console.log("error fetching events");
  }
};
var r3Events = {
  url: '/reservations.json',
  data: {
    room_id: 3, //clear heights
  },
  backgroundColor: 'green',
  error: function(){
    console.log("error fetching events");
  }
};
var r4Events = {
  url: '/reservations.json',
  data: {
    room_id: 4, //hall of destiny
  },
  backgroundColor: 'tomato'  ,
  error: function(){
    console.log("error fetching events");
  }
};

var removeAllEventSources = function(){
  $('#calendar').fullCalendar('removeEventSource', allMyEvents);
  $('#calendar').fullCalendar('removeEventSource', r1Events);
  $('#calendar').fullCalendar('removeEventSource', r2Events);
  $('#calendar').fullCalendar('removeEventSource', r3Events);
  $('#calendar').fullCalendar('removeEventSource', r4Events);  
};

$(document).on('ready page:load', function(){
  $('.button-1').on('change', function() {
    if($(this).is(":checked")){
      removeAllEventSources();
      $("#calendar").fullCalendar('addEventSource', allMyEvents);
    }
  });
  $('.button-2').on('change', function(){
    if($(this).is(":checked")){
      removeAllEventSources();
      $("#calendar").fullCalendar('addEventSource', r1Events);
    }
  });
  $('.button-3').on('change', function(){
    if($(this).is(":checked")){
      removeAllEventSources();
      $("#calendar").fullCalendar('addEventSource', r2Events);
    }
  });
  $('.button-4').on('change', function(){
    if($(this).is(":checked")){
      removeAllEventSources();
      $("#calendar").fullCalendar('addEventSource', r3Events);
    }
  });
  $('.button-5').on('change', function(){
    if($(this).is(":checked")){
      removeAllEventSources();
      $("#calendar").fullCalendar('addEventSource', r4Events);
    }
  });
});


$(document).on('ready page:load', function() {
  console.log('dup')
  $('#calendar').html('');
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
    eventTextColor: 'white',

    eventSources: allMyEvents,

    views: {
      agenda: {
        minTime: "7:00:00",
        maxTime: "23:00:00"
        // timeFormat: 'h:mm'. options apply to agendaWeek and agendaDay views
      }
    },

    dayClick: function(date, jsEvent, view) {
      if (view.name == "month" || view.name == "agendaWeek") {
        $('#calendar').fullCalendar('gotoDate', date);
        $('#calendar').fullCalendar('changeView', 'agendaDay');
      }
      

      console.log('Clicked on: ' + date.format("hh:mm"));
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
    },

    eventRender: function(event, element) {
      // console.log(element);
      console.log(event);
      // element.qtip({
      //   content: event.description + '<br />' + event.room_id,
      //   style: {
      //     background: 'black',
      //     color: '#FFFFFF'
      //   },
      //   position: {
      //     corner: {
      //       target: 'center',
      //       tooltip: 'bottomMiddle'
      //     }
      //   }
      // });
    }
  });
});



// modal button

$(document).on('ready page:load', function(){
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(document).on("keydown", function(e){
    if (e.keyCode == 27) {
      $(".modal-state:checked").prop("checked", false).change();
    }
  })

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
