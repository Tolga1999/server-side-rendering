let stekjeAnchors = document.querySelectorAll("#stekje-meer-info-anchor");

stekjeAnchors.forEach(stekjeAnchor =>{
    stekjeAnchor.addEventListener('click', stekjeAnchor => {
        // stop default refresh van anchor
        stekjeAnchor.preventDefault();
        
        console.log(stekjeAnchor);
    })
})
