document.addEventListener("DOMContentLoaded", () => {
    const sonidos = [
        "./imgs/sonidos/5.png",
        "./imgs/sonidos/6.png",
        "./imgs/sonidos/7.png",
        "./imgs/sonidos/8.png",
        "./imgs/sonidos/9.png",
        "./imgs/sonidos/10.png",
        "./imgs/sonidos/11.png",
        "./imgs/sonidos/12.png",
        "./imgs/sonidos/13.png",
        "./imgs/sonidos/14.png",
        "./imgs/sonidos/15.png",
        "./imgs/sonidos/16.png",
        "./imgs/sonidos/17.png",
        "./imgs/sonidos/18.png",
        "./imgs/sonidos/19.png",
        "./imgs/sonidos/20.png",
        "./imgs/sonidos/21.png",
        "./imgs/sonidos/22.png",
        "./imgs/sonidos/23.png",
        "./imgs/sonidos/24.png",
        "./imgs/sonidos/25.png",
        "./imgs/sonidos/26.png",
        "./imgs/sonidos/27.png",
        "./imgs/sonidos/28.png",
        "./imgs/sonidos/29.png",
        "./imgs/sonidos/30.png",
        "./imgs/sonidos/31.png",
        "./imgs/sonidos/32.png",
        "./imgs/sonidos/33.png",
        "./imgs/sonidos/34.png",
        "./imgs/sonidos/35.png",
        "./imgs/sonidos/36.png",
        "./imgs/sonidos/37.png",
        "./imgs/sonidos/38.png",
        "./imgs/sonidos/39.png",
        "./imgs/sonidos/40.png",
        "./imgs/sonidos/41.png",
        "./imgs/sonidos/42.png",
        "./imgs/sonidos/43.png",
        "./imgs/sonidos/44.png",
        "./imgs/sonidos/45.png",
        "./imgs/sonidos/46.png",
        "./imgs/sonidos/47.png",
        "./imgs/sonidos/48.png",
        "./imgs/sonidos/49.png",
        "./imgs/sonidos/50.png",
        "./imgs/sonidos/51.png"
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



