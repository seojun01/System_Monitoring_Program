import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LoginSign.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function LoginForm(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formRef = useRef(null); // useRef를 컴포넌트 상단에 정의

    const [cookies, setCookie] = useCookies(['id']); // 쿠키 훅

    function checklogin(e: FormEvent) {
        e.preventDefault(); // 이벤트 기본 동작을 막음 (페이지 새로고침 방지)

        //로그인 유효성 검사
        if (email.trim() === '') {
            alert('이메일을 입력하세요.');
            return;
        }

        if (password.trim() === '') {
            alert('비밀번호를 입력하세요.');
            return;
        }

        axios
            .post('/signin', {
                // 로그인 요청
                email: email,
                password: password,
            })
            .then((res: any) => {
                setCookie('id', res.data.token); // 쿠키에 토큰 저장
            });
    }

    return (
        <form name="loginFrm" method="post" onSubmit={checklogin}>
            <div className="container" style={{ backgroundColor: '#1f2029' }}>
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pbs-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3">
                                <Link to="../login" style={{ textDecoration: 'none' }}>
                                    <span>Log In </span>
                                </Link>
                                <Link to="../signup" style={{ textDecoration: 'none' }}>
                                    <span>Sign Up</span>
                                </Link>
                            </h6>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-front">
                                    <div className="center-wrap">
                                        <div className="section text-center">
                                            <h4 className="mb-4 pb-3">Log In</h4>
                                            <div className="form-group"></div>
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
                                            <button type="submit" className="btn mt-4">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
