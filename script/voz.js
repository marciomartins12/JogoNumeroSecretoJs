window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang='pt-br';
recognition.start();
recognition.addEventListener("result", (evento)=>{
    const oqueFOiFalado = evento.results[0][0].transcript
    if(isNaN(oqueFOiFalado)){
        document.querySelector(".disse").classList.add("edit-invalido")
        document.querySelector(".disse").innerHTML="Inválido, por favor fale um número válido"
    }else{
        trocarOqueFoiFalado(oqueFOiFalado);
    }
   
})

function trocarOqueFoiFalado(disse){
    document.querySelector(".disse").innerHTML=disse;
    enviaNumeroFalado(disse)
}

recognition.addEventListener("end", ()=>{
    recognition.start();
})