import React from 'react';
import styled from 'styled-components';
import BannerContent from '../BannerContent';
import device from '../../utils/mediaUtils';
import src from '../../assets/slatwall.webp';
import mobile from '../../assets/mobile-banner.jpg';

const Container = styled.section`
  position: relative;
`;
const VideoContainer = styled.div`
  ${device.tablet}{
    display: none;
  };
`;
const MobileImage = styled.img`
  width: 100%;
  display: none;
  ${device.tablet}{
    display: block;
  };
`;
const DesktopImage = styled.img`
  width: 100%;
  ${device.tablet}{
    display: none;
  };
`;

function FullWidthBanner({isVideo, src, align, heading, subHeading, buttons, custom, mobileSrc, contentColor, alignContent}) {
  return (
    <Container>
      {isVideo ?
      <VideoContainer>
        <video width="100%" autoPlay loop muted>
          <source src={src} type='video/mp4' />
        </video> 
      </VideoContainer>
        :
        <DesktopImage src={src} alt="newage-web" />
      }
      <MobileImage src={mobileSrc} alt="newage-mob" />
      {heading && <BannerContent
        heading={heading}
        subHeading={subHeading}
        align={align}
        custom={custom}
        buttons={buttons}
        contentColor={contentColor}
        alignContent={alignContent}
      />}
    </Container>
  )
}

FullWidthBanner.defaultProps = {
  src: src,
  mobileSrc: mobile
}

export default FullWidthBanner;
