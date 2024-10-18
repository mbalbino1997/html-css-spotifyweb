document.addEventListener("DOMContentLoaded", function () {
    // 1. Elementi del DOM selezionati
    const playButton = document.querySelector(".fa-circle-play");
    const pauseButton = document.querySelector(".fa-circle-pause");
    const progressBar = document.querySelector(".bar-progress");
    const volumeBar = document.querySelector(".volume-progress");
    const nextButton = document.querySelector(".fa-forward-step");
    const prevButton = document.querySelector(".fa-backward-step");
    const shuffleButton = document.querySelector(".fa-shuffle");
    const repeatButton = document.querySelector(".fa-arrow-rotate-right");

    let isPlaying = false;
    let currentTime = 0;
    const duration = 275; // esempio durata in secondi

    // 2. Funzione per gestire il play/pause
    playButton.addEventListener("click", function () {
        if (!isPlaying) {
            isPlaying = true;
            playButton.classList.replace("fa-circle-play", "fa-circle-pause");
            // Aggiungere la logica di riproduzione musicale qui
            console.log("Musica avviata");
        } else {
            isPlaying = false;
            playButton.classList.replace("fa-circle-pause", "fa-circle-play");
            // Aggiungere la logica di pausa musicale qui
            console.log("Musica in pausa");
        }
    });

    // 3. Funzione per gestire la barra di avanzamento
    function updateProgressBar() {
        const progressPercentage = (currentTime / duration) * 100;
        progressBar.style.width = progressPercentage + "%";
    }

    // 4. Simulazione dell'aggiornamento del tempo della canzone
    setInterval(function () {
        if (isPlaying && currentTime < duration) {
            currentTime++;
            updateProgressBar();
        }
    }, 1000);

    // 5. Eventi per il volume
    document.querySelector(".volume-full").addEventListener("click", function (e) {
        const volumePosition = (e.offsetX / this.clientWidth) * 100;
        volumeBar.style.width = volumePosition + "%";
        console.log("Volume impostato a: " + volumePosition + "%");
    });

    // 6. Eventi per i pulsanti avanti, indietro, shuffle e repeat
    nextButton.addEventListener("click", function () {
        // logica per saltare alla prossima canzone
        console.log("Prossima canzone");
    });

    prevButton.addEventListener("click", function () {
        // logica per tornare alla canzone precedente
        console.log("Canzone precedente");
    });

    shuffleButton.addEventListener("click", function () {
        shuffleButton.classList.toggle("active");
        console.log("Shuffle attivato");
    });

    repeatButton.addEventListener("click", function () {
        repeatButton.classList.toggle("active");
        console.log("Ripetizione attivata");
    });

    // 7. Gestione della visualizzazione dinamica del menu laterale
    const sidebarToggle = document.querySelector(".small-logo");
    const sidebar = document.querySelector(".sidebar");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        console.log("Sidebar toggled");
    });
});
