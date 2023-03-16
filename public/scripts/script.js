// maak variables voor stekjes anchors en de stekje modal
let stekjeAnchors = document.querySelectorAll("#stekje-more-info-anchor");
let darkOverlay = document.querySelector(".dark-background-overlay");

stekjeAnchors.forEach(stekjeAnchor => {
    stekjeAnchor.addEventListener("click", function(eventAnchor) {
        
        // hiermee wordt de href opgepakt van de anchor wat doorverwijst naar de modal met de unieke id
        let stekjeAnchorModal = document.querySelector(this.getAttribute('href'));
        console.log(stekjeAnchorModal)

        // zet main op overflow hidden
        let body = document.querySelector("body");
        body.classList.add("body-overflow-hidden");

        // toggle class "dark overlay on" om een background voor de modal te krijgen
        darkOverlay.classList.add("dark-background-overlay-on");

        // toggle class "modal on" om de modal te laten zien
        stekjeAnchorModal.classList.add("stekje-modal-more-info-on");

        // de overlay + modal sluiten wanneer je klikt op de dark overlay
        darkOverlay.addEventListener("click", eventOverlay => {
            darkOverlay.classList.remove('dark-background-overlay-on');
            stekjeAnchorModal.classList.remove('stekje-modal-more-info-on');
            body.classList.remove("body-overflow-hidden");
        })
        
        // de overlay + modal sluiten wanneer je klikt op ESC
        stekjeAnchor.addEventListener("keydown", eventEsc => {
            if(eventEsc.key === "Escape"){
                darkOverlay.classList.remove('dark-background-overlay-on');
                stekjeAnchorModal.classList.remove('stekje-modal-more-info-on');
                body.classList.remove("body-overflow-hidden");
            }
        })

        // stop default refresh van anchor
        eventAnchor.preventDefault();
    })
})