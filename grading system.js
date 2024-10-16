function calculate() {
    // Get values from the input fields and convert them to numbers
    let pq1 = parseFloat(document.getElementById("pq1").value) || 0;
    let pq2 = parseFloat(document.getElementById("pq2").value) || 0;
    let patt = parseFloat(document.getElementById("patt").value) || 0;
    let assp = parseFloat(document.getElementById("assp").value) || 0;
    let pproj = parseFloat(document.getElementById("pproj").value) || 0;
    let psw = parseFloat(document.getElementById("psw").value) || 0;
    let pme = parseFloat(document.getElementById("pme").value) || 0;

    let mq1 = parseFloat(document.getElementById("mq1").value) || 0;
    let mq2 = parseFloat(document.getElementById("mq2").value) || 0;
    let matt = parseFloat(document.getElementById("matt").value) || 0;
    let mass = parseFloat(document.getElementById("mass").value) || 0;
    let mproj = parseFloat(document.getElementById("mproj").value) || 0;
    let msw = parseFloat(document.getElementById("msw").value) || 0;
    let mme = parseFloat(document.getElementById("mme").value) || 0;

    let fq1 = parseFloat(document.getElementById("fq1").value) || 0;
    let fq2 = parseFloat(document.getElementById("fq2").value) || 0;
    let fatt = parseFloat(document.getElementById("fatt").value) || 0;
    let fass = parseFloat(document.getElementById("fass").value) || 0;
    let fproj = parseFloat(document.getElementById("fproj").value) || 0;
    let fsw = parseFloat(document.getElementById("fsw").value) || 0;
    let fme = parseFloat(document.getElementById("fme").value) || 0;

    // Calculate the grades
    let pqp = ((pq1 + pq2) / 2) * 0.40;
    let pcsp = ((patt + assp + psw + pproj) / 4) * 0.10;
    let pmep = pme * 0.50;
    let PG = pqp + pcsp + pmep;

    let mqp = ((mq1 + mq2) / 2) * 0.40;
    let mcsp = ((matt + mass + mproj + msw) / 4) * 0.10;
    let mmep = mme * 0.50;
    let MG = mqp + mcsp + mmep;

    let fqp = ((fq1 + fq2) / 2) * 0.40;
    let fcsp = ((fatt + fass + fsw + fproj) / 4) * 0.10;
    let fmep = fme * 0.50;
    let FG = fqp + fcsp + fmep;

    let TG = (PG * 0.30) + (MG * 0.30) + (FG * 0.40);

    // Display the results
    document.getElementById("PG").value = PG.toFixed(2);  // use value for input fields
    document.getElementById("MG").value = MG.toFixed(2);
    document.getElementById("FG").value = FG.toFixed(2);
    document.getElementById("TG").value = TG.toFixed(2);
}
  

/*Summary of Changes:
Used parseFloat() to convert input values to numbers.
Used || 0 to ensure that if the input is empty, it defaults to 0.
Used value property for setting the results in the input fields.
Corrected the formula and variable names where needed.
*/