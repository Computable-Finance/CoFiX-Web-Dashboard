import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const Mining: FC = () => {
  const classPrefix = 'cofi-page-mining'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card>
        Mining
      </Card>
    </div>
  )
}

export default Mining
