import React from 'react';



function Second(props) {  
    var reste = 76400;  
    if (reste <= 86400 )  
    {
        var result = '';

         

        var nbHours = Math.floor(reste / 3600);
        reste -= nbHours * 3600;

        var nbMinutes = Math.floor(reste / 60);
        reste -= nbMinutes * 60;

        var nbSeconds = reste;

         

        if (nbHours > 0)
            result = result + nbHours + 'h ';

        if (nbMinutes > 0)
            result = result + nbMinutes + 'min ';

        if (nbSeconds > 0)
            result = result + nbSeconds + 's ';
        }
    else 
        result ="reset <= 86400 "
    return(
        <div>
            {result}
        </div>
    )
}
 

function Time() {

    return (
        <div>
            
            <Second  />
             
             
        </div>
    );
}

export default Time;