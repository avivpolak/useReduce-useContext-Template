import React, { useContext } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";

export default function ListFriends() {
    const { friendsState, friendsDispatch } = useContext(mainContext);

    return (
        <Container>
            <ListGroup>
                {friendsState.map((friend) => (
                    <ListGroup.Item key={friend.id}>
                        {friend.name}
                        {friend.age}
                        <Button
                            onClick={() => {
                                friendsDispatch({
                                    type: "REMOVE_FRIEND",
                                    payload: { id: friend.id },
                                });
                            }}
                        >
                            Remove Friend
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}
