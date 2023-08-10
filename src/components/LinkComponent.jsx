import { styled } from 'styled-components';

import Next from '../assets/images/Next.jsx';

const LinkComponent = ({ children, color }) => {
  return (
    <LinkContainer color={color}>
      <LinkText>{children}</LinkText>
      <Next color={color} />
    </LinkContainer>
  );
};

export default LinkComponent;

const LinkContainer = styled.div`
  display: flex;
  align-items: end;
  color: ${(props) => props.color};
`;

const LinkText = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 2px;
`;
