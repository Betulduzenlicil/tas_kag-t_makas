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
            kazanan.textContent="Malesef Pc yi geçemedin";  
        }else if(kullanıcıPuan.textContent === "30"){
        resimSecmeDivi.textContent=""
        kazanan.textContent="Evet Başardın 30 puan senin";  

        }   
    } 
         
}

  //? eşitlik durumu için
    const eşitlik=()=>{
    kazanan.textContent="Eşitsiniz"
   
}

//? kazanma durumu
    const kazandın=()=>{
    kazanan.textContent="Sen Kazandın"
    kullanıcıPuan.textContent++

}
//?kaybetme durumu
    const kaybettin=()=>{
    kazanan.textContent="PC Kazandı"
    pcPuan.textContent++
}


