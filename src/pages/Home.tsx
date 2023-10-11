import { Player } from '@lottiefiles/react-lottie-player'
import VideoPost from '../components/VideoPost'
import useVideoGet from '../hooks/useVideoGet'
import classes from './Home.module.css'
import loadingLogo from '../assets/Loading.json'

const Home = () => {
  const { newVideoPost, isLoading } = useVideoGet()

  return (
    <>
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
