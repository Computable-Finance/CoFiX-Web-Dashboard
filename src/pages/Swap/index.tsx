import './styles'

import {FC} from 'react'
import Card from 'src/components/Card'

const Swap: FC = () => {
  const classPrefix = 'cofi-page-swap'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Card>
        Swap
      </Card>
    </div>
  )
}

export default Swap
