const programador = [
    { nome: 'Silvia', idade: 27, tecnologia: 'C++' },
    { nome: 'Gabriel', idade: 30, tecnologia: 'Python' },
    { nome: 'Marcos', idade: 40, tecnologia: 'JavaScript' }
 ]

 const tecnologia = [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
 ]

 console.log(`O usuário ${programador[0].nome} tem ${programador[0].idade} anos e usa a tecnologia ${tecnologia[0].nome} com especialidade em ${tecnologia[0].especialidade}`)