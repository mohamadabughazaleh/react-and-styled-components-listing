import React from 'react'
import { Div ,Input ,Label} from './styled/but.styled'
export default function Button({BU ,BUT}) {
  return (
      
      <Div>
          <Input type='checkbox'  value="None" name="check" id="slideThree" onClick={()=> BUT(!BU)}></Input>
          <Label for="slideThree"></Label>

      </Div>
  )
}
