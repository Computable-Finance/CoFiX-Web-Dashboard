import {FC} from 'react'
import Card from 'src/components/Card'
import Card1 from './Card1'
import Card2 from './Card2'
import styled from "styled-components";

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

const A = styled(Card)`
    grid-area: a;
    width: 100%;
    height: 100%;
`

const B = styled(Card)`
    grid-area: b;
    width: 100%;
    height: 100%;
`

const C = styled(Card)`
    grid-area: c;
    width: 100%;
    height: 100%;
`

const D = styled(Card)`
    grid-area: d;
    width: 100%;
    height: 100%;
`

const E = styled(Card)`
    grid-area: e;
    width: 100%;
    height: 100%;
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
