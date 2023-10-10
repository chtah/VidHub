import { useEffect, useState } from 'react'
import { VideoPostDTO } from '../types/dto'
import axios from 'axios'

const useVideoPost = () => {
  const [newVideoPost, setNewVideoPost] = useState<VideoPostDTO[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get('https://api.learnhub.thanayut.in.th/content')
        setNewVideoPost(res.data.data)
      } catch (err) {
        console.log('error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { newVideoPost, isLoading }
}

export default useVideoPost
