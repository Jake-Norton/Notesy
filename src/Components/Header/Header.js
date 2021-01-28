import {Link, withRouter} from 'react-router-dom';
import './Header.css';

const Header = props => {
    return (
        <header className='header'>
            <h1>Notesy</h1>
            {props.location.pathname !== '/'
            ? (
                <nav>
                    <h3>Placeholder Text</h3>
                </nav>
            )
            : null}
        </header>
    )
}

export default withRouter(Header)