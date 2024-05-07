import React from 'react';
import { Link } from "gatsby";
import "../styles/login.css";

const Login = () => {
    return (
        <div className="container" style={{ marginTop: 50 }}>
            <form>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
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
                                            data-bs-toggle="modal"
                                            data-bs-target="#connectModal"
                                            type="submit"
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
    )
}
export default Login;