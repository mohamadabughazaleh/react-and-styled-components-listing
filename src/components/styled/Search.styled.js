import styled from "styled-components";
 export const DivONE=styled.div`
 width: 100%;
height: auto;
background-color: #fff;
border-radius: 10PX;
box-shadow: 0px 10px 15px -7px rgb(93 164 164 / 55%);
padding:20px 40px;
box-sizing: border-box;
margin-top: -36px;
min-height: 70px;
opacity: 1;
display:flex;
justify-content: space-between;
 `
  export const DivTOW=styled.div`

  `
export const But=styled.button`
margin-left: 50px;
background-color: transparent;
border:none;
font-size: 15px;
color: #58a9a7;
cursor: pointer;
transition:0.5s;
:hover{
text-decoration: underline;
font-size: 20px;
}

 `
export const Spansearch=styled.span`
display: inline-block;
width: auto;
height: auto;
padding:10px 15px;
border-radius: 5px;
background-color: hsl(180, 31%, 95%);
font-size: 15px;
color:#5da5a4 ;
font-weight: 700;
margin: 5px;
transition: 1s;
padding-right:40px;
position: relative;
::after{
content:"";
display:block;
width:30px;
height:100%;
background-color: #5da5a4;
position:absolute;
right: 0;
top: 0;
background-image: url("../images/icon-remove.svg");
background-repeat: no-repeat;
background-position: center;
transition: 0.5s;
border-top-left-radius: 5px;
border-bottom-right-radius: 5px;
}
:hover::after{
background-color:#000000cc ;
cursor: pointer;
} 
 `
export const Abber=styled.abbr``