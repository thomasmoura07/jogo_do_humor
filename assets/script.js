const img = document.querySelector('img#gif')
const mood = document.querySelector('h3#mood')

console.dir(img.attributes.alt.nodeValue)

function changeImg(){
    const gifList = ['./assets/img/panico.gif','./assets/img/extase.gif','./assets/img/runner.gif']

    if(img.attributes.src.nodeValue === gifList[0]){
        img.setAttribute("src",`${gifList[1]}`);
        img.setAttribute("alt","Baby se contorcendo em um frenesi");
        mood.innerHTML = "EXTASIADO";
    }else if(img.attributes.src.nodeValue === gifList[1]) {
        img.setAttribute("src",`${gifList[2]}`);
        img.setAttribute("alt","Baby no seu carrinho de brinquedo dirigindo alucinadamente em sua imaginação.");
        mood.innerHTML = "FRENÉTICO";
    }
    else if(img.attributes.src.nodeValue === gifList[2]) {
        img.setAttribute('src',`${gifList[0]}`);
        img.setAttribute("alt","Baby em pânico");
        mood.innerHTML = "EM PÂNICO";
    }
   
}
