'use client'

import { gql, useMutation } from '@apollo/client'
import Form from './styles/Form';
import useForm from '@components/hook/useForm'
import DisplayError from './errorMessage'
import { ALL_PRODUCTS_QUERY } from '@graphql/query'
import { FormEvent } from 'react'

//import { useRouter } from 'next/router';

const ADD_ONE_PRODUCT_POST = gql`
  mutation ADD_ONE_PRODUCT_MUTATION($data: ProductCreateInput) {
    createProduct(data: $data) {
      id
      name
    }
  }
`;

function CreateProduct() {
  // const router = useRouter();
  // const [addProduct, { loading, error }] = useMutation(ADD_ONE_PRODUCT_POST, {
  //   refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  // });
  const { input, handleInput, resetForm, fileInput } = useForm({
    name: '',
    price: 0,
    description: '',
    image: undefined
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const response = await addProduct({
    //   variables: {
    //     data: {
    //       name: input.name,
    //       description: input.description,
    //       status: 'draft',
    //       price: input.price,
    //       photo: {
    //         create: { image: input.image, altText: input.name },
    //       },
    //     },
    //   },
    // });
    console.log('response', input);
    resetForm()
    // router.push({
    //   pathname: `/product/${response.data.createProduct.id}`,
    // });
  };

  // if (error) return <DisplayError error={error} />;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <fieldset aria-busy >
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder='First Name here'
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
            <input
              type="file"
              name="image"
              ref={fileInput}
              onChange={handleInput}
            />
          </label>

          <button type="button" onClick={resetForm}>
            Reset
          </button>
          <button type="submit">Add Product</button>
        </fieldset>
      </Form>
    </div>
  );
}

export default CreateProduct;
