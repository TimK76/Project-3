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
        <div>
            <h1>
                <a home="link" href="/">
                    Sales Managers' Five Year Projections
                </a>
            </h1>
        </div>
        <div>
            <ul>
                <li>
                    <a login="login" href="">Login</a>
                </li>
                <li>
                    <a signup="signup" href="">Sign Up</a>
                </li>
            </ul>
        </div>
        <div>
            <img src={logo} alt="BMW logo" />
        </div>
    </header>
)
}
export default Header;