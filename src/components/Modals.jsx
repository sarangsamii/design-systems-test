import React from "react";
import styled from "styled-components";
import { typeScale, PrimaryFont } from "../utils";
import { Images, CloseIcon } from "../assets";
import {  SecondaryButton,
  TertiaryButton,
  PrimaryButton, } from "./index";
import { useSpring, animated,config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  padding: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  font-family: ${PrimaryFont};
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

// const ColumnModalWrapper = styled(ModalWrapper)`
//   flex-direction: row;
//   justify-content: space-around;
// `;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const FlexDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:100%
`

export const SignUpModal = ({ showModal, setShowModal }) => {
  const styles = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-200%)",
    config:config.slow
  });

  return (
    <animated.div style={styles}>
      <ModalWrapper>
        <img src={Images.loginImg} alt="Sign up for an account!" style={{maxHeight:250}} />
        <ModalHeader>Sign Up</ModalHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <FlexDiv>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <SecondaryButton>
          Secondary
        </SecondaryButton>
        <TertiaryButton>
          Tertiary
        </TertiaryButton>
        </FlexDiv>
       

        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
