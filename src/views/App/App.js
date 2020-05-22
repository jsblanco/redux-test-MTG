import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import Card from "../../components/Card/Card";
import { getCardsRequest, clearCardList } from "./App.actions";

const App = () => {
  const dispatch = useDispatch();
  const { cardList, loading } = useSelector((state) => state);
  const getCardList = () => dispatch(getCardsRequest());
  const clearFetchedCards = () => dispatch(clearCardList());


  
  return (
    <div className="App">
<div className="jumbotron"> 
<h1 className="display-3 mb-3">Magic the Gathering random card fetcher</h1>

      <Button variant="primary"  onClick={getCardList}>
        {" "}
        Fetch cards
      </Button>
      <Button variant="danger"  onClick={clearFetchedCards}>
        {" "}
        Clear fetched card
      </Button>
</div>
      <Row className="mx-4 my-2">
    {!!loading && <div>Fetching a random card</div>}
    {cardList && cardList.map((card) => <Card card={card} />)}
      </Row>
    </div>
  );
};

export default App;
