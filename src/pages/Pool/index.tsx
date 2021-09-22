import {FC} from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import styled from "styled-components";
import {A, B, C, D, E} from "src/components/Grid"

const Page = styled.div`
  padding-top: 22px;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  grid-template-rows: 250px 250px 500px 500px;
  grid-template-areas:
            'a a b'
            'a a c'
            'd d d'
            'e e e';
  row-gap: 36px;
`

const Pool: FC = () => {
  return (
    <Page className={`cofi-page`}>
      <A><Card1/></A>
      <B><Card2/></B>
      <C><Card2/></C>
      <D><Card1/></D>
      <E><Card1/></E>
    </Page>
  )
}

export default Pool
