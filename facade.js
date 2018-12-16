var Donation = function (name) {
    this.name = name;
}

Donation.prototype.verifyCredit = function() {
    var result;
    var accountAmount = 150;
    var donatedAmounts = document.getElementsByName("amount$")
    var specifiedAmount;
    for (i = 0; i < donatedAmounts.length; i++) {
        if (donatedAmounts[i].checked && donatedAmounts[i].value < accountAmount) {
            specifiedAmount = donatedAmounts[i].value;
            result = "approved";
            return " has been " + result + " for a " + specifiedAmount + " Donation";
        }

        else if (donatedAmounts[i].checked && donatedAmounts[i].value > accountAmount) {
            return "Sorry you don't have enough money";

        }

        else if (donatedAmounts[i].checked && donatedAmounts[i].value == accountAmount) {
            return "You spent all of your money";

        }
    }
}


function donationRun() {
    var donation1 = new Donation();
    var result = donation1.verifyCredit();

    alert(result);
}