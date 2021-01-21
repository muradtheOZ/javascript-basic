/*kilometerToMeter
budgetCalculator ghori 50, phone 100, laptop 500;
hotelCost
megaFriend*/

// kilometerToMeter function start from here
function kilometerToMeter(kilometer) {

    /*checking the number is equal or less then 0 and a number(empty string value is zero)
     so we will also check the type of input here! 
    if it's not number and value is 0, we will show the error messege more precisely in different error message)*/

    if (kilometer <=0 && typeof kilometer == 'number' ) {
        const wrongValue = "Please give a real distance! no cheating!!";
        return wrongValue;
    }
    //checking the type of input is number or not
    else if (typeof kilometer !== 'number') {
        const wrongType = "Mistakenly you enterd a value which is not number. Please  a give number in input";
        return wrongType;

    }
    else {
        let meter = kilometer * 1000;
        return meter;
    }
}

//budgetCalculator function start here
budgetCalculator{

}

