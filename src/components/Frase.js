import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    margin-top:10rem;
    border-radius:.5rem;
    background-color:#fff;
    max-width:1500px;
    max-height:200;

    /* @media (min-width:992px){
        margin-top:10rem
    } */
`;

const Titulo = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    font-size:2rem;

    &::before{
        content:open-quote;
        font-size:6rem;
        color:black;
        position: absolute;
        left:1rem;
        top:-1rem;
    }
`;

const Parrafo = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight:bold;
    text-align:right;
    color:#666;
    margin-top: 2rem;
`;




const Frase = ({ frase }) => {

    //comprobar si es un objeto esta vacio
    // if (Object.keys(frase).length === 0) return null;

    return (
        <ContenedorFrase>
            <Titulo>{frase.quote}</Titulo>
            <Parrafo>{frase.author}</Parrafo>
        </ContenedorFrase>
    );
}

export default Frase;