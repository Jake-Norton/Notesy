import {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer'
import './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
             username: '',
             email: '',
             password: '',
             verify: '',
             doRegister: false,
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleToggle = () => {
        this.setState({doRegister: !this.state.doRegister})
    } 

    handleLogin = () => {
        const {email, password} = this.state
        
        axios.post('api/login', {email, password})
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/dash')
            })
            .catch(err => console.log(err))
    }

    handleRegister = () => {
        const {username, email, password, verify} = this.state

        if (password && password === verify) {
            axios.post('/api/register', {username, email, password})
                .then(res => {
                    this.props.getUser(res.data)
                    this.props.history.push('/dash')
                })
                .catch(err => console.log(err))
        } else {
            alert("Passwords do not match.")
        }
    }

    render () {
        return (
            <div className='auth-options'>
                <section className='info-box'>
                    <h2>Welcome to Notesy!</h2>
                    {this.state.doRegister
                        ? (
                            <>
                                <h3>Register</h3>
                                <input
                                    value={this.state.username}
                                    name='username'
                                    placeholder='Username'
                                    onChange={e => this.handleInput(e)} />
                            </>
                        )
                        : <h3>Login</h3>}
                    <input
                        value={this.state.email}
                        name='email'
                        placeholder='Email'
                        onChange={e => this.handleInput(e)}/>
                    <input
                        value={this.state.password}
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={e => this.handleInput(e)}/>
                    {this.state.doRegister
                        ? (
                            <>
                                <input 
                                    value={this.state.verify}
                                    name='verify'
                                    type='password'
                                    placeholder='Verify password'
                                    onChange={e => this.handleInput(e)} />
                                <button onClick={this.handleRegister}>Go!</button>
                                <p>Already have an account? <span onClick={this.handleToggle}>Login here!</span></p>
                            </>
                        )
                        : (
                            <>
                                <button onClick={this.handleLogin}>Go!</button>
                                <p>Don't have an account? <span onClick={this.handleToggle}>Register here!</span></p>
                            </>
                        )}
                </section>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth)