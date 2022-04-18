import styled from "styled-components";
export const Jopstyle=styled.div`
margin-top: 60px;
width:100%;
height: auto;
display:grid;
grid-row-gap: 5px;
@media (max-width:${({theme})=>theme.mobiletow}){
margin-top: 90px;
width: 100%;
height: auto;
display: grid;
grid-row-gap: 100px;
}

`
export const Jopcolume=styled.div`
display:flex;
align-items: center;
flex-wrap: wrap;

`
export const Jopitem=styled.div`
width:100%;
height:auto;
padding:35px 40px;
background-color: #fff;
box-shadow: 0px 10px 15px -7px rgb(0px 10px 15px -7px #5da5a469) ;
box-sizing: border-box;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
box-shadow: 0 0 11px rgb(33 33 33 / 20%);
cursor: pointer;
transition:0.3s;
@media (max-width:${({theme})=>theme.mobiletow}){
  width: 100%;
  height: auto;
  padding: 12px 20px;
  background-color: #fff;
  box-shadow: 0px 10px 15px -7px rgb(0px 10px 15px -7px #5da5a469);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 0 0 11px rgb(33 33 33 / 20%);
  cursor: pointer;
  transition: 0.3s;
  .jop-item:hover{
        transform: none;
        border-left: 5px solid #58a9a7;
    }
}

:hover{
transform: scale(1.1,1.1);
border-left: 5px solid #58a9a7;
}
`
export const Imgitem=styled.img`
width: 90px;
height: auto;
@media (max-width: 495.57px){
  width: 65px;
        margin-top: -20%;
        margin-bottom: 15px;
        border: 4px solid #5da5a4;
        border-radius: 50px;
        margin-left: -5%;
}
@media (max-width:${({theme})=>theme.desktop}){
  width: 65px;
  margin-bottom: 15px;
}

`
export const Jopinfo=styled.div`
margin-left: 25px;
width: auto;
@media (max-width:${({theme})=>theme.mobiletow}){
  margin-left:0; 
  width: auto;
}
`
export const Jopspan=styled.span`
color:#5da5a4;
font-size: 15px;
display:flex;
font-weight: 600;
margin-bottom: 15px;
align-items: center;
@media (max-width: 375px){
color: #5da5a4;
font-size: 15px;
/* display: flex; */
font-weight: 600;
margin-bottom: 15px;
margin-left: 1%;
flex-wrap: wrap;
}
@media (max-width:${({theme})=>theme.desktop}){
  color: #5da5a4;
  font-size: 15px;
  /* display: flex; */
  font-weight: 600;
  margin-bottom: 15px;
  margin-left: -5%;
  flex-wrap: wrap;
  display: block;
}
`
export const Jopspantow=styled.span`
background: #5da5a4;
color: white;
padding: 4.5px;
border-radius: 20px;
font-size: 15px;
margin-left: 8%;
`
export const Jopspanthree=styled.span`
background: #000000cc;
color: white;
padding: 4.5px;
border-radius: 15px;
margin-left: 5%;
`
export const Joptitle=styled.span`
color:#000000cc;
font-size: 15px;
font-weight: 600;
display: block;
margin-bottom: 15px;
transition:0.5s;
cursor: pointer;
:hover{
color:#5da5a4;
}
`

export const Jopsdetalis=styled.ul`
display:flex;
list-style: none;
justify-content: space-between;
width: 230px;
`
export const Jopdiitem=styled.li`
color:${({theme})=>theme.colors.Text};
font-size: 15px;
::after{
content:"";
width:7px;
height: 1px;
background-color:hsl(180, 8%, 52%)  ;
display:inline-block;
margin-left: 10px;
margin-bottom: 5%;
}
:last-child::after{
display:none;
}
`
export const Lastspan=styled.span`
display: inline-block;
width: auto;
height: auto;
padding:10px 15px;
border-radius: 5px;
background-color:${({theme})=>theme.colors.but};
font-size: 15px;
color:#5da5a4 ;
font-weight: 700;
margin: 5px;
transition: 1s;
position: relative;
:hover{
background-color: #5da5a4;
color: white;
cursor: pointer
}
`
export const Columeright=styled.div`
display:flex;
align-items: center;
flex-wrap: wrap;
@media(max-width: 767px){
    border-top: 1px solid #939c9b75;
    margin-top: 20px;
    padding-top: 10px;
  }
`











/*

<div class="jop-item">
<div class="jop-colume jops-left">
    <img src="${data.logo}" class="jop-img" alt=${data.company}>
  <div class="jop-info">
    <span class="jop-company">${data.company}<span class=${data.new ?"spanone":""}>${data.new? "NEW!" :""}</span><span class=${data.featured?"spantow":""}>${data.featured ?"FEATURED":""}</span></span>
    <span class="jop-title">${data.position}</span>
    <ul class="jops-detalis">
      <li class="jop-di-item">${data.postedAt}</li>
      <li class="jop-di-item">${data.contract}</li>
      <li class="jop-di-item">${data.location}</li>
    </ul>
  </div>
</div>
<div class="jop-colume jops-right">
${job_tage}
</div>
</div>
*/