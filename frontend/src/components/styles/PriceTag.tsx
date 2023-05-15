import styled from 'styled-components';

const PriceTag = styled.span`
  background: var(--red);
  transform: rotate(10deg);
  color: white;
  border-radius: 19px;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 2rem;
  display: inline-block;
  position: absolute;
  top: -6px;
  right: -18px;
`;

export default PriceTag;
