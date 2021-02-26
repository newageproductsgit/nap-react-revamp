import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import sink from '../../assets/sink.jpg';
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  overflow-x: hidden;
`;
const Container = styled.div`
  position: relative;
  margin: 20px 0;
  outline: none !important;
`;
// const Caption = styled.h3`
//   position: absolute;
//   width: 90%;
//   ${props => props.placement === 'top' ? 'top : 0' : 'bottom: 0'};
//   left: 15px;
//   color: #EFEFEF;
//   font-size: 1.8vw;
//   margin: 30px 10px;
//   font-weight: 500;
//   text-align: ${props => props.align};
// `;

export const imageProps = [
  {
    id: 1,
    img: sink,
    caption: 'Kitchen Sinks'
  },
  {
    id: 2,
    img: sink,
    caption: 'Kitchen Sinks'
  },
  {
    id: 3,
    img: sink,
    caption: 'Kitchen Sinks'
  },
  {
    id: 4,
    img: sink,
    caption: 'Kitchen Sinks'
  }
]

const RowItemSlider = ({items, align, placement}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  return(
    <SliderContainer>
      <Slider {...settings}>
        {items?.map((item, index) => (
          <Container key={index}>
            <img src={item.img} width="95%" alt="demo" />
            {/* {item.caption && 
          <Caption align={align} placement={placement}>{item.caption}</Caption>} */}
          </Container>
        ))}
      </Slider>
    </SliderContainer>
  
  )
}
RowItemSlider.defaultProps = {
  items: imageProps,
  align: 'left',
  placement: 'top'
}
export default RowItemSlider;