function favGame() {
    var selectedGame = document.getElementById("gameSelector").value;
    var imageContainer = document.getElementById("imageContainer");
    var gameArt = document.getElementById("gameArt");

    var imageSources = {
        default: "",
        eldenRing: "img/eldenRing.jpg",
        hogwarts: "img/hogwarts.jpg",
        tlou2: "img/tlou2.jpg",
        tsushima: "img/tsushima.jpg",
    };

    gameArt.src = imageSources[selectedGame];
    imageContainer.style.display = (selectedGame === "default") ? "none" : "block";
}