import React from "react";
import uniqueId from "uniqueid";

const Pokes = ({pokeList}) => {
  console.log(pokeList);

  return (
    <div className="poke-container">
      {pokeList.map(el => {
        return (
          <div className="card" key={uniqueId()}>
            <img src={el.url} alt="avatar" />
            <p className="name">{el.name}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Pokes;