// =============================
// INICIALIZACIÓN
// =============================

document.addEventListener("DOMContentLoaded", () => {

    iniciarTest();
    iniciarPreguntasCortas();
    iniciarSoluciones();
    crearPanelNota();

});


// =============================
// TEST
// =============================

let totalQuestions = 0;
let correctAnswers = 0;

function iniciarTest(){

    const questions =
    document.querySelectorAll(".question");

    totalQuestions = questions.length;

    questions.forEach(question => {

        const answers =
        question.querySelectorAll(".answer");

        const result =
        question.querySelector(".result");

        answers.forEach(answer => {

            answer.addEventListener("click", () => {

                if(question.classList.contains("answered")){
                    return;
                }

                question.classList.add("answered");

                const isCorrect =
                answer.classList.contains("correct");

                answers.forEach(btn => {

                    btn.disabled = true;

                    if(btn.classList.contains("correct")){

                        btn.style.background =
                        "#dcfce7";

                        btn.style.border =
                        "2px solid #22c55e";

                        btn.style.color =
                        "#166534";
                    }

                });

                if(isCorrect){

                    correctAnswers++;

                    result.innerHTML =
                    "✔ Respuesta correcta";

                    result.style.color =
                    "#16a34a";

                }else{

                    answer.style.background =
                    "#fee2e2";

                    answer.style.border =
                    "2px solid #ef4444";

                    result.innerHTML =
                    "✘ Incorrecto. La correcta se ha marcado en verde.";

                    result.style.color =
                    "#dc2626";

                }

                actualizarNota();

            });

        });

    });

}


// =============================
// PREGUNTAS CORTAS
// =============================

function iniciarPreguntasCortas(){

    const botones =
    document.querySelectorAll(".check-btn");

    botones.forEach(btn => {

        btn.addEventListener("click", () => {

            const feedback =
            btn.parentElement.querySelector(".feedback");

            if(feedback){

                feedback.style.display = "block";

                feedback.style.background =
                "#eff6ff";

                feedback.style.padding =
                "15px";

                feedback.style.borderRadius =
                "10px";

                feedback.style.marginTop =
                "10px";

            }

        });

    });

}


// =============================
// SOLUCIONES PRÁCTICAS
// =============================

function iniciarSoluciones(){

    const botones =
    document.querySelectorAll(".solution-btn");

    botones.forEach(btn => {

        btn.addEventListener("click", () => {

            const bloque =
            btn.parentElement.querySelector(".solution");

            if(!bloque){
                return;
            }

            if(
                bloque.style.display === "block"
            ){

                bloque.style.display = "none";

                btn.textContent =
                "Ver solución";

            }else{

                bloque.style.display =
                "block";

                bloque.style.background =
                "#f8fafc";

                bloque.style.padding =
                "15px";

                bloque.style.borderLeft =
                "4px solid #2563eb";

                bloque.style.borderRadius =
                "10px";

                bloque.style.marginTop =
                "10px";

                btn.textContent =
                "Ocultar solución";

            }

        });

    });

}




function actualizarNota(){

    document.getElementById("score-text")
    .innerHTML =
    `${correctAnswers} / ${totalQuestions}`;

    const nota =
    ((correctAnswers / totalQuestions) * 10)
    .toFixed(1);

    document.getElementById("score-grade")
    .innerHTML =
    `${nota} / 10`;

}