import {Component} from 'react'

import {FaUserAlt} from 'react-icons/fa'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import Message from '../Message'
import './index.css'

class Login extends Component {
  state = {click: false, pv: false, nameIn: '', passIn: '', error: ''}

  login = () => {
    const {nameIn, passIn} = this.state
    if ((nameIn && passIn) === '') {
      this.setState({error: 'fill the details'})
    } else {
      this.setState(prev => ({
        click: !prev.click,
        nameIn: '',
        passIn: '',
        error: '',
      }))
    }
  }

  logout = () => {
    const {click} = this.state
    this.setState(prev => ({click: !prev.click}))
  }

  visible = () => {
    const {pv} = this.state
    this.setState(prev => ({pv: !prev.pv}))
  }

  Invisible = () => {
    const {pv} = this.state
    this.setState(prev => ({pv: !prev.pv}))
  }

  name = e => {
    this.setState({nameIn: e.target.value})
  }

  pass = e => {
    this.setState({passIn: e.target.value})
  }

  renderLogin = () => {
    const {pv, error, type} = this.state
    return (
      <div>
        <div className="input-container">
          <FaUserAlt className="icon" />
          <input onChange={this.name} className="input-text" type="text" />
        </div>
        <div className="input-container">
          {pv ? (
            <AiFillEye className="icon" onClick={this.visible} />
          ) : (
            <AiFillEyeInvisible onClick={this.Invisible} className="icon" />
          )}
          <input
            onChange={this.pass}
            className="input-text"
            type={pv ? 'text' : 'password'}
          />
        </div>
        <div className="check-div">
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <a href="d">Terms & Conditions</a>
          </label>
        </div>
        <button type="button" className="login-button" onClick={this.login}>
          Login
        </button>
        <div className="down">
          <a className="a" href="e">
            ForgotPassword
          </a>
          <a className="a" href="e">
            Support
          </a>
        </div>
        <p className="error">{error}</p>
      </div>
    )
  }

  renderLogout = () => (
    <button type="button" className="logout-button" onClick={this.logout}>
      Logout
    </button>
  )

  render() {
    const {click, nameIn} = this.state
    console.log(nameIn)
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={click} />
          {click ? this.renderLogout() : this.renderLogin()}
        </div>
      </div>
    )
  }
}

export default Login
