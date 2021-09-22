import {FC} from 'react'
import Card from 'src/components/Card'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card6 from './Card6'

import styled from "styled-components";

const Page = styled.div`
  padding-top: 22px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 160px 500px 500px 550px;
  grid-template-areas:
            'a a b b c c'
            'd d d d d d'
            'e e e e e e'
            'f f f g g g';
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
const F = styled(Card)`
    grid-area: f;
    width: 100%;
    height: 100%;
`
const G = styled(Card)`
    grid-area: g;
    width: 100%;
    height: 100%;
`


const Mining: FC = () => {
  return (
    <Page className={`cofi-page`}>
      <A><Card1/></A>
      <B><Card2/></B>
      <C><Card3/></C>
      <D><Card4/></D>
      <E><Card4/></E>
      <F><Card6/></F>
      <G><Card6/></G>
    </Page>
  )
}

export default Mining
