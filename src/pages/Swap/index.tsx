import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const Swap: FC = () => {
  const classPrefix = 'cofi-page-swap'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card className={"card1"}>
        Swap
      </Card>
      <Card className={"card2"}>
        Swap
      </Card>
      <Card className={"card3"}>
        Swap
      </Card>
      <Card className={"card4"}>
        Swap
      </Card>
      <Card className={"card5"}>
        Swap
      </Card>
    </div>
  )
}

export default Swap
