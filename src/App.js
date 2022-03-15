import { useCallback, useMemo, useState } from 'react';
import questions from './question.json'

function App() {

  const [category, setCategory] = useState('');

   const categories = useMemo(() => {
    return questions.categories.map(category => category.name);
  }, [])

  const filteredQuestions = useMemo(() => {
    if(category) {
      const selectedQuestions = questions.categories.find(cat => cat.name === category)
      if(selectedQuestions) {
        return selectedQuestions.questions.map(q => {
          return {
          question:q.question,
          answers: q.answers.map((a, index) => {
            return {
            answer: a,
            correct: q.values[index]
          }
          })
        }
        })
      }

    }
  }, [category])

  const handleSelectCategory = useCallback(cat => setCategory(cat), [])

  return (
    <div>
      <div>
        <p>tematy</p>
    <ul>
      {categories.map(cat => <li key={cat} onClick={() => handleSelectCategory(cat)}>{cat}</li>)}
    </ul>
      </div>
      <div>
      <p>Pytania</p>
    {Boolean(category) && (<ul>
        {filteredQuestions.map(fq => {
          return (<li key={`${fq.question}`}>
            {fq.question}
            <ul>
              {fq.answers.map(anws => {
                return (
                  <li key={`${fq.answers}-${anws.answer}`}>
                    {anws.correct ? <strong>{anws.answer}</strong> : anws.answer}
                  </li>
                )
              })}
            </ul>
          </li>)
        })}
      </ul>)}
    </div>
    </div>
  );
}

export default App;
