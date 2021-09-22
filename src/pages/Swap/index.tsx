import {FC} from 'react'
import Card from 'src/components/Card'
import Card1 from './Card1'
import Card3 from './Card3'
import styled from "styled-components";

const Page = styled.div`
  padding-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 500px 500px 550px 500px;
  grid-template-areas:
            'a a'
            'b b'
            'c d'
            'e e';
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

const Swap: FC = () => {
  return (
    <Page className={`cofi-page`}>
      <A><Card1/></A>
      <B><Card1/></B>
      <C><Card3/></C>
      <D><Card3/></D>
      <E><Card1/></E>
    </Page>
  )
}

export default Swap
