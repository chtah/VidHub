import { Rating, Star } from '@smastrom/react-rating'
import { useState } from 'react'
import useVideoEdit from '../hooks/useVideoEdit'
import { useNavigate } from 'react-router-dom'
import classes from './Edit.module.css'

const Edit = () => {
  const [newRating, setRating] = useState(0)
  const [newComment, setComment] = useState('')
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
      <p className={classes.title}>Edit Comment</p>
      <div className={classes.card}>
        <input
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
