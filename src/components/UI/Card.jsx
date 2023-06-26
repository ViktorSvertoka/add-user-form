import { Wrapper } from './Card.styled';

const Card = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Card;
