import { VideoPostDTO } from '../types/dto'
import classes from './VideoPost.module.css'

interface IVideoPostProps {
  videoPost: VideoPostDTO
}

const VideoPost = ({ videoPost }: IVideoPostProps) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={videoPost.thumbnailUrl} />
      <div className={classes.cardDescrip}>
        <p className={classes.title}>{videoPost.videoTitle}</p>
        <p className={classes.creatorName}>{videoPost.creatorName}</p>
        <p className={classes.comment}>
          <q>{videoPost.comment}</q>
        </p>
        <p className={classes.username}>{videoPost.postedBy.username}</p>
        <p className={classes.rating}>{videoPost.rating}</p>
      </div>
    </div>
  )
}

export default VideoPost
