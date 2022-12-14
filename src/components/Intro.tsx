import React from "react";

function Intro(props: {person: string}): JSX.Element {
    return <h1>Rate My Translation Skills! {props.person}</h1>;
}

export default Intro;