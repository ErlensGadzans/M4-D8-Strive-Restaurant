import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container, Alert } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
  {dishes.length === 0 &&(
    <Alert className="mt-1" variant="warning">This is Alert</Alert>
  )}
  </Container>
);
export default Menu;
