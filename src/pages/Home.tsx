import VideoPost from '../components/VideoPost'
import useVideoGet from '../hooks/useVideoGet'
import classes from './Home.module.css'

const Home = () => {
  const { newVideoPost } = useVideoGet()

  return (
    <>
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
