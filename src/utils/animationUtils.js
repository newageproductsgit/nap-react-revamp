import { Reveal, Tween } from 'react-gsap';

export const FadeInLeft = ({ children }) => (
  <Reveal trigger={<div />}>
    <Tween
      from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
      ease="back.out(1.4)"
    >
      {children}
    </Tween>
  </Reveal>
);

export const TitlePopUp = ({ children }) => (
  <Reveal repeat trigger={<div />}>
    <Tween from={{ y: '200px', opacity: 0 }} duration={1}>
      {children}
    </Tween>
  </Reveal>
);

export const Revealer = ({children}) => (
  <Reveal>
    <Tween from={{ opacity: 0 }} duration={2}>
      {children}
    </Tween>
  </Reveal>
)