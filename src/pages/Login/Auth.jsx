import './Auth.scss'
import Login from '../../components/login-components/Login'
import house from '../../assets/walpaper4.jpg'
import Register from '../../components/login-components/Register'

const Auth = () => {
  return (
    <div className='login-register-page'>
      <img className="background-image" src={house} alt=" background" />
      <div className="login-register-container">
        <Register/>
      </div>
    </div>
  )
}

export default Auth
