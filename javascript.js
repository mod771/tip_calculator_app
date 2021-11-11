const tip1 = document.getElementById("tip5");
const tip2 = document.getElementById("tip10");
const tip3 = document.getElementById("tip15");
const tip4 = document.getElementById("tip25");
const tip5 = document.getElementById("tip50");
var bill;
var numOfPeople;
var tipTotal;
var total;
var tip;

/*if (tip1.clicked == true) {
    tip = 0.05;

} else if (tip2.clicked == true) {
    tip = 0.10;

} else if (tip3.clicked == true) {
    tip = 0.15;

} else if (tip4.clicked == true) {
    tip = 0.25;

} else if (tip5.clicked == true) {
    tip = 0.5;

} else {
    tip = tip6;

}*/

tip1.addEventListener("click", function() {
    tip = 0.05;
    document.getElementById('tip5').style.background = ' hsl(172, 67%, 45%)';
    document.getElementById('tip5').style.color = ' hsl(183, 100%, 15%)';
});
tip2.addEventListener("click", function() {
    tip = 0.10;
    document.getElementById('tip10').style.background = ' hsl(172, 67%, 45%)';
    document.getElementById('tip10').style.color = ' hsl(183, 100%, 15%)';
});
tip3.addEventListener("click", function() {
    tip = 0.15;
    document.getElementById('tip15').style.background = ' hsl(172, 67%, 45%)';
    document.getElementById('tip15').style.color = ' hsl(183, 100%, 15%)';
});
tip4.addEventListener("click", function() {
    tip = 0.25;
    document.getElementById('tip25').style.background = ' hsl(172, 67%, 45%)';
    document.getElementById('tip25').style.color = ' hsl(183, 100%, 15%)';
});
tip5.addEventListener("click", function() {
    tip = 0.5
    document.getElementById('tip50').style.background = ' hsl(172, 67%, 45%)';
    document.getElementById('tip50').style.color = ' hsl(183, 100%, 15%)';
});
document.getElementById("custom").addEventListener("input", function() {
    tip = document.getElementById("custom").value;
})

function CalculateTip(tipAmount) { //function to calculate tip amount
    bill = document.getElementById("bill").value; // gets value of bill input
    numOfPeople = document.getElementById("numPeople").value; //gets value of number of people input
    if (numOfPeople == 0) {
        document.getElementById('numPeople').style.border = '2px solid red';
        document.getElementById('zero').innerHTML = "Can't be zero";
    } else {
        document.getElementById('numPeople').style.border = '2px solid hsl(172, 67%, 45%)';
        document.getElementById('zero').innerHTML = "";
    }
    tipTotal = (bill * tipAmount) / numOfPeople; // calculates tip per person
    total = (bill / numOfPeople) + tipTotal; // calculates total per person
    document.getElementById('tPP').innerHTML = "$" + tipTotal.toFixed(2); // puts the value into html element tPP
    document.getElementById("tp").innerHTML = "$" + total.toFixed(2); // puts the value into html element tp
}


document.getElementById("numPeople").addEventListener("input", function() {
    CalculateTip(tip);

});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("bill").value = "0";
    document.getElementById("numPeople").value = "0";
    document.getElementById("tPP").innerHTML = "$0.00";
    document.getElementById("tp").innerHTML = "$0.00";
    document.getElementById('tip5').style.background = 'hsl(183, 100%, 15%)';
    document.getElementById('tip5').style.color = ' white';
    document.getElementById('tip10').style.background = 'hsl(183, 100%, 15%)';
    document.getElementById('tip10').style.color = ' white';
    document.getElementById('tip15').style.background = 'hsl(183, 100%, 15%)';
    document.getElementById('tip15').style.color = ' white';
    document.getElementById('tip25').style.background = 'hsl(183, 100%, 15%)';
    document.getElementById('tip25').style.color = ' white';
    document.getElementById('tip50').style.background = 'hsl(183, 100%, 15%)';
    document.getElementById('tip50').style.color = ' white';
    document.getElementById('custom').value = "Custom";

});