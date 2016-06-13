console.log('clientcalc.js is sourced');
var operation = "add";
$(document).ready(function(){
    console.log("jQuery is here!");
    $('#calcButton').on('click', function(){
        console.log("calculate button pressed");
        // get variable inputs
        var x = $('#input1').val();
        var y = $('#input2').val();
        console.log("x = " + x + " y = " + y);
        // assemble input into object
        var inputObject = {
          "x": x,
          "y": y,
          "operation": operation
        };

        //changing operation global variable based on which button was clicked
        $('#addButton').on('click', function(){
          operation = "add";
        });
        $('#subtractButton').on('click', function(){
          operation = "subtract";
        });
        $('#multiplyButton').on('click', function(){
          operation = "multiply";
        });
        $('#divideButton').on('click', function(){
          operation = "divide";
        });

        console.table("input object x " + inputObject.x + " input object y " + inputObject.y + " operation: " + operation);
  });

});
