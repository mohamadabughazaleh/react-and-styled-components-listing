import React from 'react';
import{Jopstyle ,Jopitem ,Imgitem ,Jopinfo,Jopspan ,Jopspantow ,Jopspanthree ,Joptitle,Jopsdetalis ,Jopdiitem ,Jopcolume,Lastspan,Columeright} from './styled/Jop.styled';
export default function Jop({item:{id,company,logo, New,featured,position,postedAt,contract,location,role,level,languages,tools},handeletagclick}) {

  let Kay=[role ,level ,...languages ,...tools];
  return (
      <Jopstyle>
      <Jopitem>
      <Jopcolume>
      <Imgitem src={logo} alt=''/>
      <Jopinfo>
      <Jopspan>{company}{New && (<Jopspantow>New!</Jopspantow>)}{featured &&(<Jopspanthree>Featured</Jopspanthree>)}</Jopspan>
      <Joptitle>{position}</Joptitle>
      <Jopsdetalis>
      <Jopdiitem>{postedAt}</Jopdiitem>
      <Jopdiitem>{contract}</Jopdiitem>
      <Jopdiitem>{location}</Jopdiitem>
      </Jopsdetalis>
      </Jopinfo>
      </Jopcolume>
      <Columeright>
      {Kay.map((Keey)=>(
        <Lastspan onClick={()=>handeletagclick(Keey)} >{Keey}</Lastspan>
      ))}   
      </Columeright>
      </Jopitem>
      </Jopstyle>
  )
}
