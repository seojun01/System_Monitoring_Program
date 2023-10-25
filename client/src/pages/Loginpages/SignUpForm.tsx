import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './LoginSign.css';

function SignUpForm(): JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');

    function checkSignUp(e: FormEvent) {
        e.preventDefault();

        // 회원가입 유효성 검사
        if (name.trim() === '') {
            alert('이름을 입력하세요.');
            return;
        }

        if (email.trim() === '') {
            alert('이메일을 입력하세요.');
            return;
        }

        if (phonenumber.trim() === '') {
            alert('전화번호을 입력하세요.');
            return;
        }

        if (password.trim() === '') {
            alert('비밀번호를 입력하세요.');
            return;
        }

        alert('회원가입 성공!');
    }

    return (
        <div className="section">
            <div className="container" style={{ backgroundColor: '#1f2029' }}>
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3">
                                <Link to="../login" style={{ textDecoration: 'none' }}>
                                    <span>Log In </span>
                                </Link>
                                <Link to="../signup" style={{ textDecoration: 'none' }}>
                                    <span>Sign Up</span>
                                </Link>
                            </h6>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="title">Sign Up</h4>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="logname"
                                                        className="form-style"
                                                        placeholder="Your Full Name"
                                                        id="logname"
                                                        autoComplete="off"
                                                        value={name}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                            setName(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="email"
                                                        name="logemail"
                                                        className="form-style"
                                                        placeholder="Your Email"
                                                        id="logemail"
                                                        autoComplete="off"
                                                        value={email}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                            setEmail(e.target.value)
                                                        }
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="tell"
                                                        name="phonenumber"
                                                        className="form-style"
                                                        placeholder="Your Phone Number"
                                                        id="phonenumber"
                                                        autoComplete="off"
                                                        value={phonenumber}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                            setPhonenumber(e.target.value)
                                                        }
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="password"
                                                        name="logpass"
                                                        className="form-style"
                                                        placeholder="Your Password"
                                                        id="logpass"
                                                        autoComplete="off"
                                                        value={password}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                            setPassword(e.target.value)
                                                        }
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button type="submit" className="btn mt-4" onClick={checkSignUp}>
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
