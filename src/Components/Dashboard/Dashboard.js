import {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: []
        }
    }

    getUserNotes = () => {
        axios.get(`/api/notes/${this.props.user_id}`)
            .then(res => {
                this.setState({posts: res.data})
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getUserNotes()
    }

    handleInput = (val) => {
        this.setState({noteBody: val})
    }

    createNote = () => {
        axios.post('/api/note', {id: this.props.user_id})
            .then(() => {
                this.props.history.push('/editor')
            })
            .catch(err => console.log(err))
    }

    deleteNote = (id) => {
        axios.delete(`/api/note/${id}`)
            .then(() => {
                this.getUserNotes()
            })
            .catch(err => console.log(err))
    }

    render(){return(
            <section className='dashboard'>
                <button onClick={this.createNote}>Create a Note</button>
                <h1>Your Notes</h1>
                <div className='note-flex'>
                    {this.state.notes.map(note => (
                        <div key={note.note_id}>
                            <div className='note-preview'>
                                <h3>Placeholder Title</h3> 
                                <button onClick={() => this.deleteNote(note.note_id)}>Delete Note</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.user.user_id
    }
}

export default connect(mapStateToProps)(Dashboard)