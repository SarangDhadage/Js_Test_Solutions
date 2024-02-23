//Write an Arrow function to print different menu for different day in a week.
const menu = day => {
    switch(day) {
        case 'monday':
            console.log("Monday : Dal rice");
            break;
        case 'tuesday':
            console.log("Tuesday: pizza ");
            break;
        case 'wednesday':
            console.log("Wednesday : Fish");
            break;
        case 'thursday':
            console.log("Thursday : Paneer");
            break;
        case 'friday':
            console.log("Friday : Eggs");
            break;
        case 'saturday':
            console.log("Saturday: Burger");
            break;
        case 'sunday':
            console.log("Sunday Menu: meat");
            break;
        default:
            console.log("Invalid day!");
    }
};


menu ('saturday'); 
menu ('friday'); 
menu ('thursday'); 
