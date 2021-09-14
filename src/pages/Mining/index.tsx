import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card6 from './Card6'

const Mining: FC = () => {
  const classPrefix = 'cofi-page-mining'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card className={'card1'}>
        <Card1/>
      </Card>
      <Card className={'card2'}>
        <Card2/>
      </Card>
      <Card className={'card3'}>
        <Card3/>
      </Card>
      <Card className={'card4'}>
        <Card4/>
      </Card>
      <Card className={'card5'}>
        <Card4/>
      </Card>
      <Card className={'card6'}>
        <Card6/>
      </Card>
      <Card className={'card7'}>
        <Card6/>
      </Card>
    </div>
  )
}

export default Mining
