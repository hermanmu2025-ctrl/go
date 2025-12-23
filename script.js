// Simple calculator & form behavior (vanilla JS)
document.addEventListener('DOMContentLoaded',function(){
  const amount = document.getElementById('amount');
  const term = document.getElementById('term');
  const monthly = document.getElementById('monthly');
  const qForm = document.getElementById('quick-calc');

  function calc(){
    const P = Number(amount.value) || 0;
    const n = Number(term.value) || 1;
    const annualRate = 0.18; // contoh 18% per tahun
    const monthlyRate = annualRate/12;
    // simple annuity formula
    const m = (P * monthlyRate) / (1 - Math.pow(1+monthlyRate, -n));
    monthly.textContent = new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR', maximumFractionDigits:0}).format(m);
  }

  if(amount) amount.addEventListener('input', calc);
  if(term) term.addEventListener('change', calc);
  calc();

  qForm && qForm.addEventListener('submit', function(e){
    e.preventDefault();
    // Smooth scroll to apply
    document.getElementById('ajukan').scrollIntoView({behavior:'smooth'});
    document.getElementById('amount2').value = amount.value;
    document.getElementById('term2').value = term.value;
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle && navToggle.addEventListener('click', function(){
    const open = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!open));
    if(open){
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '1rem';
      nav.style.top = '60px';
      nav.style.background = '#fff';
      nav.style.padding = '0.5rem';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 10px 30px rgba(10,20,40,0.08)';
    }
  });

  // Apply form submit (placeholder — integrate with API)
  const applyForm = document.getElementById('apply-form');
  applyForm && applyForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const data = {
      fullname: this.fullname.value.trim(),
      phone: this.phone.value.trim(),
      amount: Number(this.amount.value),
      term: Number(this.term.value)
    };
    // TODO: call backend POST /api/v1/loans/apply
    alert('Form submitted (demo). Integrasikan dengan backend.');
  });
});
