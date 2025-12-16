import Links from "../components/Links";

export default function About() {
  return (
    <div className="About page">
      <section className="about-hero">
        <h1>Apie mus</h1>
        <p className="subtitle">
          Kuriame patirtį, ne tik dizainą.
        </p>
      </section>

      <section className="about-section">
        <div className="text">
          <h2>Mūsų vizija</h2>
          <p>
            Mūsų tikslas – kurti modernius, estetiškai stiprius ir funkcionalius
            skaitmeninius sprendimus. Kiekvienas projektas mums yra istorija,
            kurią norime papasakoti per dizainą ir technologijas.
          </p>
        </div>
        <div className="image">
          <img
            src="https://placehold.co/500x600?text=Vision"
            alt="Mūsų vizija"
          />
        </div>
      </section>

      <section className="about-section reverse">
        <div className="text">
          <h2>Ką mes darome</h2>
          <p>
            Specializuojamės internetinių svetainių, vartotojo sąsajų ir
            interaktyvių patirčių kūrime. Deriname kūrybiškumą su švariu kodu,
            kad rezultatas būtų ne tik gražus, bet ir patikimas.
          </p>
        </div>
        <div className="image">
          <img
            src="https://placehold.co/500x600?text=Work"
            alt="Mūsų darbai"
          />
        </div>
      </section>

      <section className="about-values">
        <h2>Mūsų vertybės</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Kokybė</h3>
            <p>
              Dėmesys detalėms ir aukšti standartai kiekviename etape.
            </p>
          </div>
          <div className="value-card">
            <h3>Aiškumas</h3>
            <p>
              Paprasti, suprantami sprendimai be pertekliaus.
            </p>
          </div>
          <div className="value-card">
            <h3>Augimas</h3>
            <p>
              Nuolatinis tobulėjimas ir naujų technologijų paieška.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
