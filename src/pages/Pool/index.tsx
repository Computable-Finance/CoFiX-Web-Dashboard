import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const Pool: FC = () => {
  const classPrefix = 'cofi-page-mining'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card>
        Pool
      </Card>
    </div>
  )
}

export default Pool
