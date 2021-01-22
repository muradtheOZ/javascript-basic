/*kilometerToMeter
budgetCalculator ghori 50, phone 100, laptop 500;
hotelCost
megaFriend*/


function kilometerToMeter(kilometer) {

    //unreal number exeption handling 
    if (kilometer <= 0 && typeof kilometer == 'number') {
        var wrongValue = "Please give a real distance! no cheating!!";
        return wrongValue;
    }
    //wrong data type expetion handling
    else if (typeof kilometer !== 'number' && typeof kilometer !== 'undefined') {
        var wrongType = "Mistakenly you enterd a value which is not number. Please  a give number in input";
        return wrongType;

    }
    //main calculation
    else if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    //empty call exeption handling
    else {
        var emptyValue = "You can not submit empty value! please eneter  distance in a number"
        return emptyValue;
    }
}



function budgetCalculator(watch, phone, laptop) {
    // negative value exeception handling
    if (watch < 0 || phone < 0 || laptop < 0) {
        var wrongValue = "Please enetr a real value! you can't buy  minus number of product";
        return wrongValue;
    }
    //data type and empty call exception handling
    else if (typeof watch !== 'number' || typeof phone !== 'number' || typeof laptop !== 'number') {
        var notNumber = "Are you sure you entered a number? please enter your number correctly again"
        return notNumber;
    }
    //main calculation
    else if (watch % 1 == 0 && phone % 1 == 0 && laptop % 1 == 0) {
        watch *= 50;
        phone *= 100;
        laptop *= 500;
        var total = watch + phone + laptop;
        return total;

    }
    //float number exception handling
    else {
        var floatCatch = "product number can not be float! please enter a real number!"
        return floatCatch;
    }
}



function hotelCost(days) {

    //unreal number exeption handling
    if (days <= 0 && typeof days == 'number') {
        var wrongValue = "Days cant be 0 or less then 0!!";
        return wrongValue;
    }

    //wrong data type expetion handling
    else if (typeof days !== 'number' && typeof days !== 'undefined') {
        var wrongType = "Mistakenly you enterd a value which is not number. Please  a give number in input";
        return wrongType;

    }
    //float exception handling
    else if (days % 1 !== 0 && typeof days == 'number') {
        var floatCatch = "days can't be float! please enter a real number!"
        return floatCatch;
    }

    //main calculation
    else if (days > 0 && days <= 10) {
        var totalRent = days * 100;
        return totalRent;
    }
    else if (days > 10 && days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = (days - 10) * 80;
        var totalRent = firstTenDays + remaining;
        return totalRent;
    }

    else if (days > 20) {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = (days - 20) * 50;
        var totalRent = firstTenDays + secondTenDays + remaining;
        return totalRent;
    }


    //empty call exeption handling
    else {
        var emptyValue = "You can not submit empty value! please eneter a value"
        return emptyValue;
    }

}




