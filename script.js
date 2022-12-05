const button = document.getElementById('button');
const dataPalavra = document.getElementById("dataPalavra");
const notePalavra = document.getElementById("notePalavra");
const calendario = document.getElementById('calendario');
const note = document.getElementById("iconeImagemdnv");
const botaoLogo = document.getElementById("botaoLogo");

button.addEventListener("click", ()=>{api()});

dataPalavra.addEventListener("mouseover",mudarCorDate);
dataPalavra.addEventListener("mouseout",tirarCorDate);
notePalavra.addEventListener("mouseover",mudarCorNote);    
notePalavra.addEventListener("mouseout",tirarCorNote);
async function api(){
    const key = '7r4h5XIPQTRWXCg7yDfCGdAyPP8Qslu8wUud3tXf';
    const dateInput = document.getElementById('date').value;
    const data = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${dateInput}`);
    const result = await data.json();
    const dados = result;
    console.log(result);
    usarApi(dados);
}
function usarApi(dados){
    document.querySelector("#container").innerHTML = 
    `<section id="imagem">
        <img src="${dados.url}" alt="">
    </section>`;
    
    document.querySelector("#container").innerHTML += ` <h3> ${dados.title}  </h3>`;
    document.querySelector("#container").innerHTML += ` <h4> Image Credit & Copyright: ${dados.copyright}  </h4>`;
    document.getElementById("explanation").innerHTML = `<strong>Explanation:</strong> ${dados.explanation}` ;
    // alert('Aperte no icone do site, para fazer a busca novamente!')
}

function mudarCorDate(){
    calendario.style.filter = 'brightness(100%)';
}
function tirarCorDate(){
    calendario.style.filter = 'brightness(50%)';
}
function mudarCorNote(){
    note.style.filter = 'brightness(100%)';
}
function tirarCorNote(){
    note.style.filter = 'brightness(50%)';
}