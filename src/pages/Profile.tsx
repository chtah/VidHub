import useUserData from '../hooks/useUserData'
import classes from './Profile.module.css'

const Profile = () => {
  const { newUserData, isLoading } = useUserData()

  return (
    <div className={classes.container}>
      {isLoading ? <p>Loading</p> : null}
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
