import { useEffect, useState } from 'react';

import styled from 'styled-components';

const MainToolTip = () => {
  const [selectData, setSelectData] = useState('');
  const toolTipData = ['오늘은 뭐 먹을까?', '어디서 뭐 먹지?', '베고파아아아~'];
  useEffect(() => {
    const ranIndex = Math.floor(Math.random() * 3);
    setSelectData(toolTipData[ranIndex]);
  }, []);
  return (
    <Container>
      <Body>
        <TextBox>{selectData}</TextBox>
        <Arrow />
      </Body>
    </Container>
  );
};
const Container = styled.div`
  width: 108px;
  height: 52px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Body = styled.div`
  width: 108px;
  height: 46px;
  padding: 14px 8px;
  position: relative;
  border-radius: 999px;
  background-color: #ffffff;
`;
const Arrow = styled.div`
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid transparent;
  border-top: 6px solid #ffffff;
`;
const TextBox = styled.p`
  text-align: center;
  ${({ theme }) => theme.typographies.body12}
`;

export default MainToolTip;
