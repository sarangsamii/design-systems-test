import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size:${typeScale.paragraph};
    padding:8px;
    `,
  large: () => `
    font-size:${typeScale.header5};
    padding:12px 8px;
    `,
  warning: () => `
        background-color:${defaultTheme.status.warningColor};
        color:${defaultTheme.textColorInverted};
        &:hover &:focus {
            background-color:${defaultTheme.status.warningColorHover};
            outline:3px solid ${defaultTheme.status.warningColorHover};
            color:${defaultTheme.textColorInverted};
        }
        &:active {
            background-color:${defaultTheme.status.warningColorActive};
        }
    `,
    warningSecondary:()=>`
        background:none;
        border:2px solid ${defaultTheme.status.warningColor};
        color:${defaultTheme.status.warningColor};
    `,
    warningTertiary:()=>`
        background:none;
        color:${defaultTheme.status.warningColor};
    `,
    
};

const Button = styled.button`
  border-radius: 12px 8px;
  padding: 12px;
  min-width: 100px;
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  border: none;
  font-family: ${defaultTheme.primaryFont};
  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColorA};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  color: white;
  background-color: ${defaultTheme.primaryColor};
  &:disabled {
    background: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
