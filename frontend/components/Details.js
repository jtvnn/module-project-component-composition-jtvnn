import React from 'react';

export default function Details(props) {
    const { title, explanation, date } = props;

    return (
        <div>
            <h3>{title}</h3>
            <p>{explanation}</p>
            <h5>{date}</h5>
        </div>
    )
}