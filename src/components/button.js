import React from 'react';
import { Div ,Input ,Label} from './styled/but.styled';
export default function Button({BU ,BUT,H,L}) {
  const Butt=()=>H(!L);
  return (
      <Div>
          <Input type='checkbox' value="None" name="check" id="slideThree" onClick={()=> Butt()}></Input>
          <Label for="slideThree"></Label>
      </Div>
  )
}
