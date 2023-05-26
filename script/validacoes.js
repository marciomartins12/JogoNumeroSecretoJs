const numerosecreto= crianumero();
function crianumero(){
    return parseInt((Math.random())* 1000+1)
}
function enviaNumeroFalado(numerofalado){
    const numerox= parseInt(numerofalado)
    if(numerox===numerosecreto){
        document.querySelector(".mais-ou-menos").innerHTML="";
        document.querySelector("body").innerHTML=`<section class="section-vitoria">
        <h3 class="h1-vitoria">Você acertou!</h3>
        <p class="paragrafo-vitoria">O número secreto era <span class="valor">${numerosecreto}</span></p>
        
        <a class="btn-jogar-novamente" href="../game.html">Jogar Novamente</a>
        <a class="btn-voltar-para-o-inicio" href="../index.html">Voltar para o inicio</a>
        </section>`;
    }else if(numerox<numerosecreto){
        document.querySelector(".fale-iniciar-obs").classList.add("displaynone");
        document.querySelector(".mais-ou-menos").innerHTML=`<p class="numerosrecetoe" >O número secreto é maior</p>
        <span>
        <i class="fa-solid fa-arrow-up fa-bounce"></i>
            </span>`
    }
    else if(numerox>numerosecreto){
        document.querySelector(".fale-iniciar-obs").classList.add("displaynone");
        document.querySelector(".mais-ou-menos").innerHTML=`<p>O número secreto é menor</p>
        <span>
        <i class="fa-solid fa-arrow-down fa-bounce"></i>
            </span>`
    }
    else if(numerox<0 || numerox>1000){
        document.querySelector(".fale-iniciar-obs").classList.add("displaynone");
        document.querySelector(".mais-ou-menos").innerHTML=`<p>Apenas numeros enre 0 e 1000</p>`
    }
}

console.log("número Secreto:", numerosecreto);