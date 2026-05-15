document.addEventListener("DOMContentLoaded", () => {
    const sonidos = [
        "../res/imgs/sonidos/5.png",
        "../res/imgs/sonidos/6.png",
        "../res/imgs/sonidos/7.png",
        "../res/imgs/sonidos/8.png",
        "../res/imgs/sonidos/9.png",
        "../res/imgs/sonidos/10.png",
        "../res/imgs/sonidos/11.png",
        "../res/imgs/sonidos/12.png",
        "../res/imgs/sonidos/13.png",
        "../res/imgs/sonidos/14.png",
        "../res/imgs/sonidos/15.png",
        "../res/imgs/sonidos/16.png",
        "../res/imgs/sonidos/17.png",
        "../res/imgs/sonidos/18.png",
        "../res/imgs/sonidos/19.png",
        "../res/imgs/sonidos/20.png",
        "../res/imgs/sonidos/21.png",
        "../res/imgs/sonidos/22.png",
        "../res/imgs/sonidos/23.png",
        "../res/imgs/sonidos/24.png",
        "../res/imgs/sonidos/25.png",
        "../res/imgs/sonidos/26.png",
        "../res/imgs/sonidos/27.png",
        "../res/imgs/sonidos/28.png",
        "../res/imgs/sonidos/29.png",
        "../res/imgs/sonidos/30.png",
        "../res/imgs/sonidos/31.png",
        "../res/imgs/sonidos/32.png",
        "../res/imgs/sonidos/33.png",
        "../res/imgs/sonidos/34.png",
        "../res/imgs/sonidos/35.png",
        "../res/imgs/sonidos/36.png",
        "../res/imgs/sonidos/37.png",
        "../res/imgs/sonidos/38.png",
        "../res/imgs/sonidos/39.png",
        "../res/imgs/sonidos/40.png",
        "../res/imgs/sonidos/41.png",
        "../res/imgs/sonidos/42.png",
        "../res/imgs/sonidos/43.png",
        "../res/imgs/sonidos/44.png",
        "../res/imgs/sonidos/45.png",
        "../res/imgs/sonidos/46.png",
        "../res/imgs/sonidos/47.png",
        "../res/imgs/sonidos/48.png",
        "../res/imgs/sonidos/49.png",
        "../res/imgs/sonidos/50.png",
        "../res/imgs/sonidos/51.png"
    ];
   function mezclarArray(array) {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array [i]];
        }
   }
   mezclarArray(sonidos);
   const elementos = document.querySelectorAll(".rs");
   elementos.forEach((img, index) => {
   if(index < sonidos.length) {
    img.src = sonidos[index];
   }
   });
});

const btn = document.getElementById("btnTop");
window.addEventListener("scroll", () => {
    if(window.scroll > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});



