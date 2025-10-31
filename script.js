
const imc = (peso, altura) => peso / (altura * altura);
const situacao = (valor_imc) => {
    if (valor_imc < 18.5) {
        return "Abaixo do peso";
    } else if (valor_imc >= 18.5 && valor_imc < 24.9) {
        return "Peso normal";
    } else if (valor_imc >= 25 && valor_imc < 29.9) {
        return "Sobrepeso";
    } else if (valor_imc >= 30 && valor_imc < 34.9) {
        return "Obesidade grau 1";
    } else if (valor_imc >= 35 && valor_imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    } 
}

const executar = () => {
  const peso = eval(document.getElementById("v1").value);
  const altura = eval(document.getElementById("v2").value);
  const valor_imc = imc(peso, altura);
  const valor_sit = situacao(valor_imc);
  alert(`Seu IMC é ${valor_imc.toFixed(2)} :: Situacao: ${valor_sit}`);
}