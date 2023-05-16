'use client'

import { useMutation } from '@apollo/client'
import Form from './styles/Form'
import useForm from '@components/hook/useForm'
import DisplayError from './errorMessage'
import { FormEvent } from 'react'
import { ADD_ONE_PRODUCT_POST } from '@graphql/mutation'
import { ALL_PRODUCTS_QUERY } from '@graphql/query'
import { useRouter } from 'next/navigation';


function CreateProduct() {
  const router = useRouter()
  const { input, handleInput, resetForm, fileInput } = useForm({
    name: '',
    price: 0,
    description: '',
    image: undefined,
  })
  const [addProduct, { loading, error, data }] = useMutation(ADD_ONE_PRODUCT_POST)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await addProduct({ variables: input, refetchQueries: [{ query: ALL_PRODUCTS_QUERY }] })
    resetForm()
    router.push('/products/' + data.createProduct.id)
  }

  if (error) return <DisplayError error={error} />;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <fieldset aria-busy={loading} disabled={loading}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First Name here"
              value={input.name}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="product price"
              value={input.price}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="product description"
              value={input.description}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="image">
            Upload Image
            <input type="file" name="image" ref={fileInput} onChange={handleInput} />
          </label>

          <button type="button" onClick={resetForm}>
            Reset
          </button>
          <button type="submit">Add Product</button>
        </fieldset>
      </Form>
    </div>
  )
}

export default CreateProduct
