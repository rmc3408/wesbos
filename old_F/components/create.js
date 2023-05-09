import { gql, useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/hook/useForm';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './products';
import { useRouter } from 'next/router';

const ADD_ONE_PRODUCT_POST = gql`
  mutation ADD_ONE_PRODUCT_MUTATION($data: ProductCreateInput) {
    createProduct(data: $data) {
      id
      name
    }
  }
`;

function CreateProduct() {
  const router = useRouter();
  const [addProduct, { loading, error }] = useMutation(ADD_ONE_PRODUCT_POST, {
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });
  const [input, handleInput, resetForm, clearForm, fileInput] = useForm({
    name: 'Raph',
    price: 20,
    description: 'Lorem ipsum',
    image: {},
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addProduct({
      variables: {
        data: {
          name: input.name,
          description: input.description,
          status: 'draft',
          price: input.price,
          photo: {
            create: { image: input.image, altText: input.name },
          },
        },
      },
    });
    // console.log('response', response.data.createProduct);
    clearForm();
    router.push({
      pathname: `/product/${response.data.createProduct.id}`,
    });
  };

  if (error) return <DisplayError error={error} />;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <fieldset aria-busy={loading}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name of product"
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
          <button type="button" onClick={clearForm}>
            Clear
          </button>
          <button type="submit">Add Product</button>
        </fieldset>
      </Form>
    </div>
  );
}

export default CreateProduct;
