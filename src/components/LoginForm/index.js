import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    PasswordInput: '',
    showPasswordInput:'',
    showUsernameError: false,
    showPasswordError: false,
    showPasswordErrorMSG: false,
    isFormLogin: false,
   
  }
  
  
  onBlurPassword = () => {
    const isValidPassword  = this.validatePassword ()

    this.setState({showPasswordError: !isValidPassword })
  }

  onChangePassword  = event => {
    const {target} = event
    const {value} = target

    this.setState({
      PasswordInput: value,
    })
  }



  renderPasswordField = () => {
    const { PasswordInput, showPasswordError} = this.state
    const className = showPasswordError
      ? 'name-input-field error-field'
      : 'name-input-field'
    
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="Password">
          PASSWORD
        </label>
        <input
          alt = 'Password'
          type="Password" 
          id="Password" 
          value={PasswordInput} 
          className={className}
          placeholder="Enter Your Password"
          onChange={this.onChangePassword}
          onBlur={this.onBlurPassword}
        />
      </div>
     
    )
  }

  onBlurUsername = () => {
    const isValidUsername  = this.validateUsername ()

    this.setState({showUsernameError: !isValidUsername })
  }

  onChangeUsername  = event => {
    const {target} = event
    const {value} = target

    this.setState({
      UsernameInput: value,
    })
  }

  renderUsernameField = () => {
    const {UsernameInput, showUsernameError} = this.state
    const className = showUsernameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="Username">
          USER NAME
        </label>
        <input
          type="text"
          id="Username "
          className={className}
          value={UsernameInput}
          placeholder="Enter Your UserName"
          onChange={this.onChangeUsername }
          onBlur={this.onBlurUsername }
        />
      </div>
    )
  }

  validatePassword = () => {
    const {PasswordInput} = this.state

    return PasswordInput !== ''
  }

  validateUsername = () => {
    const {UsernameInput} = this.state

    return UsernameInput !== ''
  }
  

  onLoginForm = event => {
    event.preventDefault()
    const isValidUsername  = this.validateUsername()
    const isValidPassword = this.validatePassword()

    if (isValidUsername && isValidPassword) {
      this.setState({isFormLogin: true})
    } else {
      this.setState({
        showUsernameError: !isValidUsername ,
        showPasswordError: !isValidPassword,
        isFormLogin: false,
      })
    }
  }
 
  
  renderLoginForm = () => {
    const {showUsernameError, showPasswordError} = this.state

    return (
      <form className="form-container" onSubmit={this.onLoginForm}>
        {this.renderUsernameField()}
        {showUsernameError && <p className="error-message">Enter Username</p>}
        {this.renderPasswordField()}
        {showPasswordError && <p className="error-message">Enter Password</p>}
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    )
  }
 
  onClickLoginAnotherResponse = () => {
    this.setState(prevState => ({
      isFormLogin: !prevState.isFormLogin,
      UsernameInput: '',
      PasswordInput: '',
    }))
  }

  renderLoginSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Login Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickLoginAnotherResponse}
      >
        Logout to Another Response
      </button>
    </>
  )

  render() {
    const {isFormLogin} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">LoginForm</h1>
        <div className="view-container">
          {isFormLogin
            ? this.renderLoginSuccessView()
            : this.renderLoginForm()}
        </div>
      </div>
    )
  }
}
export default LoginForm



