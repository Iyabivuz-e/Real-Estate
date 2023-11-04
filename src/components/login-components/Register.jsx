import './Register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login-container'>
      <h1>Signup</h1>
      <p>Already have an account? <Link to ="/login">Login</Link></p>
      <form action="" method='' className='login-form'>
        <input type="text" name="fullname" placeholder='full name' />
        <input type="text" name="username" placeholder='username' />
        <input type="email" name="email" placeholder='email' />
        <input type="password" name="password" placeholder='password' />
        <input type="password" name="confirm-password" placeholder='confirm password' />
        {/* <Link to ="/register">Fogot Password</Link> */}
        <button className='login-btn'>Signup</button>
      </form>
    </div>
  )
}

export default Register
