import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./CharacterInfo.module.css";
import Navigation from "../Navigation/Navigation";

const API_URL = "https://rickandmortyapi.com/api/character";

class CharacterInfo extends React.Component {
    state = {
        characters: [],
        origin: String,
        location: String
    };

    async componentDidMount() {
        try {
            await fetch(`${API_URL}/${this.props.match.params.id}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.setState({ characters: data });
                    this.setState({ origin: data.origin });
                    this.setState({ location: data.location });
                });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <>
                <Navigation />
                <div className={styles.characterInfo}>
                    <img
                        className={styles.imgbox}
                        src={this.state.characters.image}
                        alt={this.state.characters.name}
                    ></img>
                    <h1>{this.state.characters.name}</h1>
                    <hr></hr>
                    <div className={styles.info}>
                        Status: {this.state.characters.status}
                        <br />
                        Species: {this.state.characters.species}
                        <br />
                        Gender: {this.state.characters.gender}
                        <br />
                        Origin: {this.state.origin.name}
                        <br />
                        Location: {this.state.location.name}
                    </div>
                    <hr></hr>
                    <br />
                    <Link to='/'>
                        <Button>Go Home</Button>
                    </Link>
                    <br />
                </div>
            </>
        );
    }
}

export default CharacterInfo;
