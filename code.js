document.getElementById("submit").addEventListener("click",bmical);

function bmical()
{
    const cm = parseInt(document.getElementById("cm").value);
    const kg = parseFloat(document.getElementById("kg").value);

    let bmi;
    let newCm = parseFloat(cm/100);

    bmi = kg / (newCm * newCm);
    bmi = bmi.toFixed(1);
    console.log(bmi);

    document.getElementById("result").innerHTML = bmi;
}