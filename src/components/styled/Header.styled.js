import styled from "styled-components";
export const StyledHeader=styled.header`
width: 100%;
height: 155px;
background-color:${({theme})=>theme.colors.header};
background-image: url(../images/bg-header-desktop.svg);
background-size: cover;
background-position: center;
@media(max-width:${({theme})=>theme.mobile}){
background-image: url(../images/bg-header-mobile.svg);
}   
`

