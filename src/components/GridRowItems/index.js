import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import device from '../../utils/mediaUtils';
import design from '../../assets/design.jpg';
import { MainHeadingNap1, ItemContainer} from '../CommonComponents';

const Container = styled.section`
  margin-top: 50px;
  text-align: center;
`;
const RowItem = styled.div`
  margin: 15px;
`;
const Image = styled.img`
  width: 100%;
`;
const CustomItemContainer = styled(ItemContainer)`
  ${device.tablet}{
    display: ${props => props.mobile && 'none'};
  };
`;
const SliderContainer = styled.div`
  padding: 30px;
  display: none;
  ${device.tablet}{
    display: ${props => props.mobile ? 'block' : 'none'};
  }
`;

const gridItems = [{
  img: design,
  itemHeading: "Compatible",
  itemSubHeading: "NewAge Slatwall Accessories are compatible with all NewAge Products Slatwall Systems and most standards 3 in. on-center slatwalls." 
},
{
  img: design,
  itemHeading: "Precision-Fit",
  itemSubHeading: "All accessories easily click-in to safely support your items, allowing you to create a flexible storage area."
},
{
  img: design,
  itemHeading: "Compatible",
  itemSubHeading: "NewAge Slatwall Accessories are compatible with all NewAge Products Slatwall Systems and most standards 3 in. on-center slatwalls." 
}];

function GridRowItems({heading, items, mobileSlider}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1
  };
  return (
    <Container>
        <MainHeadingNap1>{heading}</MainHeadingNap1>
        <CustomItemContainer mobile={mobileSlider}>
          {items?.map((item, index) => (
            <RowItem key={index}>
              <Image src={item.img} alt="newage" />
              <p className="nap-fontsize2 design-heading napfonts mobile-fontsize2">{item.itemHeading}</p>
              <p className="nap-fontsize5 napfonts mobile-fontsize5">{item.itemSubHeading}</p>
          </RowItem>
          ))}
        </CustomItemContainer>
        <SliderContainer mobile={mobileSlider}>
          <Slider {...settings}>
            {items?.map((item, index) => (
              <div key={index}>
                <img src={item.img} width="95%" alt="demo" />
                <p className="nap-fontsize2 design-heading napfonts mobile-fontsize2">{item.itemHeading}</p>
                <p className="nap-fontsize5 napfonts mobile-fontsize5">{item.itemSubHeading}</p>
            </div>
            ))}
          </Slider>
        </SliderContainer>
    </Container>
  )
}
GridRowItems.defaultProps = {
  mobileSlider: true,
  items: gridItems
}
export default GridRowItems
