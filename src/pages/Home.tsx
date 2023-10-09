import VideoPost from '../components/VideoPost'
import useVideoPost from '../hooks/useVideoPost'
import classes from './Home.module.css'

const Home = () => {
  const { newVideoPost } = useVideoPost()

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
