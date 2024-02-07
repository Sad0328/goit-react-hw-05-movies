import { ThreeCircles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ThreeCircles
        height="50"
        width="50"
        color="#2014C9"
        ariaLabel="three-circles-loading"
      />
    </Container>
  );
};

export default Loader;
