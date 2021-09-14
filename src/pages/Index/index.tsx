import './styles'

import {FC} from 'react'
import {Link} from "react-router-dom";
import {
  CoFiXLogoWithTextWhite,
  CofiX1, CofiX2, CofiX3, CofiX4, CofiX5, CofiX6, CofiX7, CofiX8, CofiX9
} from "../../components/Icon";
import {MenuButton} from "../shared/Menu";
import Button from "../../components/Button";
import styled, {keyframes} from 'styled-components';
import {pulse, flipInY} from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;
const flipAnimation = keyframes`${flipInY}`;


const Index: FC = () => {
  const classPrefix = 'cofi-page-index'
  const PulseDiv = styled.div`
  animation: 3s infinite ${pulseAnimation};
`;
  const FlipDiv = styled.div`
   animation: 3s infinite ${flipAnimation};
  `;

  return (
    <>
      <div className={"bg"}/>
      <div className={`${classPrefix}`}>
        <header className={'cofi-header'}>
          <div className={`cofi-header-prefix`}>
            <Link to="/">
              <CoFiXLogoWithTextWhite/>
            </Link>
          </div>
          <div className={`cofi-header-extra`}>
            <Link to={'/pool'}>
              <div style={{color: "white"}}>Dashboard</div>
            </Link>
            <MenuButton/>
          </div>
        </header>
        <div className={'cofi-body'}>
          <FlipDiv>
            <CofiX1/>
          </FlipDiv>
          <Button gradient primary className="cofi-button">App</Button>
        </div>
        <PulseDiv style={{position: "absolute", left: "43%", top: "10.33%"}}>
          <CofiX2/>
        </PulseDiv>
        <PulseDiv style={{position: "absolute", left: "68.52%", top: "25%"}}>
          <CofiX3/>
        </PulseDiv>
        <PulseDiv style={{position: "absolute", left: "80.97%", top: "44.11%"}}>
          <CofiX4/>
        </PulseDiv>
        <PulseDiv style={{position: "absolute", left: "69.79%", top: "64.05%"}}>
          <CofiX5/>
        </PulseDiv>
        <PulseDiv style={{position: "absolute", left: "36.7%", top: "80.99%"}}>
          <CofiX6/>
        </PulseDiv>
        <PulseDiv style={{position: "absolute", left: "20.52%", top: "64.67%"}}>
          <CofiX7/>
        </PulseDiv>
        <PulseDiv style={{position: "absolute", left: "5.86%", top: "44%"}}>
          <CofiX8/>
        </PulseDiv>
        <PulseDiv style={{position: "absolute", left: "21.6%", top: "24.5%"}}>
          <CofiX9/>
        </PulseDiv>
      </div>
    </>

  )
}

export default Index
