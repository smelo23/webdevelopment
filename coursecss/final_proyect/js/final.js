function calculoFunction(){
    var cuota = document.getElementsByName('cuota'); //obtain the number of quotas
    var monto = document.getElementById('monto'); //obtain the number of amount
    var tm = 0.03;

    if (monto.value<500000 || monto.value>20000000){
        alert("\n***Error***\n\nEl monto solicitado esta fuera de rango. Intente nuevamente")
    }
    else{

        for (var i = 0, length = cuota.length; i < length; i++)
        {
            if (cuota[i].checked)
            {
                var defcuota = cuota[i].value;
            alert("\nSu consulta esta siendo procesada... \n\nMonto total del crédito: " + monto.value + "\nTasa mensual de interés: " + tm + " %\nNúmero de cuotas: " + defcuota + " meses"); // do whatever you want with the checked radio
            break;  // only one radio can be logically checked, don't check the rest
            }
        }
        //calculos

        var tcuotames = (tm * monto.value)/(1-(Math.pow((1+tm),-defcuota)));
        var totalp = tcuotames * defcuota;
        var interestl = totalp - monto.value;
        document.getElementById('vcuota').setAttribute('value',"$ "+tcuotames.toFixed(1));
        document.getElementById('interes').setAttribute('value',"$ "+interestl.toFixed(1));
        document.getElementById('tpagar').setAttribute('value',"$ "+totalp.toFixed(1));
    }

}

function resetCalFunction(){
    document.getElementById('monto').setAttribute('value',"2000000");
    document.getElementById('vcuota').setAttribute('value',"");
    document.getElementById('interes').setAttribute('value',"");
    document.getElementById('tpagar').setAttribute('value',"");
}