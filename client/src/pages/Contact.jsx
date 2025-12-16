import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Prašome susisiekite!</h1>
      <p>Jeigu turite klausimų ar norėtumėte paslaugų, prašome užpildyti žemiau pateiktą formą, arba susisiekit parašius <code>email</code></p>
      <form>
        <div className="name-info">
          <div className="input-group">
            <label for="name">Vardas</label>
            <input type="text" id="name" name="name" required></input>
          </div>

          <div className="input-group">
            <label for="lastname">Pavardė</label>
            <input type="text" id="lastname" name="lastname" required></input>
          </div>
        </div>
        <div className="input-group">
          <label for="email">El. paštas</label>
          <input type="email" id="email" name="email" required></input>
        </div>

        <div className="input-group">
          <label>Tema</label>
          <input type="text" id="subject" name="subject" required></input>
        </div>

        <div className="input-group">
          <label for="message">Žinutė</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Išsiųsti</button>
      </form>
    </div>
  );
}
