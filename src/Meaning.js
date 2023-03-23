import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (item, index) {
        return (
          <div key={index}>
            <div className="definition"> {item.definition} </div>
            <br />
            <div className="example">
              {" "}
              <em>{item.example}</em>
            </div>
            <br />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
