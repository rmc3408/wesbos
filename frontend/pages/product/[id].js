import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from '../../components/ErrorMessage';

const ProductIDStyled = styled.div`
  display: flex;
  max-width: 1000px;
  justify-content: center;
  align-items: top;
  gap: 2rem;
`;

function SingleProduct({ query }) {
  const ONE_PRODUCT_QUERY = gql`
    query SINGLE($id: ID!) {
      Product(where: { id: $id }) {
        name
        description
        price
        photo {
          image {
            publicUrlTransformed
          }
          id
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(ONE_PRODUCT_QUERY, {
    variables: { id: query.id },
  });
  // console.log(loading, error, data);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <DisplayError error={error} />;
  return (
    <>
      <Head>
        <title>{data.Product.name}</title>
      </Head>
      <ProductIDStyled>
        <div style={{ position: 'relative', width: '500px', height: '300px' }}>
          <Image
            src={data.Product.photo.image.publicUrlTransformed}
            alt={data.Product.photo.id}
            layout="fill"
          />
        </div>
        <div className="details">
          <h2>Name {data.Product.name}</h2>
          <p>{data.Product.description}</p>
        </div>
      </ProductIDStyled>
    </>
  );
}

SingleProduct.propTypes = {
  query: PropTypes.objectOf(PropTypes.string.isRequired),
};
export default SingleProduct;
