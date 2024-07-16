import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.image`
    max-width: 300px;

    figcaption {
        font-style: italic;
    }
`

export default function Image(props) {
    const {image, copyright, date } = props;
    return (
        <StyledImage>
            <img src={image} />
            <figcaption>
                The Photo of the Day by {copyright} on {date}
            </figcaption>
        </StyledImage>
    )
}