// Evento para reproducir

var position_track = 0;
var tracks = [];

function agregarEventoClickLiAlbum(albumList) {
  albumList.forEach((album) => {
    var contenedorAlbum = document.getElementById(album);
    var lista_tracks = contenedorAlbum.querySelector("ol");

    // Agregar un event listener al elemento <ol> para escuchar los clics en los elementos <li>
    lista_tracks.addEventListener("click", function (event) {
      var track = event.target.textContent;

      // Actualizamos la lista de lista_tracks y posicion de tracks
      var listaTracks = lista_tracks.querySelectorAll("li");
      tracks = [];
      listaTracks.forEach((item, index) => {
        tracks.push(item.textContent);
        if (item.textContent === track) {
          position_track = index;
        }
      });

      // Detenemos todas las reproducciones para no tener corriendo dos audios simultaneos.
      var contenedorMusica = document.getElementById("musica");
      var audios = contenedorMusica.querySelectorAll("audio");
      audios.forEach((audio) => {
        audio.pause();
        audio.src = "";
        audio.load();
      });

      // Limpiamos/Desvisibilizamos todos los track-played
      var trackPlayeds = contenedorMusica.querySelectorAll(".track-played");
      trackPlayeds.forEach((trackPlayed) => {
        trackPlayed.style.display = "none";
      });

      // Reproducimos el track
      reproducirTrack(album, track);
    });
  });
}

function reproducirTrack(album, track) {
  // Obtenemos el elemento audio
  var contenedorAlbum = document.getElementById(album);
  var audio = contenedorAlbum.querySelector("audio");

  // Actualizamos texto de track-played
  var track_text = contenedorAlbum.querySelector("#txt-music");
  track_text.innerHTML = track;
  // Hacemos visible el track-played
  var track_reproducido = contenedorAlbum.querySelector(".track-played");
  track_reproducido.style.display = "flex";

  // Reproducimos el track
  audio.src = "./assets/audios/" + album + "/" + track + ".mp3";
  audio.play();

  // Cuando finalice el track, llama a nextTrack() para ejecutar el siguiente track
  audio.onended = function () {
    nextTrack(album, audio);
  };
}

const nextTrack = (album, audio) => {
  // Incrementamos el position_track
  position_track = position_track + 1;

  // Si llegamos al final de la lista de track. Limpiamos todo. Si no reproducimos el siguiente track.
  if (position_track >= tracks.length) {
    // Limpiamos la lista de tracks y position
    position_track = 0;
    tracks = [];

    // Limpiamos/Desvisibilizamos el track-played
    var contenedorAlbum = document.getElementById(album);
    var track_reproducido = contenedorAlbum.querySelector(".track-played");
    track_reproducido.style.display = "none";

    // Limpiamos el reproductor
    audio.src = "";
    audio.load();
  } else {
    reproducirTrack(album, tracks[position_track]);
  }
};

// Evento para modal

function agregarEventoClickImgAlbum(data) {
  data.forEach((album) => {
    var contenedorAlbum = document.getElementById(album.name);
    var element_img = contenedorAlbum.querySelector("img");

    // Agregar un event listener al elemento <img>
    element_img.addEventListener("click", function (event) {
      document.getElementById("modal-name").innerHTML = album.name;
      var elementImg = document.getElementById("modal-image");
      elementImg.src = "./assets/images/musica/" + album.image;
      elementImg.alt = album.image;
      document.getElementById("modal-type").innerHTML = album.type;
      document.getElementById("modal-year").innerHTML = album.year;
      if (album.authors == "Canserbero") {
        document.getElementById("subtitle-modal-authors").innerHTML = "Autor : ";
      } else {
        document.getElementById("subtitle-modal-authors").innerHTML = "Autores : ";
      }
      document.getElementById("modal-authors").innerHTML = album.authors;
      document.getElementById("modal-description").innerHTML =
        album.description;
      document.getElementById("modal-download").href = album.download;
    });
  });
}
