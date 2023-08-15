import { styled } from 'styled-components';

import Next from '../assets/images/Next';

const LinkComponent = ({ children, color, func }) => {
  return (
    <LinkContainer color={color} onClick={func}>
      <LinkText>{children}</LinkText>
      <Next color={color} />
    </LinkContainer>
  );
};

export default LinkComponent;

const LinkContainer = styled.button`
  display: flex;
  align-items: end;
  color: ${(props) => props.color};
`;

const LinkText = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 2px;
`;
