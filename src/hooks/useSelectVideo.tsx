import { useEffect, useState } from 'react'
import { VideoPostDTO } from '../types/dto'
import axios from 'axios'

const useSelectVideo = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [videoDetail, newVideoDetail] = useState<VideoPostDTO | null>(null)
  const [isError, setIsError] = useState<boolean>(false)
  const [youtubeSrc, newYoutubeSrc] = useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`https://api.learnhub.thanayut.in.th/content/${id}`)
        newVideoDetail(res.data)
        newYoutubeSrc(res.data.videoUrl)
        localStorage.setItem('videoID', res.data.id)
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  return { isLoading, videoDetail, isError, youtubeSrc }
}
export default useSelectVideo
