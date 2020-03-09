import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default class Navigation extends React.Component {
    state = {
        searchInput: String
    };

    // submitHandler = event => {
    //     event.preventDefault();
    //     this.setState({ searchInput: event.target.value });
    // };

    // changeHandler = event => {
    //     this.setState({ searchInput: event.target.value });
    // };

    render() {
        return (
            <>
                <div className={styles.Navigation}>
                    <Navbar bg='light' expand='lg'>
                        <Link to='/'>
                            <Navbar.Brand>Rick and Morty</Navbar.Brand>
                        </Link>

                        <Form inline onSubmit={this.props.submitHandler}>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='mr-sm-3'
                                onChange={this.props.changeHandler}
                            />
                            <Button variant='outline-success' type='submit'>
                                Search
                            </Button>
                        </Form>
                    </Navbar>
                    <hr />
                </div>
            </>
        );
    }
}
