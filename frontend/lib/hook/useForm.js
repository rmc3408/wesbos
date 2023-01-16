import { useState, useRef } from 'react';

export default function useForm(initial = {}) {
  const fileInput = useRef();
  const [input, setInput] = useState(initial);

  function handleInput(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseFloat(value);
    }
    if (type === 'file') {
      const [file] = fileInput.current.files;
      value = file;
    }
    setInput({
      ...input,
      [name]: value,
    });
  }

  function resetForm() {
    setInput(initial);
  }

  function clearForm() {
    const arrValues = Object.entries(input);
    arrValues.map((item) => (item[1] = ''));
    const clearedInput = Object.fromEntries(arrValues);
    setInput(clearedInput);
  }
  return [input, handleInput, resetForm, clearForm, fileInput];
}
