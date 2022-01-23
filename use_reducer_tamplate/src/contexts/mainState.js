import React, { useReducer } from "react";
import mainContext from "./main-context";
import { wordReducer } from "../reducers/wordReducer";
import { db } from "../db/drillDB";
const MainState = (props) => {
    const [wordsState, wordsDispatch] = useReducer(wordReducer, [...db]);

    return (
        <mainContext.Provider
            value={{
                wordsState,
                wordsDispatch,
            }}
        >
            {props.children}
        </mainContext.Provider>
    );
};

export default MainState;
