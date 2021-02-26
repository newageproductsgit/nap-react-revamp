import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import device from '../../utils/mediaUtils';
import BannerContent from '../BannerContent';
import slider from '../../assets/slider.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  ${device.tablet}{
    display: none;
  }
`;
const Container = styled.div`
  position: relative;
  outline: none !important;
`;
const ArrowRight = styled(ArrowForwardIcon)`
  position: absolute;
  top: 45%;
  right: 30px;
  cursor: pointer;
  &.MuiSvgIcon-root{
    color: ${props => props.arrow};
    font-size: 40px;
    ${device.tablet}{
      display: none;
    }
  }
`;
const ArrowLeft = styled(ArrowBackIcon)`
  position: absolute;
  top: 45%;
  left: 30px;
  cursor: pointer;
  z-index: 10;
  &.MuiSvgIcon-root{
    color: ${props => props.arrow};
    font-size: 40px;
    ${device.tablet}{
      display: none;
    }
  }
`;

export const imageProps = [
  {
    img: slider,
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  },
  {
    img: slider,
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  },
  {
    img: slider,
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  },
  {
    img: slider,
    heading: "Just a simple heading",
    subHeading: "Another simple sub heading",
    buttons: ["Buy Now"]
  }
]

const BannerSlider = ({dots, arrows, arrowsColor, items, activeSlide}) => {
  const settings = {
    dots: dots,
    arrows: arrows,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: arrows && <ArrowRight arrow={arrowsColor} />,
    prevArrow: arrows && <ArrowLeft arrow={arrowsColor} />
  };

  return(
    <SliderContainer>
      <Slider {...settings}>
        {items.map((item, index) => (
        <Container key={index}>
          <img src={item.img} width="100%" alt="demo" />
          {item.heading && 
          <BannerContent
            heading={item.heading}
            subHeading={item.subHeading}
            align={item.align}
            custom={item.custom}
            buttons={item.buttons}
            contentColor={item.contentColor}
            alignContent={item.alignContent}
          />}
        </Container>
        ))}
      </Slider>
    </SliderContainer>
  );
}

BannerSlider.defaultProps = {
  dots: false,
  arrows: false,
  arrowsColor: 'black',
  items: imageProps,
  handleSlide: null
}

export default BannerSlider;