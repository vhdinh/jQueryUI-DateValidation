$(function() {
    $( "#from" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
});

$(document).ready(function(){
    $("form").submit(function(){
        var from = $("#from").val();
        var to = $("#to").val();
        var name = $("#name").val();
        if($("#name").val() === ''){
            alert("hey, you need to fill out your name!!!");
            return false;
        }

    alert(name + ", your travel dates are:" + from + " to " + to)

    $(this).find("#from, #to, #name").val("");
    return false;
    })
})

