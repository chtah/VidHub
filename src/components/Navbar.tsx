import classes from './Navbar.module.css'
import VidHubLogo from '../assets/VidHub.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className={classes.nav}>
      <Link className={classes.logo} to={'/'}>
        <img width="50px" src={VidHubLogo} alt="VidHubLogo" />
        <p className={classes.logoName}>VidHub</p>
      </Link>

      <div className={classes.navRight}>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/create">
              Create{' '}
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/profile">
              Profile
            </NavLink>

            <p className={classes.inActive} onClick={logout}>
              Logout
            </p>
          </>
        ) : (
          <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar
