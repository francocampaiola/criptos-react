import styled from "@emotion/styled";

const Resultado = ({resultado}) => {
  
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

    return (
      <div>
          <p>El precio es de: <span>{PRICE}</span></p>
          <p>El precio más alto del día es de: <span>{HIGHDAY}</span></p>
          <p>El precio más bajo del día es de: <span>{LOWDAY}</span></p>
          <p>La cotización cambió un: <span>{CHANGEPCT24HOUR}%</span></p>
          <img src={IMAGEURL} />
          <p>Última actualización: <span>{LASTUPDATE}</span></p>
      </div>
  )
};

export default Resultado;
