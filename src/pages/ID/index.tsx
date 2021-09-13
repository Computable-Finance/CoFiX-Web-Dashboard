import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const ID: FC = () => {
  const classPrefix = 'cofi-page-id'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card className={'card1'}>
        Mining
      </Card>
      <Card className={'card2'}>
        Mining
      </Card>
      <Card className={'card3'}>
        Mining
      </Card>
      <Card className={'card4'}>
        Mining
      </Card>
      <Card className={'card5'}>
        Mining
      </Card>
      <Card className={'card6'}>
        Mining
      </Card>
    </div>
  )
}

export default ID
