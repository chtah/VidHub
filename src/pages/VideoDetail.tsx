import { useParams } from 'react-router-dom'
import useSelectVideo from '../hooks/useSelectVideo'
import classes from './VideoDetail.module.css'
import YouTube from 'react-youtube'
import { Rating, Star } from '@smastrom/react-rating'
import useUserData from '../hooks/useUserData'
import { Link } from 'react-router-dom'
import useVideoDelete from '../hooks/useVideoDelete'
import { Player } from '@lottiefiles/react-lottie-player'
import loadingLogo from '../assets/Loading.json'
const VideoDetail = () => {
  const { id } = useParams()
  const { videoDetail, isLoading, isError, youtubeSrc } = useSelectVideo(id || '1')
  const { newUserData } = useUserData()
  const { videoDelete, isLoadingDeleteButton } = useVideoDelete()

  //For translate link to run in Youtube api
  let translateSrc = ''
  if (youtubeSrc.includes('youtu.be')) {
    const i = youtubeSrc.indexOf('?')
    translateSrc = youtubeSrc.substring(i - 11, i)
  } else if (youtubeSrc.includes('youtube.com')) {
    const i = youtubeSrc.indexOf('=')
    translateSrc = youtubeSrc.substring(i + 1)
  }

  return (
    <>
      {isLoading ? <Player autoplay loop src={loadingLogo} style={{ height: '300px', width: '300px' }}></Player> : null}
      {isError ? <h3>Error For Load</h3> : null}
      {videoDetail && (
        <div className={classes.card}>
          <p className={classes.title}>{videoDetail.videoTitle}</p>
          <YouTube videoId={translateSrc} />
          <div className={classes.description}>
            <p className={classes.username}>Posted By : {videoDetail.postedBy.username}</p>
            <p className={classes.username}>
              Create at {new Date(videoDetail.createdAt.valueOf()).toLocaleString('th-th')}
            </p>
            <p className={classes.comment}>Comment : {videoDetail.comment}</p>
            <Rating
              value={videoDetail.rating}
              itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }}
              readOnly={true}
              style={{ maxWidth: 120 }}
            />
            {newUserData && newUserData.id === videoDetail.postedBy.id ? (
              <Link to="/edit">
                <button>Edit</button>
              </Link>
            ) : null}
            {newUserData && newUserData.id === videoDetail.postedBy.id ? (
              <button onClick={videoDelete} disabled={isLoadingDeleteButton}>
                {isLoadingDeleteButton ? 'Deleting' : 'Delete'}
              </button>
            ) : null}
          </div>
        </div>
      )}
    </>
  )
}
export default VideoDetail
