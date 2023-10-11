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
      <div className={classes.backDiv}>
        <Link className={classes.back} to={`/video/${videoID}`}>
          {'<'}
        </Link>
      </div>
      <div className={classes.titleDiv}>
        <p className={classes.title}>Edit Comment</p>
      </div>

      <div className={classes.inputDiv}>
        <input
          className={classes.input}
          value={newComment}
          placeholder="Edit comment here"
          type="text"
          required
          onChange={(e) => {
            setComment(e.target.value)
          }}
        />
      </div>

      <div className={classes.ratingDiv}>
        <Rating
          className={classes.rating}
          value={newRating}
          onChange={setRating}
          itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }}
          style={{ maxWidth: 200 }}
        />
      </div>

      <div className={classes.buttonDiv}>
        <button
          className={isLoadingButton ? classes.buttonLoading : classes.button}
          onClick={handleClick}
          disabled={isLoadingButton}
        >
          {isLoadingButton ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </div>
  )
}
export default Edit
