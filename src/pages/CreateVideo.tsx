import { FormEvent, useState } from 'react'
import classes from './CreateVideo.module.css'
import useVideoPost from '../hooks/useVideoPost'
import { Rating, Star } from '@smastrom/react-rating'

const Create = () => {
  const [newVideoUrl, setVideoUrl] = useState<string>('') //cant not hook because it need value from ui
  const [newComment, setComment] = useState<string>('') //cant not hook because it need value from ui
  const [newRating, setRating] = useState<number>(0)
  const { isLoadingButton, Submit } = useVideoPost()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      //const NumberNewRating = Number(newRating)
      await Submit(newVideoUrl, newComment, newRating)
      setVideoUrl('')
      setComment('')
      setRating(0)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className={classes.postForm} onSubmit={handleSubmit}>
      <div className={classes.labelAndInput}>
        <label>Video Url : </label>
        <input
          className={classes.input}
          placeholder="Insert Youtube URL"
          type="text"
          required
          onChange={(e) => {
            setVideoUrl(e.target.value)
          }}
          value={newVideoUrl}
        />
      </div>
      <div className={classes.labelAndInput}>
        <label>Comment : </label>
        <input
          className={classes.input}
          placeholder="Insert comment here"
          type="text"
          required
          onChange={(e) => {
            setComment(e.target.value)
          }}
          value={newComment}
        />
      </div>
      <div className={classes.Star}>
        <Rating
          value={newRating}
          onChange={setRating}
          itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }}
          style={{ maxWidth: 200 }}
        />
      </div>

      <button className={isLoadingButton ? classes.buttonLoading : classes.button} disabled={isLoadingButton}>
        {isLoadingButton ? 'Submitting' : 'Submit'}
      </button>
    </form>
  )
}

export default Create
