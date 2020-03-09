import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Character.module.css";

// Write a function component
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.

function Character(props) {
    return (
        <div className={styles.characterStyle}>
            <Card bg='dark' style={{ width: "18rem" }}>
                <Card.Img
                    variant='top'
                    src={props.character.image}
                    alt={props.character.name}
                    key={props.character.id}
                />
                <Card.Body>
                    <Card.Title>{props.character.name}</Card.Title>
                    <Link to={`/${props.character.id}`}>
                        <Button>Go to character</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Character;
