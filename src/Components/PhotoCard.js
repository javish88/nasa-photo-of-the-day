import React from 'react'
import styled from 'styled-components'

const PhotoCardSpace = styled.div`
background: #99f3eb;
color: black;
border-radius: 50%;
margin: 10px;
transition: transform 0.2s ease-in;
width: 100%;
display: flex;
flex-direction: column;

&:hover {
  transform: translate(-5px) scale(1.065);
}
`;




const PhotoCard = (props) => {
    return (
        <PhotoCardSpace>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.date}
            </h2>
            <img src = {props.url} alt ="Nasa Pictures"/>
           
                <h3>
                    Details
                </h3>
                <p>
                    {props.explanation}
                </p>
           
                </PhotoCardSpace>
    );
};

export default PhotoCard;