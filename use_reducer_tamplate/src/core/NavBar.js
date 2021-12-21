import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import mainContext from "../contexts/main-context";
export default function NavBar() {
    const { friendsState } = useContext(mainContext);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>React-useContext-useReducer</Navbar.Brand>
                <Navbar.Brand>Shows {friendsState.length} friends</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
