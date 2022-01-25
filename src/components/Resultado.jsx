import React from 'react';
import styled from "@emotion/styled";

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: start;
    gap: 3rem;
`;

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;
    margin-top: 80px;
`

const Resultado = ({resultado}) => {
  
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

    return (
      <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto"
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del día es de: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del día es de: <span>{LOWDAY}</span></Texto>
                <Texto>La cotización cambió un: <span>{CHANGEPCT24HOUR}%</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
           </div>
      </Contenedor>
  );
};

export default Resultado;