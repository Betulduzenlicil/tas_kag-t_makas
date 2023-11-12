const taşResmi=document.getElementById("taş")
const kağıtResmi=document.getElementById("kağıt")
const makasResmi=document.getElementById("makas")
const kullanıcısecimYeri=document.getElementById("user-choice")
const pcsecimYeri=document.getElementById("pc-choice")
const resimSecmeDivi=document.querySelector(".selection");
const kazanan=document.querySelector(".message")
const pcPuan=document.querySelector("#pc-score")
const kullanıcıPuan=document.querySelector("#user-score")
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainBtn = document.getElementById("play-again")
const pcTopScore=document.querySelector("#top-score2")
const userTopScore=document.querySelector("#top-score1")

//! local değişken

let kullanıcınınSectigiResim=document.createElement("img")
let pcninSectigiResim=document.createElement("img")
let pcRandom
let pcArr=["taş", "kağıt", "makas"]
const YELLOW = "#ffc538"
const RED = "#fb778b"
const GREEN = "#5ab7ac"
// localStorage.setItem("pcTopScore")
// localStorage.setItem("userTopScore")


//! ==========events==========

resimSecmeDivi.addEventListener('click', (e) => {
  if (e.target.id) {
    kullanıcınınSectigiResim.src=`./img/${e.target.id}.png`
    kullanıcınınSectigiResim.alt=e.target.id
    kullanıcısecimYeri.appendChild(kullanıcınınSectigiResim)
    pcSelection() 
  }  
});

playAgainBtn.addEventListener("click", () => {
    // modalCardSection.classList.toggle("show")
    // modalCardSection.classList.toggle("remove")
    modalCardSection.style.display = "none"
    pcPuan.textContent="0"
    kullanıcıPuan.textContent="0"
    window.location.reload()
    zirve()
    enYuksekPuanAlan()
   
  })


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

//! sonuç tablosu
const enYuksekPuanAlan=()=>{
    if (pcPuan.textContent === "30" || kullanıcıPuan.textContent === "30" ) {
        kazanan.style.display="none";
        openModal()
        zirve()
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

//* müzik ekleme
    window.onload = ()=> {
    let videoIframe = document.querySelector('iframe');
    videoIframe.src += "&autoplay=1";
    videoIframe.classList.remove('hidden');
};

const openModal = () => {
    modalCardSection.classList.add("show")
  
    if (kullanıcıPuan.textContent === "30") {
      //? eger kullanici 10 puana usalti ise kullanici kazanmistir.
      finalMessagePar.textContent = "🏅You Win🏅"
      document.querySelector(".modal").style.backgroundColor = GREEN
      playAgainBtn.style.color = GREEN
    } else if (pcPuan.textContent === "30") {
      //? eger pc 10 puana ulasti ise pc kazanmistir.
      finalMessagePar.textContent = "☹️You Lost☹️"
      document.querySelector(".modal").style.backgroundColor = RED
      playAgainBtn.style.color = RED
    }
  }
  

  const zirve=()=>{
    if (pcPuan.textContent === "30") {
        pcTopScore.textContent++
        // localStorage.getItem("pcTopScore")
        openModal()
    
   } else if (kullanıcıPuan.textContent === "30") {
        userTopScore.textContent++
        // localStorage.getItem("pcTopScore")
        openModal()
    
   } 
}