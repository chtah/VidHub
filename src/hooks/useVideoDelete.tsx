import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useVideoDelete = () => {
  const token = localStorage.getItem('token')
  const videoID = localStorage.getItem('videoID')
  const navigate = useNavigate()
  const [isLoadingDeleteButton, setIsLoadingDeleteButton] = useState<boolean>(false)
  const videoDelete = async () => {
    const notifyDeleted = () => {
      toast.success('Deleted', { position: 'top-center', duration: 2000 })
    }
    setIsLoadingDeleteButton(true)
    try {
      await axios.delete(`https://api.learnhub.thanayut.in.th/content/${videoID}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      navigate('/')
      setTimeout(() => {
        notifyDeleted()
      }, 500)
    } catch (err) {
      console.log('error')
    } finally {
      setIsLoadingDeleteButton(false)
    }
  }

  return { videoDelete, isLoadingDeleteButton }
}

export default useVideoDelete
