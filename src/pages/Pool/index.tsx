import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const Pool: FC = () => {
  const classPrefix = 'cofi-page-pool'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card>
        Pool
      </Card>
      <Card>
        Pool
      </Card>
      <Card>
        Pool
      </Card>
    </div>
  )
}

export default Pool
