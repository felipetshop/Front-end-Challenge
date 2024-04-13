document.addEventListener("DOMContentLoaded", function() {

    const card1 = document.querySelector('.card');
    const card2 = document.querySelector('.card2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.querySelector('.btn2');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
  
    
    btn1.addEventListener('click', function(event) {
      event.preventDefault(); // Previne o envio do formulário
  
      
      if (!validateEmail(emailInput.value)) {
        emailError.style.display = 'flex';
        return; // Retorna para evitar o envio do formulário
      }
  
      emailError.style.display = 'none';
  
      
      card1.style.display = 'none';
      card2.style.display = 'block';
    });
  
    
    btn2.addEventListener('click', function() {
      
      card2.style.display = 'none';
      card1.style.display = 'flex'; // Altera para 'flex' para manter o layout
    });
  
    
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  

