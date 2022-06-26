import React from 'react';
import Auth from '../../utils/auth';
import logo from '../../assets/images/logo.jpg';


const Header = () => {
    const loggedIn = Auth.loggedIn();
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

return (
    <header>
        <div className='header'>
            <h1 className='header-h1'>
                Is the Future for Cars GAS or ELECTRIC?
            </h1>
        </div>
        <div >
            {/* <ul >
                <li className='login'>
                    <a login="login" href="">Login</a>
                </li>
                <li className='signup'>
                    <a signup="signup" href="">Sign Up</a>
                </li>
            </ul> */}
        </div>
        <div className= 'logo-div'>
        <img className='header-logo' src={logo} alt="BMW logo" />
        </div>
    </header>
)
}
export default Header;