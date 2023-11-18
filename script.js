// script.js

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const savedSrc = localStorage.getItem('savedMusicSrc');

    if (savedSrc) {
        audioPlayer.src = savedSrc;
        audioPlayer.play();
    }

    // Evento para salvar o estado da música quando a página é fechada ou atualizada
    window.addEventListener('beforeunload', function () {
        localStorage.setItem('savedMusicSrc', audioPlayer.src);
    });

    // Adicione esta parte para lidar com a reprodução de música no clique de um botão ou link
    const playButton = document.getElementById('play-button');

    if (playButton) {
        playButton.addEventListener('click', function () {
            const newSrc = './assets/music/What Say You.mp3';  // Substitua pelo caminho da sua música
            audioPlayer.src = newSrc;
            audioPlayer.play();
        });
    }
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const savedSrc = localStorage.getItem('savedMusicSrc');

    if (savedSrc) {
        audioPlayer.src = savedSrc;
        audioPlayer.play();
    }

    // Evento para salvar o estado da música quando a página é fechada ou atualizada
    window.addEventListener('beforeunload', function () {
        localStorage.setItem('savedMusicSrc', audioPlayer.src);
    });
});

