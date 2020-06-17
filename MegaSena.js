import React, { useState } from 'react'


const MegaSena = (props) => {
  const [qtd, setQtd] = useState(3);
  const [numeros, setNumeros] = useState(Array(qtd).fill());
  const estilos = {
    titulo: {
      color: '#01579b',
      width: '100%',
      textAlign: 'center',
    },
    listaNum: {
      display: 'flex',
      flexWrap: 'wrap',
      border: '1px dotted blue',
      maxWidth: '500px',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
    },
    numSorteados: {
      margin: '5px auto',
      color: 'blue'
    },
    input: {
      marginTop: '5px',
      width: '20%'
    }
  }
  
  const sortear = () => {
    const tamArray = Array(qtd).fill();
    const numArr = [];
    tamArray.map(() => {
      let num = Math.round(Math.random() * (60 - 1) + 1);
      while (numArr.includes(num)) {
        num = Math.round(Math.random() * (60-1) + 1);
      }
      numArr.push(num);
    });
    //return numArr.sort((n1,n2)=>n1-n2);
    setNumeros(numArr.sort((n1, n2)=>n1-n2))
  };
  const listaNumeros = (foiSorteado) => {
    let bloco = [];
    for (let index = 0; index < 60; index++) {
      let corFundo = '#01579b';
      // eslint-disable-next-line no-unused-expressions
      foiSorteado.includes(index+1) ? corFundo = 'red' : null;
      bloco.push(
        <span style={{
          borderRadius: '50%',
          color: '#fff',
          backgroundColor: corFundo,
          margin: '5px',
          minWidth: '25px',
          minHeight: '25px',
          textAlign: 'center',
          alignItems: 'center',
          alignContent: 'center',
          padding: '4px'
        }}>
          {index+1}
        </span>
      );
    }
    return bloco;
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      margin: 'auto',
      alignItems: 'center',
    }}>
      <h1 style={estilos.titulo}>Mega Sena</h1>
      <label htmlFor="qtd">Quantos números deseja sortear?</label>
      <input id="qtd" value={qtd} onChange={e => setQtd(+e.target.value)} style={estilos.input}/>
      <button style={estilos.input} onClick={sortear} >Sortear</button>
      Numeros sorteados:
      <div style={estilos.numSorteados}>
        {numeros ? numeros.join(', ') : <span>nenhum numero sorteado</span>}
      </div>
      <div style={estilos.listaNum}>
        {listaNumeros(numeros)}
      </div>
    </div>
  );
}

export default MegaSena;