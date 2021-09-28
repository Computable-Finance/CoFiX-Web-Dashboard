import { FC } from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import styled from 'styled-components'
import { A, B, C, D, E } from 'src/components/Grid'

const Page = styled.div`
  padding: 22px 22px 44px 22px;
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

const Swap: FC = () => {
  return (
    <Page className={`cofi-page`}>
      <A>
        <Card1 />
      </A>
      <B>
        <Card2 />
      </B>
      <C>
        <Card3 />
      </C>
      <D>
        <Card4 />
      </D>
      <E>
        <Card5 />
      </E>
    </Page>
  )
}

export default Swap
