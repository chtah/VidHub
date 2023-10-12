import { Player } from '@lottiefiles/react-lottie-player'
import VideoPost from '../components/VideoPost'
import useVideoGet from '../hooks/useVideoGet'
import classes from './Home.module.css'
import loadingLogo from '../assets/Loading.json'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '../providers/AuthProvider'

const Home = () => {
  const { newVideoPost, isLoading } = useVideoGet()
  const { isLoggedIn } = useAuth()

  return (
    <>
      {isLoggedIn ? <Toaster /> : null}
      {isLoading ? <Player autoplay loop src={loadingLogo} style={{ height: '300px', width: '300px' }}></Player> : null}
      <div className={classes.container}>
        {newVideoPost &&
          newVideoPost.map((videoData) => {
            return <VideoPost key={videoData.id} videoPost={videoData} />
          })}
      </div>
    </>
  )
}

export default Home
