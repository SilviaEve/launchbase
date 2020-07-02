const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 30;

const periodoContribuicao = idade + contribuicao;

if (sexo == "M") {
    if (contribuicao < 35) {
        console.log(`Você não possui tempo de contribuição suficiente!!`)
    } else {
        if (periodoContribuicao >= 95) {
            console.log(`${nome}, seu tempo de contribuição somado com sua idade é de ${periodoContribuicao} anos.`+
            `Você pode se aposentar!`)
        } else {
            console.log(`${nome}, seu tempo de contribuição somado com sua idade é de ${periodoContribuicao} anos.`+
            `Você pode se aposentar!`)
        }
    }
}

if (sexo == "F") {
    if (contribuicao < 30) {
        console.log(`Você não possui tempo de contribuição suficiente!!`)
    } else {
        if (periodoContribuicao >= 85) {
            console.log(`${nome}, seu tempo de contribuição somado com sua idade é de ${periodoContribuicao} anos.`+
            `Você pode se aposentar!`)
        } else {
            console.log(`${nome}, seu tempo de contribuição somado com sua idade é de ${periodoContribuicao} anos.`+
            `Você pode se aposentar!`)
        }
    }
}