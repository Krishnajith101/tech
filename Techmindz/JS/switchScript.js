function displayweek(value)
{
switch (value) 
{
    case "1":
        document.getElementById("switchpara").innerHTML="Today is Monday";
        break;
    case "2":
        document.getElementById("switchpara").innerHTML="Today is Tuesday";
        break;
    case "3":
        document.getElementById("switchpara").innerHTML="Today is Wednesday";
        break;
    case "4":
        document.getElementById("switchpara").innerHTML="Today is Thursday";
        break;
    case "5":
        document.getElementById("switchpara").innerHTML="Today is Friday";
        break;
    case "6":
        document.getElementById("switchpara").innerHTML="Today is Saturday";
        break;
    case "7":
        document.getElementById("switchpara").innerHTML="Today is Sunday";
        break;

    default:
        document.getElementById("switchpara").innerHTML="Wrong entry";
        break;
}
}