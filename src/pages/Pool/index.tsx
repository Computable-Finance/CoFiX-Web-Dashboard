import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const Pool: FC = () => {
  const classPrefix = 'cofi-page-pool'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card className={"card4"}>
        Pool1
      </Card>
      <Card className={"card4"}>
        Pool2
      </Card>
      <Card className={"card4"}>
        Pool3
      </Card>
      <Card className={"card4"}>
        Pool4
      </Card>
      <Card className={"card4"}>
        Pool5
      </Card>
    </div>
  )
}

export default Pool
