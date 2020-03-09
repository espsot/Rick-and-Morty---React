import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import Character from "../Character/Character";
import Navigation from "../Navigation/Navigation";

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";
const FILTER_URL = "https://rickandmortyapi.com/api/character/?name=";

class CharacterList extends React.Component {
    // Initialize the State in Class Component.
    state = {
        characters: [],
        searchInput: "",
        filteredCharacters: []
    };

    // Use ASYNC/AWAIT inside lifecycle method.
    async componentDidMount() {
        try {
            const response = await fetch(API_URL).then(resp => resp.json());
            // Add the current characters to the chars array.
            let chars = [...this.state.characters];

            // Add the results from the API response.
            chars.push(...response.results);

            // ALWAYS use this.setState() in a Class Method.
            this.setState({
                characters: chars
            });
        } catch (e) {
            console.error(e);
        }
    }

    async filterSearch() {
        try {
            this.state.filteredCharacters = [];
            const filteredResponse = await fetch(
                FILTER_URL + this.state.searchInput
            ).then(resp => resp.json());
            // Add the filtered characters
            let filterChars = [...this.state.filteredCharacters];

            filterChars.push(...filteredResponse.results);

            this.setState({
                filteredCharacters: filterChars
            });
        } catch (e) {
            console.error(e);
        }
    }

    changeHandler = event => {
        this.setState({ searchInput: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.setState({ searchInput: event.target.value });
        this.filterSearch();
    };

    // Required render() method in Class Component.
    render() {
        // Create an array of JSX to render
        const filteredCharacters = this.state.filteredCharacters;
        let characters;

        if (filteredCharacters.length === 0) {
            characters = this.state.characters.map(character => {
                // This should render Character components. - Remember the key.
                return (
                    <Character character={character} key={character.id}>
                        {" "}
                    </Character>
                );
            });
        } else {
            characters = this.state.filteredCharacters.map(character => {
                // This should render Character components. - Remember the key.
                return (
                    <Character character={character} key={character.id}>
                        {" "}
                    </Character>
                );
            });
        }

        // Render MUST return valid JSX.
        return (
            <>
                <Navigation
                    submitHandler={this.submitHandler}
                    changeHandler={this.changeHandler}
                />
                <div className={styles.CharacterList}>
                    <div className={styles.container}>{characters}</div>
                </div>
            </>
        );
    }
}

export default CharacterList;
