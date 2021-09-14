import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'
import Card1 from './Card1'
import Card3 from './Card3'

const Swap: FC = () => {
  const classPrefix = 'cofi-page-swap'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card className={"card1"}>
        <Card1 />
      </Card>
      <Card className={"card2"}>
        <Card1 />
      </Card>
      <Card className={"card3"}>
        <Card3 />
      </Card>
      <Card className={"card4"}>
        <Card3 />
      </Card>
      <Card className={"card5"}>
        <Card1 />
      </Card>
    </div>
  )
}

export default Swap
