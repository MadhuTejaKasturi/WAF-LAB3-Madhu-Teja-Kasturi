document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('tip_form');
    const ti = document.getElementById('bill_total');
    const pi = document.getElementById('tip_percentage');
    const si = document.getElementById('tip_slider');
    const ta = document.getElementById('tip_amount');
    const tb = document.getElementById('total_bill');


    form.addEventListener('input', function() {
  
        const bill_total = parseFloat(ti.value);

        const tip_percentage = parseInt(si.value);

        const tip_amount = (bill_total * tip_percentage) / 100;

        const total_bill = bill_total + tip_amount;

        pi.value = tip_percentage + '%';
        ta.value = tip_amount.toFixed(2);
        tb.value = total_bill.toFixed(2);
        
    });

    ti.addEventListener('input', function() {

        if (!/^\d*\.?\d*$/.test(ti.value)) {
            alert('Please Enter a valid number for Bill Total..');
            ti.value = '';
        }
        
    });
});
