import { useState } from 'react';
import { languageList } from './languageList';

export default function ChangeCards(props) {
  const [index, setIndex] = useState(0);
  let data = languageList[props.index];
  function handleClick() {

    if (index + 1 > data.pronoun.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="cards">
      <button onClick={handleClick}>
        Next
      </button><br></br>
      {data.pronoun[index]}
      <h1 style={{
        color: data.color[index],

      }}>
        {data.verb[index]}<br></br>
        {data.object[index]}
      </h1>
      <img src={data.url[index]} alt="illustration" style={{ width: "100px", height: "100px" }} />
      <h5>{data.translate[index]}</h5>
    </div>);
}


