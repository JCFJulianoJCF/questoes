function validaEntrada(args) {
    for (let i = 0; i < arguments.length; i++) {
      if (!!arguments[i] == false || arguments[i] < 0) {
        return false;
      }
    }
    return true;
  }
  
  function calcularIMC(kilos, altura) {
    return (kilos / (altura * altura)).toFixed(2);
  }
  
  const formCalcularIMC = document.getElementById('form');
  
  formCalcularIMC.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const kilos = parseFloat(document.getElementById('kilos').value).toFixed(2);
    const altura = parseFloat(document.getElementById('altura').value).toFixed(2);
  
    if (validaEntrada(kilos, altura)) {
      const imc = calcularIMC(kilos, altura);
      document.getElementById('imc').value = parseFloat(imc).toFixed(2);
      verificarIMC(imc);
    }
  });
  
  function verificarIMC(imc) {
    if (imc < 18 ) {
      alert("Abaixo do peso")
    } else if (imc > 18 && imc < 25){
      alert("Peso Normal")
    } else if (imc > 25){
        alert("Acima do peso")
    }
  }
