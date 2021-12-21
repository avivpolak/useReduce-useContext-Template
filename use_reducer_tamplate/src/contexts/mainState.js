import React, { useReducer } from "react";
import mainContext from "./main-context";
import { friendReducer } from "../reducers/friendReducer";
import { db } from "../db/drillDB";
const MainState = (props) => {
    const [friendsState, friendsDispatch] = useReducer(friendReducer, [...db]);

    return (
        <mainContext.Provider
            value={{
                friendsState,
                friendsDispatch,
            }}
        >
            {props.children}
        </mainContext.Provider>
    );
};

export default MainState;
