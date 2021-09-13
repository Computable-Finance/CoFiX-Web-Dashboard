import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const ID: FC = () => {
  const classPrefix = 'cofi-page-mining'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card>
        ID
      </Card>
    </div>
  )
}

export default ID
