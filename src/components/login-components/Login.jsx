import './Login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <p>Do not have an account? <Link to ="/register">Register</Link></p>
      
      <form action="" method='' className='login-form'>
        <input type="text" name="username" placeholder='username' />
        <input type="password" name="password" placeholder='password' />
        <Link to ="/register">Fogot Password</Link>
        <button className='login-btn'>LogIn</button>
      </form>
    </div>
  )
}

export default Login
