import React from "react";
import BusinessPeople from "./../../assets/images/business-people.jpg";
import "./Solutions.scss";

export default function Solutions() {
  return (
    <main className="solutions">
      <section className="solutions__description section row">
        <div>
          <h2 className="solutions__description--heading">
            Mauris id bibendum est. Proin dapibus sollicitudin iaculis, Maecenas
            condimentum maximus laoreet.
          </h2>
          <p className="solutions__description--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. repellat
            was a nice culpa long reprehenderit incidunt itaque.doloribus culpa
            reprehenderit suscipit ratione saepe esse quas pariatur sunt
            architecto, facilis suscipit ratione saepe esse quas pariatur sunt
            architecto, facilis earum amet similique modi mollitia iure ipsum
            pariatur sunt voluptas error, eum omnis nesciunt, rerum officials.
          </p>
        </div>

        <div className="solutions__image">
          <img src={BusinessPeople} alt="Map-Image-With-People" />
        </div>
      </section>
    </main>
  );
}
