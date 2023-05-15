import { useState, useRef } from 'react'

interface IFile extends Blob {
  size: number
  name: string
  type: string
  lastModified: number
}

interface IInput {
  name: string
  description: string
  price: number
  image: IFile | undefined
}

export default function useForm(initial: IInput) {
  const fileInput = useRef<HTMLInputElement>(null)
  const [input, setInput] = useState<IInput>(initial)

  function handleInput(e: any) {
    let { value, name, type } = e.target

    if (type === 'number') {
      value = parseFloat(value)
    }
    if (type === 'file') {
      const fileCurrent = fileInput.current
      if (!fileCurrent?.files) return
      //const file = fileCurrent?.files[0]
      const file = URL.createObjectURL(fileCurrent?.files[0]);
      value = file
    }
    setInput({
      ...input,
      [name]: value,
    })
  }

  function resetForm() {
    const arrValues = Object.entries(input)
    arrValues.map((item) => (item[1] = ''))
    const clearedInput = Object.fromEntries(arrValues)
    if (!fileInput.current) return
    fileInput.current.value = ''
    setInput(clearedInput as IInput)
  }

  return { input, handleInput, resetForm, fileInput }
}
