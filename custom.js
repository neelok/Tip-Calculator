function calc(){
	var amt = document.querySelector("#minput").value;
	var tip = document.querySelector("#sinput").value;
	var tipint =parseInt(tip)/100
	var ppl = document.querySelector("#pint").value

	
	var calc = Number.parseFloat(amt * tipint/ppl).toPrecision(2)
	document.querySelector("#tamt").innerHTML = "TIP AMOUNT";

	document.querySelector("#fans").innerHTML = "$" + calc
	if(ppl > 1){
		document.querySelector("#each").innerHTML = "each";
	} else {
		document.querySelector("#each").innerHTML = "";
	}
}