document.getElementById("btn").addEventListener("click",function(event){
  event.preventDefault();
  // alert("hello");
  checkdata();
  checkextraincome();
  checkdeductions();
});

let income = document.getElementById("income");
let extraIncome = document.getElementById("extraIncome");
let deductions = document.getElementById("deductions");

function checkdata(){
  let incomeValue = income.value.trim();
  // alert(incomeValue);
if(incomeValue==""){
  notify.classList.add("fa-circle-exclamation");
  return false;
}
if(!incomeValue.match (/^[\d]+$/)){
  notify.classList.add("fa-circle-exclamation");

  return false;
}
notify.classList.add("");
return true;
}


function checkextraincome(){
  let extraIncomeValue = extraIncome.value.trim();
  
if(extraIncomeValue==""){
  errorextraincome.classList.add("fa-circle-exclamation");
  return false;
}
if(!extraIncomeValue.match (/^[\d]+$/)){
  errorextraincome.classList.add("fa-circle-exclamation");

  return false;
}
errorextraincome.classList.add("");
return true;
}

function checkdeductions(){
  let deductionsValue = deductions.value.trim();
 
if(deductionsValue==""){
  errordeductions.classList.add("fa-circle-exclamation");
  return false;
}
if(!deductionsValue.match (/^[\d]+$/)){
  errordeductions.classList.add("fa-circle-exclamation");

  return false;
}
errordeductions.classList.add("");
return true;
}

// TAX CONDITIONS START
function calculateTax() {
  var age = document.getElementById('age').value;
  var income = parseFloat(document.getElementById('income').value);
  var extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  var deductions = parseFloat(document.getElementById('deductions').value) || 0;

  var grossIncome = income + extraIncome - deductions;
  var taxRate = 0;
  
  if (grossIncome <= 800000) {
      taxRate = 0;
  } else {
      switch (age) {
          case '<40':
              taxRate = 0.3;
              break;
          case '>=40&<60':
              taxRate = 0.4;
              break;
          case '>=60':
              taxRate = 0.1;
              break;
          default:
              return;
      }
  }

  var taxAmount = (grossIncome - 800000) * taxRate;
  var taxResult = taxAmount.toFixed(2);

  showModal(taxResult);
}
// //  TAX CONDITION END
function showModal(taxResult) {
  var modal = document.getElementById('modal');
  var taxResultElement = document.getElementById('taxResult');
  taxResultElement.innerHTML = 'Tax Amount: ₹' + taxResult;
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}