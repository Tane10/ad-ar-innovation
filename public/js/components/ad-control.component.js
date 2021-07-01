AFRAME.registerComponent("ad-player", {
    init: () => {
        let adSource = document.querySelector("#ad-audio");
        let marker = document.querySelector("#marker");

        let playAd = () => {
            adSource.components.sound.playSound();
        };

        marker.addEventListener("markerFound", playAd);
    },
});