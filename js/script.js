$(document).ready(function(){

	// dragabble
	$( "#draggable" ).draggable();

	// dropabble
	$( "#draggable1" ).draggable();
    	$( "#droppable" ).droppable({
      	drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // shortable
    	$( "#sortable" ).sortable();

    // accordion
    $( "#accordion" ).accordion();

    // Autocomplete
    var availableTags = [
      "Black",
      "Green",
      "Yellow",
      "Blue",
      "Skyblue",
      "White"
    ];
    $( "#c_name" ).autocomplete({
      source: availableTags
    });

    // datepicker
    $( "#datepicker" ).datepicker();

    // dialog
    $( "#dialog" ).dialog();

    // tabs
    $( "#tabs" ).tabs();

    // tooltip
    $( document ).tooltip();

    
})