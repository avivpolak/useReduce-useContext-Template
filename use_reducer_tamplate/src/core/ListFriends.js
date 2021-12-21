import React, { useContext } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";

export default function ListFriends() {
    const { friendsState, friendsDispatch } = useContext(mainContext);
    function handleSort({ target: { name } }) {
        switch (name) {
            case "sortByAge":
                friendsDispatch({
                    type: "SORT_BY_AGE",
                });
                break;
            case "sortByName":
                friendsDispatch({
                    type: "SORT_BY_NAME",
                });
                break;

            default:
                break;
        }
    }
    return (
        <Container>
            <Button onClick={handleSort} name="sortByAge">
                sort by age
            </Button>
            <Button onClick={handleSort} name="sortByName">
                sort by Name
            </Button>
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
