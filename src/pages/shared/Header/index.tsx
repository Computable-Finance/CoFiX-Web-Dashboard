import './styles'

import {Trans} from '@lingui/macro'
import classNames from 'classnames'
import {FC} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {CoFiXLogoSmall, CoFiXLogoWithText} from 'src/components/Icon'
import {MenuButton} from 'src/pages/shared/Menu'

const Nav: FC = () => {
  const location = useLocation()

  const routes = [
    {path: '/swap', content: <Trans>Swap</Trans>},
    {path: '/pool', content: <Trans>Pool</Trans>},
    {path: '/mining', content: <Trans>Mining</Trans>},
    {path: '/id', content: <Trans>ID</Trans>},
  ].map((r) => (
    <li
      key={r.path}
      className={classNames({
        active: location.pathname.indexOf(r.path) === 0,
      })}
    >
      <Link to={r.path}>{r.content}</Link>
    </li>
  ))

  const classPrefix = 'cofi-nav'
  return (
    <nav className={`${classPrefix}`}>
      <ul>
        <li className={`${classPrefix}-logo`}>
          <CoFiXLogoSmall/>
        </li>
        {routes}
      </ul>
    </nav>
  )
}

const Header: FC = () => {
  const classPrefix = 'cofi-header'

  return (
    <div className="container">
      <header className={`${classPrefix}`}>
        <div className={`${classPrefix}-prefix`}>
          <Link to="/">
            <CoFiXLogoWithText/>
            <div>Dashboard</div>
          </Link>
        </div>

        <Nav/>

        <div className={`${classPrefix}-extra`}>
          <MenuButton/>
        </div>
      </header>
    </div>
  )
}

export default Header
