import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import Card from "../../components/Card/Card";
import { getCardsRequest, clearCardList } from "./App.actions";

const App = () => {
  const dispatch = useDispatch();
  const { cardList, loading, selectedCards } = useSelector((state) => state);
  const getCardList = () => {
    dispatch(getCardsRequest());
  };
  const clearFetchedCards = () => dispatch(clearCardList());

  return (
    <div className="App">
      <div className="text-secondary header py-4">
        <h1 className="display-3 mb-3">
          Magic the Gathering random card fetcher
        </h1>

        <Button variant="primary" className="m-2" onClick={getCardList}>
          {" "}
          Fetch a random card
        </Button>
        <Button variant="danger" className="m-2" onClick={clearFetchedCards}>
          {" "}
          Clear fetched cards
        </Button>
      </div>
      <div
        className="py-3" //fetched-cards"
      >
        <h4 className="d-block ">Cards fetched: {cardList.length}</h4>
        <Row className="mx-4 my-2 d-flex overflow-auto justify-content-center">
          {!!loading && <div>Fetching a random card</div>}
          {cardList &&
            cardList.map((card, index) => (
              <Card key={index} card={card} selected={false} />
            ))}
        </Row>
      </div>

      <div className="fixed-bottom selected-cards py-3">
        <h4 className="d-block ">Cards selected: {selectedCards.length}</h4>
        <Row className="w-100  mb-0 d-flex justify-content-center">
          {!!selectedCards && (
            <>
              {selectedCards.map((card, index) => (
                <Card key={index} card={card} selected={true} />
              ))}
            </>
          )}
        </Row>
      </div>
    </div>
  );
};

export default App;

/*
Para hacer un menú de búsqueda avanzado deslizante:

https://github.com/prometheusresearch-archive/react-forms/issues/26

*/
