import { FC } from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card6 from './Card6'
import { A, B, C, D, E, F, G } from 'src/components/Grid'

import styled from 'styled-components'

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

const Mining: FC = () => {
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
        <Card4 />
      </E>
      <F>
        <Card6 />
      </F>
      <G>
        <Card6 />
      </G>
    </Page>
  )
}

export default Mining
