import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MainState from "../contexts/mainState";
import ListFriends from "./ListFriends";
import AddFriend from "./AddFriend";
export default function MainContainer() {
    return (
        <div>
            <MainState>
                <NavBar />
                <Togglable>
                    <AddFriend />
                </Togglable>

                <SearchBar />
                <ListFriends />
            </MainState>
        </div>
    );
}
