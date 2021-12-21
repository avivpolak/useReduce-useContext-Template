import React, { useState } from "react";
export default function Togglable(props) {
    const [visible, setVisible] = useState(false);
    function toggleVisible() {
        setVisible(!visible);
    }
    return (
        <div>
            <button onClick={toggleVisible}>{props.buttonLabel}</button>
            {visible ? props.children : ""}
        </div>
    );
}
