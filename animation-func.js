const words = ["Abendessen an Wochentagen", "Einrichtungsidee", "Outfit im neuen Look", "Grüner Daumen"];
const colors = ["#c28b00", "#2ea07e", "#a07e2e", "#2e7ea0", "#a02e7e"]; // Farben für jedes Wort
const animatedText = document.getElementById("animatedText");
let currentIndex = 0;

function changeWord() {
    // Entferne die Animation, bevor das Wort geändert wird
    animatedText.classList.remove("fadeInBottom");

    // Ändere das Wort und die Farbe
    animatedText.textContent = words[currentIndex];
    animatedText.style.color = colors[currentIndex];

    // Trigger Reflow, um die Animation neu zu starten
    void animatedText.offsetWidth;

    // Füge die Animation wieder hinzu
    animatedText.classList.add("fadeInBottom");

    // Nächstes Wort und Farbe im Array auswählen
    currentIndex = (currentIndex + 1) % words.length;
}

// Starte den Wortwechsel alle 2 Sekunden
setInterval(changeWord, 4000);