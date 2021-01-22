//  https://github.com/muradtheOZ/javascript-basic

function kilometerToMeter(kilometer) {

    //unreal number exeption handling 
    if (kilometer <= 0 && typeof kilometer == 'number') {
        var wrongValue = "Please give a real distance! no cheating!!";
        return wrongValue;
    }
    //wrong data type expetion handling
    else if (typeof kilometer !== 'number' && typeof kilometer !== 'undefined') {
        var wrongType = "Mistakenly you enterd a value which is not number. Please  give number in input";
        return wrongType;

    }
    //main calculation
    else if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    //empty call exeption handling
    else {
        var emptyValue = "Please eneter a value. Input can't be empty"
        return emptyValue;
    }
}



function budgetCalculator(watch, phone, laptop) {
    // negative value exeception handling
    if (watch < 0 || phone < 0 || laptop < 0) {
        var wrongValue = "Please enetr a real value! you can't buy  minus number of product";
        return wrongValue;
    }
    //empty call exception handling
    else if (typeof watch == 'undefined' || typeof phone == 'undefined' || typeof laptop == 'undefined') {
        emptyValue = "Please fill all the value. Input can't be empty"
        return emptyValue;
    }
    //data type exception handling
    else if (typeof watch !== 'number' || typeof phone !== 'number' || typeof laptop !== 'number') {
        var notNumber = "Mistakenly you enterd a value which is not number. Please  give number in input"
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
        var wrongType = "Mistakenly you enterd a value which is not number. Please  give number in input";
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
        var emptyValue = "Please eneter a value. Input can't be empty"
        return emptyValue;
    }

}


function megaFriend(nameArray) {
    var temp = "";
    var longNmae = "";

    //without value fucntion call handling
    if (typeof nameArray == [] || typeof nameArray == 'undefined') {
        var emptyvalue = "Please eneter a value. Input can't be empty";
        return emptyvalue;
    }
    else if (nameArray.length == 0) {
        var emptyObject = "please add some value in your object";
        return emptyObject;
    }
    // wrong data type handling
    else if (typeof nameArray !== 'object') {
        var wrongType = "Mistakenly you enterd a value which is not name list(object). Please  giva a name list(object) in input"
        return wrongType;

    }
    //main calculation with wrong object type handling and wrong value also;
    else if (nameArray.length > 1) {
        for (var i = 0; i < nameArray.length; i++) {
            if (typeof nameArray[i] == 'string') {
                temp = nameArray[i];
                temp = temp.replace(/\s+/g, ' ');

                if (temp.length > longNmae.length) {
                    longNmae = temp;
                }
            }
            else {
                var stringCheck = "all of the value is not name, please give name in full list"
                return stringCheck;
            }
        }
        return longNmae;
    }
    else {
        if (typeof nameArray[0] !== 'string') {
            var stringCheck = "This is not a name! please enter name.\n Also rember to enter two or more name!"
            return stringCheck;
        }
        else {
            var oneNameparadox = "You can not compare biggest name from one name!\n please give two or more name in input "
            return oneNameparadox;
        }
    }

}



