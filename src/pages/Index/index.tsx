import './styles'

import {FC} from 'react'
import {Link} from "react-router-dom";
import {CoFiXLogoWithText} from "../../components/Icon";
import {MenuButton} from "../shared/Menu";

const Index: FC = () => {
  const classPrefix = 'cofi-page-index'

  return (
    <div className={`${classPrefix}`}>
      <header className={'cofi-header'}>
        <div className={`cofi-header-prefix`}>
          <Link to="/">
            <CoFiXLogoWithText/>
          </Link>
        </div>
        <div className={`cofi-header-extra`}>
          <Link to={'/pool'}>Dashboard</Link>
          <MenuButton/>
        </div>
      </header>
    </div>
  )
}

export default Index
