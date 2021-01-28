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
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value})
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
                <h1> Welcome to Notesy!</h1>
                <section className='info-boxes'>
                    <section className='go-box' id='regbox'>
                        <h2>New to Notesy?<br/>Register here!</h2>
                        <input
                            value={this.state.username}
                            name='username'
                            placeholder='Username'
                            onChange={e => this.handleInput(e)}
                            />
                        <input 
                            value={this.state.email}
                            name='email'
                            placeholder='Email address'
                            onChange={e => this.handleInput(e)}
                            />
                        <input
                            value={this.state.password}
                            name='password'
                            type='password'
                            placeholder='Password'
                            onChange={e => this.handleInput(e)}
                            />
                        <input
                            value={this.state.verify}
                            name='verify'
                            type='password'
                            placeholder='Verify Password'
                            onChange={e => this.handleInput(e)}
                            />
                        <button onClick={this.handleRegister}>Go!</button>
                    </section>
                    <section className='go-box' id='logbox'>
                        <h2>Already registered?<br/>Login here!</h2>
                        <input 
                            value={this.state.email}
                            name='email'
                            placeholder='Email address'
                            onChange={e => this.handleInput(e)}
                            />
                        <input
                            value={this.state.password}
                            name='password'
                            type='password'
                            placeholder='Password'
                            onChange={e => this.handleInput(e)}
                            />
                        <button onClick={this.handleLogin}>Go!</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth)