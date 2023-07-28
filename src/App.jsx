import { useState } from "react";
import "./App.css";
import CamelPic from "./assets/camel.jpeg";

function App() {
  return (
    <>
      <div id="container">
        <div id="div-left">
          <div id="menu">
            <button>🏠 Inicio</button>
            <button>🔍 Buscar</button>
            <button>📚 Sua Biblioteca</button>
            <button>+</button>
          </div>

          <div id="tabs">
            <p>Playlists</p>
            <p>Artists</p>
            <p>Albums</p>
            <p>Podcasts & Shows</p>
          </div>

          <div>
            <div>
              <p>🔍</p>

              <select>
                <option>Recents</option>
                <option>Recents Added</option>
                <option>Alphabetical</option>
                <option>Creator</option>
              </select>
            </div>

            <div id="items">
              <div className="item">
                <p>❤️</p>

                <div>
                  <p>Liked Songs</p>
                  <p>Playlist . 1.133 músicas</p>
                </div>
                <div>
                  <p>Best of Progressive Rock</p>
                  <p>Playlist . Niels N.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="div-right">
          <div id="float">
            <p>◀️</p>
            <p>👤</p>
          </div>
          <div>
            <p>Boa Noite</p>

            <div className="items">
              <div className="item">
                <p>❤️</p>
                <p>Musicas Curtidas</p>
              </div>
              <div className="item">
                <p>❤️</p>
                <p>Musicas Curtidas</p>
              </div>
              <div className="item">
                <p>❤️</p>
                <p>Musicas Curtidas</p>
              </div>
              <div className="item">
                <p>❤️</p>
                <p>Musicas Curtidas</p>
              </div>
              <div className="item">
                <p>❤️</p>
                <p>Musicas Curtidas</p>
              </div>
              <div className="item">
                <p>❤️</p>
                <p>Musicas Curtidas</p>
              </div>
            </div>

            <div>
              <p>Tocados recentemente</p>

              <div className="cards">
                <div className="card-item">
                  <img src={CamelPic} />
                  <p id="title">Músicas Curtidas</p>
                  <p desc="title">1.133 músicas</p>
                </div>
                <div className="card-item">
                  <img src={CamelPic} />
                  <p id="title">Prog Rock Monsters</p>
                  <p desc="title">A collection of insane progressive rock...</p>
                </div>
                <div className="card-item">
                  <img src={CamelPic} />
                  <p id="title">Prog Rock Monsters</p>
                  <p desc="title">A collection of insane progressive rock...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="player"></div>

      </div>

    </>
  );
}

export default App;
