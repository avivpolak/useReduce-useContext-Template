import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { db } from "../db/drillDB";
import { nanoid } from "nanoid";

export default function AddFriend() {
    const { friendsDispatch } = useContext(mainContext);
    const [name, setName] = useState("");
    const [age, setAge] = useState();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case "name":
                setName(value);
                break;
            case "age":
                setAge(value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = () => {
        friendsDispatch({
            type: "ADD_FRIEND",
            payload: { name, age, id: nanoid() },
        });
    };

    return (
        <Container style={{ margin: "0 auto", width: "50%" }}>
            <h1>Add a friend</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        placeholder="Enter friend name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={age}
                        type="text"
                        name="age"
                        placeholder="Enter friend age"
                    />
                </Form.Group>
                <Button onClick={handleSubmit}>Add</Button>
            </Form>
        </Container>
    );
}
