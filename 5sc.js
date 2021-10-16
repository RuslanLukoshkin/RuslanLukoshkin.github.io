function calculate() {
    let regexp = /\D/g;
    let cp = document.getElementsByName("cenprod")[0].value;
    let pk = document.getElementsByName("prkol")[0].value;
    let r = document.getElementById("result");

    if (Boolean(cp) && Boolean(pk)) {
    if (regexp.test(cp) || regexp.test(pk)) {
	r.innerText = "ошибка";
    }
	else
	{
		regexp = /\d/g;
            
        cp = parseInt(cp.match(regexp).join(""));
        pk = parseInt(pk.match(regexp).join(""));
        r.innerText = `Итого: ${cp * pk}`;
    }
	
    }
	else
	{
        r.innerText = "Ошибка";
    }
}

window.document.addEventListener("DOMContentLoaded", function (calculate) {
    console.log("DOM is fully loaded and parsed");
    let button = document.getElementById("calknop");
    button.addEventListener("click", calculate);
});
