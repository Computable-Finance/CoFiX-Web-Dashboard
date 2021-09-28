import { FC } from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import styled from 'styled-components'
import { A, B, C, D, E } from 'src/components/Grid'

const Page = styled.div`
  padding: 22px 28px 44px 28px;
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

export default Pool
