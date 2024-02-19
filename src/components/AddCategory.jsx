import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();
  
  /* Métodos Handler */
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValueTrim = inputValue.trim();
    if (inputValueTrim.length <= 1) return;
    
    onNewCategory(inputValueTrim);
    setInputValue(''); 
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type = "text" 
        placeholder = "Buscar gifs"
        value = {inputValue}
        onChange = {onInputChange}
      />
    </form>
  )
}
