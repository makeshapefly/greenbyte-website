import React, {useState} from 'react';
import { Link } from "gatsby";
import "../styles/login.css";

const Login = () => {
    const [errorText, setErrorText] = useState('')

    const processLogin = e => {
        e.preventDefault()
        setErrorText("Incorrect Username or Password")
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <div className="container" style={{ marginTop: 50 }}>
                    <h2>{errorText}</h2>
                    <form onSubmit={processLogin}>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    &#160;Remember me
                                </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="d-grid">
                                <div className="row">
                                    <div className="col-6" style={{ fontSize: 24, color: '#000', marginTop: 10 }}>
                                        <a href="#">
                                            <div className="header-btn">
                                                <button
                                                    className="btn border-btn"
                                                    type="submit"
                                                //onClick={processLogin}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-6" style={{ fontSize: 24, color: '#000', marginTop: 10 }}>
                                        <a href="/">
                                            <div className="header-btn">
                                                <Link to="/">
                                                    <button
                                                        className="btn border-btn"
                                                    >
                                                        Back
                                                    </button>
                                                </Link>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;