const taşResmi=document.getElementById("taş")
const kağıtResmi=document.getElementById("kağıt")
const makasResmi=document.getElementById("makas")
const kullanıcısecimYeri=document.getElementById("user-choice")
const pcsecimYeri=document.getElementById("pc-choice")
const resimSecmeDivi=document.querySelector(".selection");
const kazanan=document.querySelector(".message")
const pcPuan=document.querySelector("#pc-score")
const kullanıcıPuan=document.querySelector("#user-score")
const modul=document.querySelector(".modal-card")

//! local değişken

let kullanıcınınSectigiResim=document.createElement("img")
let pcninSectigiResim=document.createElement("img")
let pcRandom
let pcArr=["taş", "kağıt", "makas"]

//! ==========events==========

resimSecmeDivi.addEventListener('click', (e) => {
  if (e.target.id) {
    kullanıcınınSectigiResim.src=`./img/${e.target.id}.png`
    kullanıcınınSectigiResim.alt=e.target.id
    kullanıcısecimYeri.appendChild(kullanıcınınSectigiResim)
    pcSelection() 
  }  
});

//! ===========fonksıyonlar===============
//*bilgisayarın secimi için
const pcSelection=()=>{
    pcArr=["taş", "kağıt", "makas"]
    pcRandom=pcArr[Math.floor(Math.random()*3)]
    pcninSectigiResim.src=`./img/${pcRandom}.png`
    pcninSectigiResim.alt=pcRandom
    pcsecimYeri.appendChild(pcninSectigiResim)
    kazananıBul()
    enYuksekPuanAlan()

}

//! seçime göre yönlendirme

const kazananıBul = () => {
    pcArr.forEach((a) => {
        if (kullanıcınınSectigiResim.alt === pcRandom) {
            eşitlik();
        } else if (
            (kullanıcınınSectigiResim.alt === "taş" && pcRandom === "kağıt") ||
            (kullanıcınınSectigiResim.alt === "makas" && pcRandom === "taş") ||
            (kullanıcınınSectigiResim.alt === "kağıt" && pcRandom === "makas")
        ) {
            kaybettin();
        }
        else{
            kazandın()
        }
    });

  
}
const enYuksekPuanAlan=()=>{
    if (pcPuan.textContent === "30" || kullanıcıPuan.textContent === "30" ) {
        if (pcPuan.textContent === "30") {
            resimSecmeDivi.textContent=""
            kazanan.textContent="🚫🚫🚫Unfortunately you couldn't pass your opponent🚫🚫🚫"; 
            kazanan.style.backgroundColor="black" 
            kazanan.style.transform="scale(1)" 
        }else if(kullanıcıPuan.textContent === "30"){
        resimSecmeDivi.textContent=""
        kazanan.textContent="🏅🏅🏅You did it, 30 points are yours🏅🏅🏅";
        kazanan.style.backgroundColor="red"
        kazanan.style.transform="scale(1)" 

        }   
    } 
         
}

  //? eşitlik durumu için
    const eşitlik=()=>{
    kazanan.textContent="🟰No one wins equal points🟰"
   
}

//? kazanma durumu
    const kazandın=()=>{
    kazanan.textContent="👏Bravo, you earned 3 points👏"
    kullanıcıPuan.textContent++

}
//?kaybetme durumu
    const kaybettin=()=>{
    kazanan.textContent="😒Sorry, your opponent won 3 points😒"
    pcPuan.textContent++
}


window.onload = function() {
    let videoIframe = document.querySelector('iframe');
    videoIframe.src += "&autoplay=1";
    videoIframe.classList.remove('hidden');
};
