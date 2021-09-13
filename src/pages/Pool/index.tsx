import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'
import TVL from './TVL'

const Pool: FC = () => {
  const classPrefix = 'cofi-page-pool'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <div className={`card123`}>
        <Card className={"card1"}>
          <div>
            <TVL />
          </div>
        </Card>
        <Card className={"card2"}>
        </Card>
        <Card className={"card3"}>
        </Card>
        <Card className={"card4"}>
          <TVL />
        </Card>
        <Card className={"card5"}>
          <TVL />
        </Card>
      </div>
    </div>
  )
}

export default Pool
