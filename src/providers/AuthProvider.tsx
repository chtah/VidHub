import axios from 'axios'
import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'
import { useNavigate } from 'react-router'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<IAuthContextType | null>(null)
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used')
  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggIn] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)
  const navigate = useNavigate()

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }
    try {
      const res = await axios.post<CredentialDTO>('https://api.learnhub.thanayut.in.th/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', username)

      setIsLoggIn(true)
      setUsername(username)
    } catch (err) {
      throw new Error('invalid username or password')
    }
  }

  const logout = () => {
    window.location.reload()
    localStorage.clear(), setUsername(null), setIsLoggIn(false), navigate('/')
  }

  return <AuthContext.Provider value={{ isLoggedIn, login, username, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
