import { Link } from "react-router-dom";

export default function Hem() {
  return (
    <section className="grid-container">
      <aside className="homeAside">
        <div className="homeAsideContent">
          <h3 className="aside-h3">Rolig fakta om mig</h3>
          <ul>
            <li className="fun-fact">☕ Antal koppar kaffe per dag: 0</li>
            <li className="fun-fact">🐶 Stolt ägare av 1 hund</li>
            <li className="fun-fact">
              📚 Läser just nu: 'Omgiven av idioter' av Thomas Eriksson
            </li>
          </ul>
        </div>
      </aside>
      {/* Main content */}
      <main className="homeMain">
        <div className="homeMainContent">
          <h1 id="mainHeading">👋 Hej och välkommen till min hemsida!</h1>
          <p className="mainText">
            👉 Jag heter Parman Gitijah och studerar till fullstackutvecklare på Chas Academy. Med en bakgrund inom pedagogik, administration och IT har jag utvecklat en bred kompetens inom både struktur och problemlösning.
            <br /><br />
            💻 Jag har erfarenhet av HTML, CSS, JavaScript, PHP, MySQL, C# och grundläggande Python, samt en god förståelse för systemutveckling.
            <br /><br />
            🏀 På fritiden är jag aktiv inom basket och musik, och jag trivs med att arbeta både självständigt och i team.
            <br /><br />
            ➡️ Vill du veta mer om mina erfarenheter? Klicka på{" "}
            <strong>
              <Link className="inlineLink" to="/WorkExperience">
                Erfarenheter
              </Link>
            </strong>
            {" "}längst upp!
          </p>
        </div>
      </main>
    </section>
  );
}
