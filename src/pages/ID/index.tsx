import {FC} from 'react'
import Card from 'src/components/Card'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
import styled from "styled-components";

const Page = styled.div`
  padding-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 160px 500px 500px;
  grid-template-areas:
            'a b c d'
            'e e e e'
            'f f f f';
  row-gap: 36px;
`

const A = styled(Card)`
    grid-area: a;
    width: 100%;
    height: 100%;
`

const B = styled(Card)`
    width: 100%;
    height: 100%;
    grid-area: b;
`

const C = styled(Card)`
    width: 100%;
    height: 100%;
    grid-area: c;
`

const D = styled(Card)`
    width: 100%;
    height: 100%;
    grid-area: d;
`

const E = styled(Card)`
    width: 100%;
    height: 100%;
    grid-area: e;
`

const F = styled(Card)`
    width: 100%;
    height: 100%;
    grid-area: f;
`

const ID: FC = () => {
  return (
    <Page className={`cofi-page`}>
      <A><Card1/></A>
      <B><Card2/></B>
      <C><Card3/></C>
      <D><Card4/></D>
      <E><Card5/></E>
      <F><Card6/></F>
    </Page>
  )
}

export default ID
