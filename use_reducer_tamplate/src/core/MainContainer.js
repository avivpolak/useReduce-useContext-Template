import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MainState from "../contexts/mainState";
import ListFriends from "./ListFriends";
import AddFriend from "./AddFriend";
import Togglable from "./Togglable";

export default function MainContainer() {
    return (
        <div>
            <MainState>
                <NavBar />
                <SearchBar />
                <Togglable buttonLabel={"Add a friend"}>
                    <AddFriend />
                </Togglable>
                <ListFriends />
            </MainState>
        </div>
    );
}
