import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFetchedCard } from "./../../views/App/App.actions";
import "./Card.css";

export default function Card({ card }) {
  const dispatch = useDispatch();
  const removeCardFromResults = () => dispatch(removeFetchedCard(card));

  return (
    <span className="d-inline mx-2 mtg-card">
      <FontAwesomeIcon
        icon={faTimesCircle}
        size={"2x"}
        className="text-danger close-button"
        onClick={removeCardFromResults}
      />
      {!card.image_uris.normal && (
        <>
          <p className="text-light d-inline card-name">{card.name}</p>
          <p className="oracle">{card.oracle_text}</p>
        </>
      )}
      <img
        src={
          !!card.image_uris.normal ? card.image_uris.normal : "./cardBack.jpg"
        }
        alt={card.name}
      />
    </span>
  );
}
