import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import device from '../../utils/mediaUtils';
import {MainHeadingNap1, ItemContainer} from '../CommonComponents';
import NAPButton from '../NAPButton';
import kitchen from '../../assets/kitchen-ymai.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  text-align: center;
`;
const Item = styled.div`
  padding: 0 15px;
`;
const CustomItemContainer = styled(ItemContainer)`
  ${device.tablet}{
    display: none;
  }
`;
const SliderContainer = styled.div`
  display: none;
  padding: 60px;
  ${device.tablet}{
    display: block;
  }
`;
const ArrowRight = styled(ArrowForwardIcon)`
  margin-right: -25px;
  cursor: pointer;
  &.MuiSvgIcon-root{
    font-size: 40px;
    color: ${props => props.arrow};
  }
`;
const ArrowLeft = styled(ArrowBackIcon)`
  margin-left: -25px;
  cursor: pointer;
  &.MuiSvgIcon-root{
    font-size: 40px;
    color: ${props => props.arrow};
  }
`;


const defaultItem = [{
  img: kitchen,
  link: '',
  title: 'Kitchen'
},
{
  img: kitchen,
  link: '',
  title: 'Kitchen'
},
{
  img: kitchen,
  link: '',
  title: 'Kitchen'
},
{
  img: kitchen,
  link: '',
  title: 'Kitchen'
}];

//this is a workaround for a issue that react-slick currently has.... without this it will log some warnings to console 
const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
  <span {...props}>{children}</span>
);

function YMABII({items, arrowsColor}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickButtonFix><ArrowRight arrow={arrowsColor} /></SlickButtonFix>,
    prevArrow: <SlickButtonFix><ArrowLeft arrow={arrowsColor} /></SlickButtonFix>
  };
  return (
    <Container>
      <MainHeadingNap1>You may also be interested in</MainHeadingNap1>
      <CustomItemContainer>
        {items.map((item, index) => (
          <Item key={index}>
          <img src={item.img} width="100%" alt="demo" />
          <NAPButton type='link' text={item.title} marginTop={15} />
        </Item>
        ))}
      </CustomItemContainer>
      <SliderContainer>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
              <img src={item.img} width="100%" alt="demo" />
              <NAPButton type='link' text={item.title} marginTop={15} />
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  )
}

YMABII.defaultProps = {
  items: defaultItem,
  arrowsColor: '#000'
}

export default YMABII
