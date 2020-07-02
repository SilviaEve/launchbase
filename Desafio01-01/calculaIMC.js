const nome = 'Silvia'
const peso = 90
const altura = 1.75

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`Silvia seu IMC é ${imc}. Você está acima do peso;`)
} else {
    console.log('Silvia, você está no peso ideal')
}