import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from "react-router-dom";
import './LoginSign.css';


function LoginForm(): JSX.Element {
  /*const [username, setUsername] = useState(''); // 사용자명 상태 변수
  const [password, setPassword] = useState(''); // 비밀번호 상태 변수
  const [isDisabled, setIsDisabled] = useState(true); // 버튼 비활성화 여부 상태 변수

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // 폼 제출 기본 동작 막음
    onSubmit(username, password); // 부모 컴포넌트로 사용자명과 비밀번호 전달
    setUsername(''); // 사용자명 상태 변수 초기화
    setPassword(''); // 비밀번호 상태 변수 초기화
  }

  function handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value.toLowerCase()); // 사용자명 입력 값 소문자로 변경 후 상태 업데이트
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value.toLowerCase()); // 비밀번호 입력 값 소문자로 변경 후 상태 업데이트
  }

  useEffect(() => {
    if (password !== '' && username !== '') {
      setIsDisabled(false); // 사용자명과 비밀번호가 비어있지 않으면 버튼 활성화
    } else {
      setIsDisabled(true); // 그렇지 않으면 버튼 비활성화
    }
  }, [username, password]);*/

  return (
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <Link to="../login"><span>Log In </span></Link>
                  <Link to="../signup"><span>Sign Up</span></Link>
                  </h6>
                <div className="card-3d-wrap mx-auto">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
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
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button type="submit" className="btn mt-4">
                            Submit
                          </button>
                          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
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

export default LoginForm;
