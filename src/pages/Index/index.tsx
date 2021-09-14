import './styles'

import {FC} from 'react'
import {Link} from "react-router-dom";
import {CoFiXLogoWithTextWhite} from "../../components/Icon";
import {MenuButton} from "../shared/Menu";
import Button from "../../components/Button";

const Index: FC = () => {
  const classPrefix = 'cofi-page-index'

  return (
    <div className={`${classPrefix}`}>
      <header className={'cofi-header'}>
        <div className={`cofi-header-prefix`}>
          <Link to="/">
            <CoFiXLogoWithTextWhite/>
          </Link>
        </div>
        <div className={`cofi-header-extra`}>
          <Link to={'/pool'}>
            <div style={{ color: "white" }}>Dashboard</div>
          </Link>
          <MenuButton/>
        </div>
      </header>

      <div className={'cofi-body'}>
        <Button>App</Button>
      </div>

    </div>
  )
}

export default Index
