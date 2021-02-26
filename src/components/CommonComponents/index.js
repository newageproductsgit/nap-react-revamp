import styled from 'styled-components';
import device from '../../utils/mediaUtils';

export const MainHeadingNap1 = styled.h1`
  font-size: 2.9vw;
  margin: 0;
  line-height: 1.1;
  ${device.tablet} {
    font-size: 30px;
  }
`;
export const SubHeadingNap4 = styled.h3`
  font-size: 1.6vw;
  margin: 20px 0;
  font-weight: 500;
  ${device.tablet} {
    font-size: 18px;
    margin: 30px 0 20px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: ${props => props.wrap && 'wrap'};
  margin: 80px auto;
  width: 75%;
  ${device.laptopL} {
    margin: 30px auto;
    width: 85%;
  }
  ${device.laptop} {
    width: 95%;
  }
  ${device.tablet} {
    flex-direction: column;
  };
`;