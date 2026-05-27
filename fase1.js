let fase1Quiz1 = {
    pergunta:'Qual componente é considerado o “cérebro” do computador?',
    questoes:['CPU','Memória RAM','HD','Fonte'],
    qCerta:0
}

let fase1Quiz2 = {
    pergunta:'Qual componente realiza cálculos matemáticos e operações lógicas?',
    questoes:['Cache','ULA','Barramento','SSD'],
    qCerta:1
}

let fase1Quiz3 = {
    pergunta:'Qual componente armazena temporariamente dados usados pela CPU durante o processamento?',
    questoes:['Cooler','Registradores','Placa-mãe','GPU'],
    qCerta:1
}
    
    let listaObstaculoFase1 = [
        {tipo:'inimigo' ,top: '0px', left: '150px', width: '250px', height: '200px' },
        {tipo:'inimigo' ,top: '0px', left: '400px', width: '270px', height: '100px' },
        {tipo:'inimigo' ,top: '0px', left: '660px', width: '70px', height: '300px' },
        {tipo:'inimigo' ,top: '300px', left: '600px', width: '200px', height: '250px' },
        {tipo:'inimigo' ,top: '300px', left: '0px', width: '400px', height: '4400px' },
        {tipo:'inimigo' ,top: '150px', left: '450px', width: '150px', height: '400px' },
        {tipo:'inimigo' ,top: '600px', left: '450px', width: '350px', height: '60px' },
        {tipo:'inimigo' ,top: '380px', left: '850px', width: '240px', height: '2500px' },
        {tipo:'inimigo' ,top: '270px', left: '1090px', width: '190px', height: '30px' },
        {tipo:'inimigo' ,top: '270px', left: '1050px', width: '40px', height: '200px' },
        {tipo:'inimigo' ,top: '000px', left: '730px', width: '270px', height: '340px' },
        {tipo:'inimigo' ,top: '000px', left: '1000px', width: '270px', height: '100px' },
        {tipo:'inimigo' ,top: '130px', left: '1100px', width: '140px', height: '100px' },
        {tipo:'quiz',quiz:1,quizInfo:fase1Quiz1 ,top: '320px', left: '1150px', width: '120px', height: '120px' },
        {tipo:'quiz',quiz:2,quizInfo:fase1Quiz2 ,top: '460px', left: '1150px', width: '120px', height: '120px' },
        {tipo:'quiz',quiz:3,quizInfo:fase1Quiz3 ,top: '600px', left: '1150px', width: '120px', height: '120px' },

    ]

