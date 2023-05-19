import React, { useState } from 'react'


function Age() {
    const [name,setName]=useState('');
const [age,setAge]=useState(0);
const [isStudent,setIsStudent] = useState(false);

function handleAgechange(event){
    setAge(parseInt(event.target.value));
}
function HandleNameChange(event){
    setName(event.target.value);
}
function handleStudentChange(event){
    setIsStudent(event.target.checked)
}

function HandleSubmit(e){
    e.preventDefault();
    console.log({name,age,isStudent})
}

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label htmlFor='name'>Names:</label>
        <input type='text' value={name} placeholder='enter your names' onChange={HandleNameChange}/>
        <label htmlFor='age'>Age:</label>
          <input type='number' onChange={handleAgechange} value={age} />
          <label htmlFor='isstudent'>Are u astudent?</label>
          <input type='checkbox' checked={isStudent} onChange={handleStudentChange} />
          <button type='submit'>submit</button>
      </form>
      
    </div>
  )
}

export default Age
