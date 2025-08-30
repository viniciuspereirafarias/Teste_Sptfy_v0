document.addEventListener("DOMContentLoaded", () => {

    const artistsData = [
        { name: "Gustavo Limma", image: "./imgs/artista-gustavo-limma.jpg" },
        { name: "Henrique e Juliano", image: "./imgs/artista-henrique-juliano.jpg" }, 
        { name: "Jorge e Matheus", image: "./imgs/artista-jorge-mateus.jpg" },
        { name: "Luan Santana", image: "./imgs/artista-luan-santana.jpg" },
        { name: "Ze Neto e Cristiano", image: "./imgs/artista-ze-neto.jpg" },
        { name: "Mateus e Kauan", image: "./imgs/artista-mateus-kauan.jpg" }
    ];

    const albumsData = [
        { title: "Caju", artist: "Liniker", image: "./imgs/album-caju.jpg" },
        { title: "Ceu Explica", artist: "Henrique e Junliano", image: "./imgs/album-ceu-explica.jpg" },
        { title: "Escandalo", artist: "Luísa", image: "./imgs/album-escandalo.jpg" },
        { title: "Hit Me", artist: "Billie Eilish", image: "./imgs/album-hit-me.jpg" },
        { title: "Racionais", artist:"Racionais" , image: "./imgs/album-racionais.jpg" },
        { title: "White Noise", artist:"Sleepy John" , image: "./imgs/album-white-noise.jpg" } 
    ];

    const artistgrid = document.querySelector(".main_artist_grid");
    const albumgrid = document.querySelector(".main_album_grid");

    artistsData.forEach(artist => {
        const artistCard = document.createElement("div");
        artistCard.classList.add("artist_card");
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <p>${artist.name}</p>
        `;
        artistgrid.appendChild(artistCard);
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album_card");
        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.title}">
            <h4>${album.title}</h4>
            <p>${album.artist}</p>
        `;
        albumgrid.appendChild(albumCard);
    })

})