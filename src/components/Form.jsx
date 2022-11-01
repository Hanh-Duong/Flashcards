import { useState } from 'react';
import { languageList } from './languageList';
import {Changecards} from './Changecards';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  
  
  
  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  
  return (
    <>
      <h5>-------</h5>
      <p>
      Write the verb harmonies with the pronoun
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    const [index, setIndex] = useState(0);
    let data = languageList.props[index];
    function handleClick() {
    
      if(index + 1 > data.pronoun.length-1){
          setIndex (0)
      }else{
          setIndex (index + 1)
      }
    }
    setTimeout(() => {
      let shouldError = answer.data.verb[index];
      if (shouldError) {
        resolve();
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
    }, 1500);
  });
}