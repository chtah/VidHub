import { FormEvent, useState } from 'react'
import classes from './Login.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault() //Dont forget () I will forget mostly
    const notifySuccess = () => {
      toast.success('Login Success', { position: 'top-center', duration: 3000 })
    }
    const notifyError = () => {
      toast.error('Wrong username or password', { position: 'top-center', duration: 1500 })
    }
    try {
      await login(username, password)
      navigate('/')
      setTimeout(() => {
        notifySuccess()
      }, 500)
    } catch (err) {
      notifyError()
      console.log(err)
    }
  }

  return (
    <>
      <Toaster />
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <label className={classes.label}>Username</label>
        <input className={classes.input} type="text" onChange={(e) => setUsername(e.target.value)} />

        <label className={classes.label}>Password</label>
        <input className={classes.input} type="Password" onChange={(e) => setPassword(e.target.value)} />

        <button className={classes.button} type="submit">
          Login
        </button>
      </form>
    </>
  )
}
export default Login
