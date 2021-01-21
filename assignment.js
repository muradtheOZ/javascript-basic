/*kilometerToMeter
budgetCalculator ghori 50, phone 100, laptop 500;
hotelCost
megaFriend*/

// kilometerToMeter function start from here
function kilometerToMeter(kilometer) {

    
        //unreal number exeption handling 
    if (kilometer <=0 && typeof kilometer == 'number' ) {
        const wrongValue = "Please give a real distance! no cheating!!";
        return wrongValue;
    }
    //wrong data type expetion handling
    else if (typeof kilometer !== 'number' && typeof kilometer !== 'undefined') {
        const wrongType = "Mistakenly you enterd a value which is not number. Please  a give number in input";
        return wrongType;

    }
    //main calculation
    else if (kilometer > 0) {
        let meter = kilometer * 1000;
        return meter;
    }
    //empty call exeption handling
    else{
        var emptyValue = "You can not submit empty value! please eneter  distance in a number"
        return emptyValue;
    }
}

//budgetCalculator function start here

function budgetCalculator(watch, phone,laptop){
    // negative value exeception handling
    if (watch < 0 || phone < 0 || laptop < 0) {
        const wrongValue = "Please enetr a real value! you can't buy  minus number of product";
        return wrongValue;
    }
    //data type exception handling
    else if(typeof watch !== 'number' || typeof phone !== 'number' || typeof laptop !== 'number'){
        var notNumber = "Are you sure you entered a number? please enter your number correctly again"
        return notNumber;
    }
    //main calculation
    else {
        watch *= 50;
        phone *=  100;
        laptop *= 500;
        var total = watch + phone + laptop;
        return total;

    }
}



