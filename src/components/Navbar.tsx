import classes from './Navbar.module.css'
import VidHubLogo from '../assets/VidHub.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <Link className={classes.logo} to={'/'}>
        <img width="50px" src={VidHubLogo} alt="VidHubLogo" />
        <p className={classes.logoName}>VidHub</p>
      </Link>

      <div className={classes.navRight}>
        <p>Profile</p>
        <p>Login</p>
      </div>
    </div>
  )
}

export default Navbar
