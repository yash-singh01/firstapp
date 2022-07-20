import React from 'react'
import { useRef } from 'react'
export default function Formreff() {
    const input = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('hi');
        input.current.focus();
        console.log(input.current.value);

    }
  return (
    <form>
      <lebel onSubmit = {handleSubmit}>
          Name:
      </lebel>
      <input type="text" ref={input}/>
      <input type="submit" value="submit"/>
    </form>
  )
}
