import styled, { keyframes } from 'styled-components';
import LoadingImg from '../../images/mithril.png';

const rotate = keyframes`
  20% {
      transform: rotate(20deg);
  }

  40% {
    transform: rotate(-20deg);
  }

  60% {
    transform: scale(1.5);
  }

  80% {
    transform: scale(0.6);
  }
`;

const LoadingIcon = styled.span`
    display: block;
    width: 60px;
    height: 60px;
    margin: 40px auto 3px;
    vertical-align: middle;
    background: url(${LoadingImg}) no-repeat center;
    background-size: contain;
    animation: ${rotate} 1s linear infinite;
`;

export default LoadingIcon;

