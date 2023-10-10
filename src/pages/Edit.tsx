import { Rating, Star } from '@smastrom/react-rating'
import { useState } from 'react'
import useVideoEdit from '../hooks/useVideoEdit'

const Edit = () => {
  const [newRating, setRating] = useState(0)
  const [newComment, setComment] = useState('')
  const { Submit, isLoadingButton } = useVideoEdit()

  const handleClick = async () => {
    try {
      await Submit(newComment, newRating)
      setComment('')
      setRating(0)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <p>Edit Comment</p>
      <div>
        <label>Comment : </label>
        <input
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
    </>
  )
}
export default Edit
