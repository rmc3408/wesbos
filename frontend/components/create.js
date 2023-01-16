import { gql, useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/hook/useForm';


const ADD_ONE_PRODUCT_POST = gql`
  mutation Mutation($data: ProductCreateInput) {
    createProduct(data: $data) {
      id
      name
    }
  }
`;

function CreateProduct() {
  const [addProduct, { data, error }] = useMutation(ADD_ONE_PRODUCT_POST);
  const [input, handleInput, resetForm, clearForm, fileInput] = useForm({
    name: 'Raph',
    price: 20,
    description: 'Lorem ipsum',
    image: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ variables: { data: input } });
    console.log(data, error);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <fieldset>
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
