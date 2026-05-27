const letras = ["A", "B", "C", "D"];
let respondidos = 0;
function carregarQuiz(quiz, num) {
  modalQuiz.style = "display:flex; opacity:1";
  let htmlQuestoes = "";
  for (let i = 0; i < quiz.questoes.length; i++) {
    htmlQuestoes += `
            
            <div class="questao" onclick="selecionar(${i == quiz.qCerta ? true : false},${num})">
                <span>${letras[i]})</span>
                <p>${quiz.questoes[i]}</p>
            </div>
            `;
  }
  modalQuiz.innerHTML = `
         <div class="cardquiz">
            <h3>${quiz.pergunta}:</h3>
           <div class="questoes"  >
             ${htmlQuestoes}
           </div>
        </div>
        
        `;
}

function selecionar(correto, numero) {
  if (correto) {
    respondidos++;
    modalQuiz.style = "display:none; opacity:0";
    document.getElementById(`quizCirculo${numero}`).style.display = "none";
    let lista = [];
    if (fase == 1) {
      lista = listaObstaculoFase1;
    }else if(fase == 2){
        
    }
    for (let i = 0; i < lista.length; i++) {
      let atual = lista[i];
      if (atual.tipo == "quiz") {
        if (atual.quiz == numero) {
          if (fase == 1) {
             listaObstaculoFase1[i].top =999999999;
          }
        }
      }
    }
    if (respondidos == 3) {
      alert("proxima fase");
    }
  } else {
    window.location.reload();
  }
}
