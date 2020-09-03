import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import './header-component-style.scss';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';

const Header = ({currentUser}) =>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                 
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>
                    SIGNOUT
                </div>
                :
                <Link to='/sign' className='option'>SIGN IN</Link>
            }

            

        </div>
    </div>
)

const mapStateToProps= state =>({
    currentUser:state.user.currentUser
});
export default connect(mapStateToProps)(Header);