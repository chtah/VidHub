import classes from './Navbar.module.css'
import VidHubLogo from '../assets/VidHub.svg'

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.navLeft}>
        <img width="50px" src={VidHubLogo} alt="VidHubLogo" />
        <p className={classes.logoName}>VidHub</p>
      </div>

      <div className={classes.navRight}>
        <p>Profile</p>
        <p>Login</p>
      </div>
    </div>
  )
}

export default Navbar
