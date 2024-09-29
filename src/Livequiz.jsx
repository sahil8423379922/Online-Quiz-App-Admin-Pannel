import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './firebase'; // Adjust the path to your firebase.js
import { collection, addDoc } from 'firebase/firestore';

export default function Livequiz() {
  const location = useLocation();
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const { cat } = location.state || {};
  
  // States to handle question and answers
  const [question, setQuestion] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  
  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add document to Firestore
      await addDoc(collection(db, `livequiz/sets/${cat}`), {
        question:question,
        option1: opt1, 
        option2: opt2,
        option3: opt3,
        option4: opt4,
        answer: selectedAnswer,
      });
      console.log('Document successfully written!');
      
      // Optionally reset the form
      setQuestion('');
      setOpt1('');
      setOpt2('');
      setOpt3('');
      setOpt4('');
      setSelectedAnswer('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div style={{ marginRight: "15%", marginLeft: "15%" }}>
      <span style={{ fontSize: "20px" }}>Category: {cat}</span>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
          value={question}
            placeholder='Enter the Question' 
            onChange={(val) => setQuestion(val.target.value)} 
            type="text" 
            className="form-control" 
            style={{ marginTop: "10px" }} 
          />
          <input 
          value={opt1}
            placeholder='Enter the Option A' 
            onChange={(val) => setOpt1(val.target.value)} 
            type="text" 
            className="form-control" 
            style={{ marginTop: "10px" }} 
          />
          <input 
          value={opt2}
            placeholder='Enter the Option B' 
            onChange={(val) => setOpt2(val.target.value)} 
            type="text" 
            className="form-control" 
            style={{ marginTop: "10px" }} 
          />
          <input 
          value={opt3}
            placeholder='Enter the Option C' 
            onChange={(val) => setOpt3(val.target.value)} 
            type="text" 
            className="form-control" 
            style={{ marginTop: "10px" }} 
          />
          <input 
          value={opt4}
            placeholder='Enter the Option D' 
            onChange={(val) => setOpt4(val.target.value)} 
            type="text" 
            className="form-control" 
            style={{ marginTop: "10px" }} 
          />
          <div>
            <select
              className="form-control"
              value={selectedAnswer}
              onChange={handleChange}
              style={{ marginTop: "10px" }}
            >
              <option value="" disabled>Select the Answer</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
