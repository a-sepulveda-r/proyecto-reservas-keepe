import React from "react";
import Button from "react-bootstrap/Button";
import {
  Imagen1,
  Imagen2,
  NavbarKeepeComponent,
  ReservaTuHora,
} from "../components";
import CalendarPretty from "../components/CalendarPretty";
import "./stylePagoReserva.css";
import fotocabecera from "../Assets/IMG/fotocabecera.png";

const PagoReservaPage = () => {
  return (
    <div>
      <div
        className="fondo"
        //ABAJO ES UN CSS INLINE
        // style={{
        //backgroundImage: 'url("https://images5.alphacoders.com/532/532559.jpg")',
        // backgroundColor: 'red',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
        // }}
      >
        {/* NAVBAR */}

        <NavbarKeepeComponent />

        <img src={fotocabecera} alt="Logo" />

        <div>
          <h2 class="tituloblanco">Cancha de Fútbol Chacabuco</h2>
        </div>

        <div className="tarjetaimagen">
          <Imagen2 className="tarjetaindividual" />
          <Imagen1 />
        </div>

        <div>
          <h2 class="tituloblanco">Elige tu fecha</h2>
        </div>

        <div className="calendario">
          <CalendarPretty value={new Date()} showDoubleView />
        </div>

        <div>
          <h2 class="tituloblanco">Elige tu turno</h2>
        </div>

        <div className="eligetuturno">
          <div class="container">
            <div class="row">
              <ReservaTuHora />
            </div>
          </div>
        </div>

        <div className="botonpagarcontenedor">
          <Button href="#" className="botonpagar">
            Pagar y Reservar
          </Button>
        </div>
      </div>

      {/* <div className=" mb-32 lex flex-col bg-pinkCustom dark:bg-blackCustom h-full w-full  text-black dark:text-white ">
      <div className="mx-10 first-letter:lg:mx-32 relative">
        <img
          className="lg:h-72 h-44 w-full rounded-2xl absolute "
          src={musicHome}
          alt="fond page d'accueil"
        />
        <div className="abosolute overflow-hidden z-30 opacity-60">
       
        </div>
      </div>
      <div className="m-5">
        <h2 className="mx-5px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Best Genres
        </h2>
        <div className="flex ">
          {bestGenres.map((genre, index) => (
          ))}
        </div>
      </div>
      <div className="mx-5">
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Favorites
        </h2>
        <FavouritesList handleCurrentId={handleCurrentId} />
      </div>
      <div className="mx-5 py-14">
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>

      
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        <div className="pb-24">
          <button
            className=" w-full flex p-2 bg-grayCustom justify-center
      opacity-90 rounded-md  text-white
      items-center flex-row align-middle mb-4"
            type="button"
            onClick={() => setShowTracks(!showTracks)}
          >
            {showTracks ? "Show less ..." : "Show all ..."}
          </button>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default PagoReservaPage;
