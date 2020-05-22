import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import Card from "../../components/Card/Card";
import { getCardsRequest } from "./App.actions";

const App = () => {
  const dispatch = useDispatch();
  const { cardList, loading } = useSelector((state) => state);
  const getCardList = () => dispatch(getCardsRequest());


  if (!!loading) return <div>Fetching card list</div>;

  return (
    <div className="App">
      <Row className="App-Row">
        {cardList && cardList.map((card) => <Card card={card} />)}
      </Row>
      <Button variant="primary" onClick={getCardList}>
        {" "}
        Fetch cards
      </Button>
    </div>
  );
};

export default App;
