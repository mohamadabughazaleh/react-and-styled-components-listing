import styled from "styled-components";



 export const Div= styled.div`
  width: 80px;
  height: 26px;
  background: #333;
  margin: 20px auto;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
  :after {
  content: 'OFF';
  color: #000;
  position: absolute;
  right: 10px;
  z-index: 0;
  font: 12px/26px Arial, sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);
}
:before {
  content: 'ON';
  color: ${({ theme})=>theme.colors.replace};
  position: absolute;
  left: 10px;
  z-index: 0;
  font: 12px/26px Arial, sans-serif;
  font-weight: bold;
}
input[type=checkbox] {
  visibility: hidden;
}
input[type=checkbox]:checked + label {
  left: 43px;
}
 
 `

export const Label=styled.label`
  left: 43px;
  display: block;
  width: 34px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: 1;
  background: #fcfff4;
  background: linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  border-radius: 50px;
  transition: all 0.4s ease;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  :checked + label {
  left: 43px;
}
`
export const Input=styled.input``
