import { Rating, Star } from '@smastrom/react-rating'
import { VideoPostDTO } from '../types/dto'
import classes from './VideoPost.module.css'
import { Link } from 'react-router-dom'

interface IVideoPostProps {
  videoPost: VideoPostDTO
}

const VideoPost = ({ videoPost }: IVideoPostProps) => {
  //for remove item from local storage when comeback to HOME
  localStorage.removeItem('comment')
  localStorage.removeItem('rating')
  localStorage.removeItem('videoID')

  return (
    <Link className={classes.card} to={`/video/${videoPost.id}`}>
      <img className={classes.image} src={videoPost.thumbnailUrl} />
      <div className={classes.cardDescrip}>
        <div className={classes.titleANdComment}>
          <p className={classes.title}>{videoPost.videoTitle}</p>
          <p className={classes.creatorName}>{videoPost.creatorName}</p>
          <p className={classes.comment}>
            <q>{videoPost.comment}</q>
          </p>
        </div>
        <div className={classes.userRatingGroup}>
          <p className={classes.username}>{videoPost.postedBy.username}</p>
          <Rating
            value={videoPost.rating}
            itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }}
            readOnly={true}
            style={{ maxWidth: 100 }}
          />
        </div>
      </div>
    </Link>
  )
}

export default VideoPost
