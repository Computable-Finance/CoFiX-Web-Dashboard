import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'
import Card1 from './Card1'
import Card5 from './Card5'
import Card6 from './Card6'

const ID: FC = () => {
  const classPrefix = 'cofi-page-id'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card className={'card1'}>
        <Card1 />
      </Card>
      <Card className={'card2'}>
        <Card1 />
      </Card>
      <Card className={'card3'}>
        <Card1 />
      </Card>
      <Card className={'card4'}>
        <Card1 />
      </Card>
      <Card className={'card5'}>
        <Card5 />
      </Card>
      <Card className={'card6'}>
        <Card6 />
      </Card>
    </div>
  )
}

export default ID
