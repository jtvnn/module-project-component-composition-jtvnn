import React from 'react';

export default function Image(props) {
    const {imgURL} = props;
    return (
        <div>
            <img src={imgURL}
            height={400}
            width={400}></img>
        </div>
    )
}