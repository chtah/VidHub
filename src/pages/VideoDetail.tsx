import { useNavigate, useParams } from 'react-router-dom'
import useSelectVideo from '../hooks/useSelectVideo'
import classes from './VideoDetail.module.css'
import YouTube from 'react-youtube'
import { Rating, Star } from '@smastrom/react-rating'
import useUserData from '../hooks/useUserData'
import useVideoDelete from '../hooks/useVideoDelete'
import { Player } from '@lottiefiles/react-lottie-player'
import loadingLogo from '../assets/Loading.json'
import { Link } from 'react-router-dom'
const VideoDetail = () => {
  const { id } = useParams()
  const { videoDetail, isLoading, isError, youtubeSrc } = useSelectVideo(id || '1')
  const { newUserData } = useUserData()
  const { videoDelete, isLoadingDeleteButton } = useVideoDelete()
  const navigate = useNavigate()

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
      {isError ? navigate('/') : null}
      {videoDetail && (
        <div>
          <div className={classes.card}>
            <p className={classes.title}>{videoDetail.videoTitle}</p>
            <YouTube videoId={translateSrc} />
          </div>

          <div className={classes.description}>
            <div className={classes.usernameDiv}>
              <p className={classes.username}>Posted By : {videoDetail.postedBy.username}</p>
            </div>

            <div className={classes.createDateDiv}>
              <p className={classes.createDate}>
                Create at {new Date(videoDetail.createdAt.valueOf()).toLocaleString('th-th')}
              </p>
            </div>

            <div className={classes.updateDateDiv}>
              <p className={classes.updateDate}>
                Update at {new Date(videoDetail.updatedAt.valueOf()).toLocaleString('th-th')}
              </p>
            </div>

            <div className={classes.commentDiv}>
              <p className={classes.comment}>
                <q>{videoDetail.comment}</q>
              </p>
            </div>

            <div className={classes.ratingDiv}>
              <Rating
                value={videoDetail.rating}
                itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }}
                readOnly={true}
                style={{ maxWidth: 120 }}
              />
            </div>
          </div>

          <div className={classes.groupButton}>
            <div className={classes.editButtonDiv}>
              {newUserData && newUserData.id === videoDetail.postedBy.id ? (
                <Link to="/edit">
                  <button className={classes.editButton}>Edit</button>
                </Link>
              ) : null}
            </div>

            <div className={classes.deleteButtonDiv}>
              {newUserData && newUserData.id === videoDetail.postedBy.id ? (
                <button className={classes.deleteButton} onClick={videoDelete} disabled={isLoadingDeleteButton}>
                  {isLoadingDeleteButton ? 'Deleting' : 'Delete'}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default VideoDetail
