import { Rating, Star } from '@smastrom/react-rating'
import { useState } from 'react'
import useVideoEdit from '../hooks/useVideoEdit'
import { useNavigate } from 'react-router-dom'
import classes from './Edit.module.css'
import { Link } from 'react-router-dom'

const Edit = () => {
  const [newRating, setRating] = useState(Number(localStorage.getItem('rating'))) //for default rating holder
  const [newComment, setComment] = useState(String(localStorage.getItem('comment'))) //for default comment holder
  const { Submit, isLoadingButton } = useVideoEdit()
  const videoID = localStorage.getItem('videoID')
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      await Submit(newComment, newRating)
      setComment('')
      setRating(0)
      navigate(`/video/${videoID}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.backAndTitle}>
        <Link to={`/video/${videoID}`} className={classes.back}>
          {'<'}
        </Link>
        <p className={classes.title}>Edit Comment</p>
      </div>

      <div className={classes.card}>
        <input
          value={newComment}
          className={classes.input}
          placeholder="Edit comment here"
          type="text"
          required
          onChange={(e) => {
            setComment(e.target.value)
          }}
        />
        <Rating
          value={newRating}
          onChange={setRating}
          itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }}
          style={{ maxWidth: 200 }}
        />

        <button onClick={handleClick} disabled={isLoadingButton}>
          {isLoadingButton ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </div>
  )
}
export default Edit
