import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import device from '../../utils/mediaUtils';
import {MainHeadingNap1, SubHeadingNap4, ItemContainer} from '../CommonComponents';
import hb from '../../assets/hb-door.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.section`
  text-align: center;
`;
const CustomItemContainer = styled(ItemContainer)`
  ${device.tablet}{
    display: none;
  }
`;
const ProductItem = styled.div`
  position: relative;
  padding: 15px;
  flex: 0 1 29%;
`;
const ProductDetails = styled.div`
  margin: 30px 0;
`;
const Price = styled.h6`
  margin: 0;
  font-size: 2vw;
  color: #0072bc;
  ${device.tablet}{
    font-size: 32px;
  }
`;
const Title = styled.h6`
  margin: 10px 0 30px;
  font-size: 1.2vw;
  ${device.tablet}{
    font-size: 14px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
// const SeeMoreProducts = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   height: ${props => props.height}px;
//   width: ${props => props.width}px;
//   margin: 15px;
//   background: #f9f9fa;
// `;
// const Text = styled.h2`
//   margin: 0;
//   font-size: 2vw;
// `;
const SliderContainer = styled.div`
  display: none;
  overflow-x: hidden;
  ${device.tablet}{
    display: block;
  }
`;
const SlideItem = styled.div`
  padding: 20px;
  // border: 1px solid black;
`;
const items = [{
  id: 1,
  img: hb,
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 2,
  img: hb,
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 3,
  img: hb,
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 4,
  img: hb,
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 5,
  img: hb,
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
},{
  id: 6,
  img: hb,
  price: '$299.99',
  title: "Home Bar 2-Door Cabinet - 21",
  link: ''
}];

function PIPSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  };

  return (
    <Container>
      <MainHeadingNap1>Shop Home Bar</MainHeadingNap1>
      <SubHeadingNap4>Shop sets or individual cabinets to make your <br />own unique custom configuration.</SubHeadingNap4>
      <CustomItemContainer wrap='true'>
        {items.map(item => (
        <ProductItem key={item.id}>
          <img src={item.img} width="100%" alt="nap-demo" />
          <ProductDetails>
            <Price>{item.price}</Price>
            <Title>{item.title}</Title>
            <ButtonContainer>
              <button className="napBtn ff-psb">BUY NOW</button>
            </ButtonContainer>
          </ProductDetails>
        </ProductItem>))}
        {/* <SeeMoreProducts width={width} height={height}>
          <Text>See More Products</Text>
          <ButtonContainer>
            <button className="napBtn napBtn-light-blue nap-fontsize7 ff-psb">Shop All Home Bar</button>
          </ButtonContainer>
        </SeeMoreProducts> */}
      </CustomItemContainer>
      <SliderContainer>
        <Slider {...settings}>
          {items.map(item => (
            <SlideItem key={item.id}>
              <img src={item.img} width="95%" alt="nap-demo" />
              <ProductDetails>
                <Price>{item.price}</Price>
                <Title>{item.title}</Title>
                <ButtonContainer>
                  <button className="napBtn ff-psb">BUY NOW</button>
                </ButtonContainer>
              </ProductDetails>
            </SlideItem>
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  )
}

export default PIPSection
