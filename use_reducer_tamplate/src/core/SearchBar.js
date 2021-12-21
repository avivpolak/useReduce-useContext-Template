import React, { useContext, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { db } from "../db/drillDB";

export default function SearchBar() {
    const { friendsDispatch } = useContext(mainContext);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        initialData();
    }, [filter]);

    const handleChange = ({ target: { value } }) => {
        setFilter(value);
        friendsDispatch({ type: "FILTER_FRIENDS", payload: { string: value } });
    };

    const initialData = () => {
        if (filter.length === 0)
            friendsDispatch({ type: "INITIAL_STAT", payload: db });
    };

    return (
        <Container style={{ margin: "0 auto", width: "50%" }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={filter}
                        type="text"
                        placeholder="Enter friend name"
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}
