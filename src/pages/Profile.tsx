import { Player } from '@lottiefiles/react-lottie-player'
import useUserData from '../hooks/useUserData'
import classes from './Profile.module.css'
import loadingLogo from '../assets/Loading.json'

const Profile = () => {
  const { newUserData, isLoading } = useUserData()

  return (
    <div className={classes.container}>
      {isLoading ? <Player autoplay loop src={loadingLogo} style={{ height: '300px', width: '300px' }}></Player> : null}
      {newUserData && newUserData ? (
        <div className={classes.card}>
          <p>User name : {newUserData.username}</p>
          <p>Name : {newUserData.name}</p>
          <p>Register Date : {new Date(newUserData.registeredAt.valueOf()).toLocaleString()}</p>
        </div>
      ) : null}
    </div>
  )
}

export default Profile
