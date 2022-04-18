import React,{useState,useEffect} from 'react';
import  data from './API/data.json';
import { ThemeProvider } from "styled-components";
import { StyledHeader } from './components/styled/Header.styled';
import { Container } from './components/styled/container';
import { DivONE ,DivTOW,But , Spansearch } from './components/styled/Search.styled'
import Jop from './components/Jop.js';
import GlobalStyles from './components/styled/Global';
//import Search from './components/Search';
const theme={
  colors:{
  header:'#5DA4A4',
  Text:'hsl(180, 8%, 52%)',
  but:'hsl(180, 31%, 95%)',
  ch:'#5da5a4;',
  body:'hsl(180, 52%, 96%)',
  },
  mobile:'768px',
  mobiletow:'375px',
  desktop:'1120px',
}
function App() {
  const[jops ,setjops]=useState([]);
  const [filters,setfilters]=useState([])
 useEffect(()=>setjops(data),[]);

 const filterfun=({role ,level ,languages ,tools})=>{
   if(filters.length===0){
     return true;
   }else{
  const tags=[role ,level ,...languages ,...tools];

   return tags.some(tag=>filters.includes(tag));
   }
 };
 const handeletagclick=(tag)=>{
   if(filters == tag){
    setfilters(  filters.filter((fff)=>fff !== tag ))
   }else{
   setfilters([...filters ,tag])
   }
  
 }

 const handelfilterclick=(pass)=>{

   setfilters(filters.filter((f)=>f !== pass ));
 };
 const but=()=> setfilters([]);
 const filteredjobs=jops.filter(filterfun);
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StyledHeader />
    <Container>
    {filters.length>0 && (
    <DivONE>
      <DivTOW >
      {filters.map((filter)=>(
        <Spansearch  onClick={()=> handelfilterclick(filter)}>
      {filter}
        </Spansearch>
      ))}
   
      </DivTOW>
  
      <But onClick={()=>but()} >Clear</But>
      </DivONE>
      )}
    {filteredjobs.map((item ,index)=>(
     <Jop key={index} item={item} handeletagclick={handeletagclick} />
    ))}
    </Container>
    </ThemeProvider>

  );
}
export default App;
