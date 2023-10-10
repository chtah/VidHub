import { useState } from 'react'
import { VideoEditDTO } from '../types/dto'
import axios from 'axios'

const useVideoEdit = () => {
  const token = localStorage.getItem('token')
  const videoID = localStorage.getItem('videoID')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingButton, setIsLodingButton] = useState<boolean>(false)

  const Submit = async (newComment: string, newRating: number) => {
    setIsLodingButton(true)
    const newPostBody: VideoEditDTO = {
      comment: newComment,
      rating: newRating,
    }

    setIsLoading(true)
    try {
      const res = await axios.patch<VideoEditDTO>(
        `https://api.learnhub.thanayut.in.th/content/${videoID}`,
        newPostBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(res.data)
    } catch (err) {
      throw new Error()
    } finally {
      setIsLodingButton(false)
      setIsLoading(false)
    }
  }

  return { isLoading, isLoadingButton, Submit }
}

export default useVideoEdit
