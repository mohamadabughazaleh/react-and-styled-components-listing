import styled from "styled-components";

export const DivV= styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    width: 300px;
    height: 200px;
    text-align: center;
`

export const Div= styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
background: rgba(49,49,49,0.8);
z-index: 10000;
`
export const H1= styled.h1``

export const BUTOON= styled.button`
background-color: #5da5a4;
box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
color: #fff;
position: absolute;
top: 80%;
right: 37%;
width: 80px;
padding: 5px 7px;
border-radius: 5px;
border: none;
cursor: pointer;
`
export const Sp= styled.span`
position: absolute;
top: 4px;
right: 1px;
padding: 5px 7px;
cursor: pointer;
transition: 1s;
:hover{
    transform: scale(1.4,1.4);
}
`