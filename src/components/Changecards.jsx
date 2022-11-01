import { useState } from 'react';
import { languageList } from './languageList';
import Form from './Form';

export default function ChangeCards(props) {
  const [index, setIndex] = useState(0);
  let data = languageList[props.index];
  function handleClick() {
    
    if(index + 1 > data.pronoun.length-1){
        setIndex (0)
    }else{
        setIndex (index + 1)
    }
  }
 
/*const pronoun = ["Minä", "Sinä", "Hän", "Me", "Te", "He"]
const verb = ["Menen", "Menet", "Menee", "Menemme", "Menette", "Menevät"]
const translate = ["I go", "You go", "She/He goes", "We go", "You go", "They go" ]
const color = ["lightgreen", "lightpink", "lightblue", "lightgreen", "lightblue", "lightpink"]*/

  return (
    <div className = "cards"> 
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
      <img src={data.url[index]} alt = "illustration" style = {{width:"100px", height:"100px"}}/>
      <h5>{data.translate[index]}</h5>
    
    </div>);
}
/*const frontCard = ["Minä", "Sinä", "Hän", "Me", "Te", "He"]
const backCard = ["menen", "menet", "menee", "menemme", "menette", "menevät"]
  return (
    <>
      <button onClick={handleClick}>
      Muuttaa muotoon {change ? frontCard.forEach(element => console.log(element)) : backCard.forEach(element => console.log(element))}
      </button>
      <h1 className = "cards" style={{
        color: change ? 'white' : 'lightyellow'
      }}>
        {change ? backCard.forEach(element => console.log(element)): frontCard.forEach(element => console.log(element))}
      </h1>
    </>
  );
}*/

