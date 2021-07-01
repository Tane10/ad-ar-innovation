AFRAME.registerComponent("ad-player", {
    init: () => {
        let adSource = document.querySelector("#ad-audio");
        let adClicker = document.querySelector("#ad-card");

        let playAd = () => {
            adSource.components.sound.playSound();
        };

        adClicker.addEventListener("click", playAd);
    },
});