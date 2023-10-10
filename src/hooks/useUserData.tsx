import axios from 'axios'
import { userDataDTO } from '../types/dto'
import { useEffect, useState } from 'react'

const useUserData = () => {
  const [newUserData, setnNewUserData] = useState<userDataDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<userDataDTO>('https://api.learnhub.thanayut.in.th/auth/me', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        setnNewUserData(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [token])

  return { newUserData, isLoading }
}
export default useUserData
