# State Management - useContext + useReducer

## Topics:

- useContext
- useReducers
- Actions and dispatch
- complex state logic

## Code snips:

### main-context.js

```
import { createContext } from "react";

const mainContext = createContext();

export default mainContext;

```

### MainState.js

```
import React, { useReducer } from "react";
import mainContext from "./main-context";
import { mainReducer } from "../reducers/mainReducer";
const MainState = (props) => {
  const [list, dispatch] = useReducer(mainReducer, []);
  return (
    <mainContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;

```

### mainReducer.js

```
// No Side Effects
export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "FILTER_LIST":
      let stateAfterFilter = state.filter(function (item) {
        return item.title.includes(action.title);
      });
      return [...stateAfterFilter];
    case "UPDATE_LIST":
      let updatedState = state.map((item) => {
        if (item.id === action.id) return { ...item, title: action.title };
        return item;
      });
      return [...updatedState];
    default:
      return [...state];
  }
};

```

## Resources:

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [useReducer 2](https://www.robinwieruch.de/react-usereducer-hook/)
- [Code example](https://github.com/leighhalliday/demo-infinite-scroll/blob/master/src/WithReducer.js)

## Task:

1. Building a template:

- Please use the template we wrote in class or write a new template yourself to work with useReducer and useContext and implement all the ָָ**CRUD operations** on the attached list in the "drillDB" file.
- Please build a reducer that can answer the following actions:

* "INITIAL_STATE" - will initial the state with the default list from the db.
* "ADD_FRIEND" - will add a friend to the list with a given name a given age and a random id.
* "REMOVE_FRIEND" - will remove a friend from the list by his/her id.
* "UPDATE_FRIEND" - will update a friend's name/age from the list by his/her id.

- create a simple form to insert a new friend.
- create a simple list to show the friends in the current state and to allow the user to update a friends name/age.

2. [Follow the instructions](https://codesandbox.io/s/usereducer-exercise-1-3qkuu?file=/src/App.js:189-202)
