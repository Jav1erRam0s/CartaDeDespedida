// MÚSICA

rederizarCards();

async function rederizarCards() {
  let response = await fetch("../data/data.json");
  let data = await response.json();

  await data.forEach((album) => {
    var contenedor = document.getElementById(album.name);

    var playlist = "";
    album.tracks.forEach((track) => {
      playlist += `<li class="list-group-item text-truncate">${track}</li>`;
    });

    contenedor.innerHTML = `
      <div class="card-musica">
        <div class="card-nombre">${album.name}</div>
        <div class="card-image">
          <img class="w-100" src="./assets/images/musica/${album.image}" alt="${album.image}"  data-bs-toggle="modal" data-bs-target="#modalAlbum">
          <div class="track-played">
            <div class="alt-marquee">
              <span id="texto-mp3">
                <div class="simbol-music">♪</div>
                <div id="txt-music"></div>
                <div class="simbol-music">♪</div>
              </span>
            </div>
          </div>
        </div>
        <div class="card-tracks">
          <ol class="list-group list-group-numbered rounded-0">
            ${playlist}
          </ol>
        </div>
        <audio class="card-reproductor" src="" controls>
        </audio>
      </div>
    `;
  });

  // Obtengo la lista de los nombres de los albumes
  var albumList = data.map((item) => item.name);

  // Llamo a la funcion (en actions.js) que agrega el evento click sobre las li
  agregarEventoClickLiAlbum(albumList);

  // Llamo a la funcion (en actions.js) que agrega el evento click sobre las img
  agregarEventoClickImgAlbum(data);
}

// FOOTER

var today = new Date();
document.getElementById("anio-footer").innerHTML = today.getFullYear();
