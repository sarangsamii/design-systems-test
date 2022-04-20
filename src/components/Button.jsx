import styled from 'styled-components';
import { defaultTheme,typeScale } from '../utils';

const Button = styled.button`
border-radius:12px 8px;
padding:12px;
min-width:100px;
font-size:${typeScale.paragraph};
cursor:pointer;
border:none;
font-family: ${defaultTheme.primaryFont};

`

const PrimaryButton = styled(Button)`
color:white;
background-color:${defaultTheme.primaryColor}
`
export const SecondaryButton = styled(Button)`
border:2px solid ${defaultTheme.primaryColor};
color:${defaultTheme.primaryColor}
`
export const TertiaryButton = styled(Button)`

color:${defaultTheme.primaryColor}
`

export default PrimaryButton