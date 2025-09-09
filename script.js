const text = document.addEventListener("DOMContentLoaded" , () => {
    const textketik = ["lopyou❤"];
    
let i=0;

    function type() {
    if (i < textketik[0].length) {
        document.getElementById("typed").textContent += textketik[0].charAt(i);
       i++;
       setTimeout(type, 230);

        }
    }


    type();
    })

const texts = document.addEventListener("DOMContentLoaded" , () => {
 const teks = ["tekan lagi dong." ]
let p = 0
    function typee() {
    if (p < teks[0].length) {
        document.getElementById("moos").textContent += teks[0].charAt(p);
       p++;
       setTimeout(typee, 150);

        }
    }


    typee();
})


const container =
document.getElementById("love-container");

function createlove() {
    const love = document.createElement("div");
    love.classList.add("love");
    love.innerText = "❤";

    love.style.left = Math.random() * 100 + "vw";
    love.style.fontSize = (12+ Math.random()* 5)+ "s";

    container.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 8000);
}

setInterval(createlove, 300)



const nggaMauBtn = document.getElementById('ngga-mau-btn');

nggaMauBtn.addEventListener('click', function(event) {
    // Mencegah halaman berpindah ke "next.html" saat diklik
    event.preventDefault(); 
    
    // Mendapatkan posisi acak di dalam jendela browser
    const randomX = Math.random() * (window.innerWidth - this.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - this.offsetHeight);
    
    // Mengubah posisi tombol
    this.style.position = 'absolute';
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});


document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('myAudio');
    const songKey = 'currentSongTime';

    // 1. Memeriksa localStorage saat halaman dimuat
    const savedTime = localStorage.getItem(songKey);
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
        audio.play();
    } else {
        // Jika tidak ada data tersimpan, putar dari awal
        audio.play();
    }

    // 2. Menyimpan waktu lagu sebelum pindah halaman
    window.addEventListener('beforeunload', () => {
        localStorage.setItem(songKey, audio.currentTime);
    });
});