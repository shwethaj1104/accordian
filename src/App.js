import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  // const [questions,setQuestions] = useState(data)

  return (
      <main>
        <div className='container'>
          <div>
          <h3>Questions and Answers about Login</h3>
          <img src='QnA.jpg'></img>
          </div>
          <section className='info'>
              {data.map((question) =>{
                return <SingleQuestion key={question.id} {...question}/>
              })}
          </section>
        </div>
      </main>
  );
}

export default App;
