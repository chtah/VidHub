import { useState } from 'react'
import { CreateVideoDTO, VideoPostDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const useVideoPost = () => {
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingButton, setIsLodingButton] = useState<boolean>(false)
  const navigate = useNavigate()
  const Submit = async (newVideoUrl: string, newComment: string, newRating: number) => {
    setIsLodingButton(true)
    const newPostBody: CreateVideoDTO = {
      videoUrl: newVideoUrl,
      comment: newComment,
      rating: newRating,
    }

    setIsLoading(true)
    try {
      const res = await axios.post<VideoPostDTO>('https://api.learnhub.thanayut.in.th/content', newPostBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(res.data)
    } catch (err) {
      throw new Error()
    } finally {
      setIsLodingButton(false)
      setIsLoading(false)
      navigate('/')
    }
  }

  return { isLoading, isLoadingButton, Submit }
}

export default useVideoPost
