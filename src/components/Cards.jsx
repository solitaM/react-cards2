import React from "react";
import Boton from "./Boton";
import Camisas from "../assets/Camisas.jpg";
import Camperas from "../assets/Camperas.jpg";
import Corbatas from "../assets/Corbatas.jpg";
import Jeans from "../assets/Jeans.jpg";

const Cards = () => {
  return (
    <>
      <div className="card">
        <figure>
          <img className="img" src={Camisas} alt="" />
          <figcaption>
            <h1>Camisas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              facere sequi.
            </p>
          </figcaption>
          <br />
          <Boton />
        </figure>
        <br />
        <br />
      </div>
      <div className="card">
        <figure>
          <img className="img" src={Camperas} alt="" />
          <figcaption>
            <h1>Camperas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              facere sequi.
            </p>
          </figcaption>
          <br />
          <Boton />
        </figure>
      </div>
      <div className="card">
        <figure>
          <img className="img" src={Corbatas} alt="" />
          <figcaption>
            <h1>Corbatas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              facere sequi.
            </p>
          </figcaption>
          <br />
          <Boton />
        </figure>
      </div>
      <div className="card">
        <figure>
          <img className="img" src={Jeans} alt="" />
          <figcaption>
            <h1>Jeans</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              facere sequi.
            </p>
          </figcaption>
          <br />
          <Boton />
        </figure>
      </div>
    </>
  );
};
export default Cards;
