import styled from "styled-components";
import { typeScale } from "../utils";
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

  primaryButtonError: (props) => `
    background:${props.theme.status.errorColor};
    color:${props.theme.textColorInverted};
    `,
  secondaryButtonError: (props) => `
    background:none;
    border:2px solid ${props.theme.status.errorColor};
    color:${props.theme.status.errorColor};
    `,
  tertiaryButtonError: (props) => `
    background:none;
    color:${props.theme.status.errorColor};
`,
  error: (props) => `
    background:${props.theme.status.errorColor};
    color:${props.theme.textColorInverted};
    &:hover {
      background-color:${props.theme.status.errorColorHover};
    }
    &:active &:focus {
      background-color:${props.theme.status.errorColorActive};
    }
`,
  primaryButtonSuccess: (props) => `
    background:${props.theme.status.successColor};
    color:${props.theme.textColorInverted};
    `,
  secondaryButtonSuccess: (props) => `
    background:none;
    border:2px solid ${props.theme.status.successColor};
    color:${props.theme.status.successColor};
    `,
  tertiaryButtonSuccess: (props) => `
    background:none;
    color:${props.theme.status.successColor};
`,
  success: (props) => `
    background:${props.theme.status.successColor};
    color:${props.theme.textColorInverted};
    &:hover {
      background-color:${props.theme.status.successColorHover};
    }
    &:active &:focus {
      background-color:${props.theme.status.successColorActive};
    }
`,
  primaryButtonWarning: (props) => `
    background:${props.theme.status.warningColor};
    color:${props.theme.textColorInverted};
    `,
  secondaryButtonWarning: (props) => `
    background:none;
    border:2px solid ${props.theme.status.warningColor};
    color:${props.theme.status.warningColor};
    `,
  tertiaryButtonWarning: (props) => `
    background:none;
    color:${props.theme.status.warningColor};
`,
  warning: (props) => `
    background:${props.theme.status.warningColor};
    color:${props.theme.textColorInverted};
    &:hover {
      background-color:${props.theme.status.warningColorHover};
    }
    &:active &:focus {
      background-color:${props.theme.status.warningColorActive};
    }
`,
};

const Button = styled.button`
  border-radius: 12px 8px;
  padding: 12px;
  min-width: 100px;
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  border: none;
  font-family: ${(props) => props.theme.primaryFont};
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColorA};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background-color: ${(props) => props.theme.primaryColor};
  &:disabled {
    background: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    border-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TertiaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

