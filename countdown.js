// StartTheCountdown() function for Blastoff! assignment, CSC 102. By Isiah Torres.

function StartTheCountdown()
{
    // Purpose of the function is to start and control the countdown.
    // Declare variables
    // used to display to user on screen. 
        var countdown = 10;
    // used to keep track of actual time
    // 1000 millisecond = 1 second, because we are using milliseconds.
        var timeout = 10000;
        // we need to use the setTimeout function for countdown
        // we need to do this 12 times. (counting 0 and output "Blastoff!" after 10 seconds.)
        // "innerHTML" changes the content inside of tags. 
        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = "Blastoff!";
            countdown--;
           
        }, timeout)
        timeout = timeout - 1000;    

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
timeout = timeout - 1000;

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
timeout = timeout - 1000;

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
timeout = timeout - 1000;

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
timeout = timeout - 1000;

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
timeout = timeout - 1000;

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
timeout = timeout - 1000;

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
timeout = timeout - 1000;

        //********************************************************
        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
        timeout = timeout - 1000;

        //********************************************************
        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
        timeout = timeout - 1000;

        //********************************************************

        setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
        timeout = timeout - 1000;

       //********************************************************

       setTimeout(() => {
            document.getElementById("CountdownDisplay").innerHTML = countdown;
            countdown--;
           
        }, timeout)
        timeout = timeout - 1000;
        
}
