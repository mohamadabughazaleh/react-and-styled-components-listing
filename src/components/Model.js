import{Div,DivV,Sp,BUTOON}from './styled/Model.styeld';
function Model({BU,BUT,M ,N}) {
  function D(){
    BUT(!BU)
    N(false)

  }
  return (
    <>
    {M &&(
   <Div>
   <DivV>
   <Sp onClick={()=>N(false)}>X</Sp>
   change color 
   <BUTOON onClick={()=>D()}>OK</BUTOON>
   </DivV>

   </Div>   
   )}
    </>
  )
}

export default Model