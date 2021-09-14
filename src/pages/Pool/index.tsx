import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'
import TVL from './TVL'
import Card2 from './Card2'

const Pool: FC = () => {
  const classPrefix = 'cofi-page-pool'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card className={"card1"}>
        <div>
          <TVL/>
        </div>
      </Card>
      <Card className={"card2"}>
        <Card2 />
      </Card>
      <Card className={"card3"}>
        <Card2 />
      </Card>
      <Card className={"card4"}>
        <TVL/>
      </Card>
      <Card className={"card5"}>
        <TVL/>
      </Card>
    </div>
  )
}

export default Pool
