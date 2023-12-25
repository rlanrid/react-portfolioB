import React, { useState } from 'react'
import axios from 'axios'
import firebase from '../../firebase.js'
import { FaRegCheckCircle } from "react-icons/fa";


const UserJoin = (props) => {
    const [youName, setYouName] = useState("");
    const [youEmail, setYouEmail] = useState("");
    const [youPass, setYouPass] = useState("");
    const [youPassC, setYouPassC] = useState("");
    const [flag, setFlag] = useState(false);
    const [nameCheck, setNameCheck] = useState(false);
    const [nameInfo, setNameInfo] = useState("")


    const JoinFunc = async (e) => {
        setFlag(true);
        e.preventDefault();

        if (!(youName && youEmail && youPass && setYouPassC)) {
            return alert("모든 항목을 입력해주세요.");
        }
        if (youPass !== youPassC) {
            return alert("비밀번호가 일치하지 않습니다.");
        }
        if (!nameCheck) {
            return alert("닉네임 중복 검사를 해주세요.");
        }

        // firebase
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(youEmail, youPass);

        await createdUser.user.updateProfile({
            displayName: youName,
        })

        console.log(createdUser.user);

        // mongoDB 회원가입
        let body = {
            email: createdUser.user.multiFactor.user.email,
            displayName: createdUser.user.multiFactor.user.displayName,
            uid: createdUser.user.multiFactor.user.uid,
        }

        axios
            .post("/api/user/join", body)
            .then((res) => {
                if (res.data.success) {
                    alert("회원가입이 완료되었습니다.");
                    window.location.reload();
                } else {
                    alert("회원가입 실패");
                }
            })
    }

    const NameCheckFunc = (e) => {
        e.preventDefault();
        if (!youName) {
            return alert("닉네임을 입력해주세요!");
        }
        let body = {
            displayName: youName,
        }

        axios.post("/api/user/namecheck", body).then((response) => {
            if (response.data.success) {
                if (response.data.check) {
                    setNameCheck(true);
                    setNameInfo("사용 가능한 닉네임입니다.");
                } else {
                    setNameInfo("사용할 수 없는 닉네임입니다.");
                }
            }
        })
    }

    return (
        <div className='join__wrap'>
            <div className="join__header">
                <h3>Join</h3>
                <p className='user__desc' onClick={() => { props.handleTabChange('login') }}>로그인</p>
            </div>
            <form className="join__form">
                <fieldset>
                    <legend className='blind'>회원가입 영역</legend>
                    <div className='join__name'>
                        <label htmlFor="youName" className='required blind'>Name</label>
                        <input
                            type='text'
                            id='youName'
                            name='youName'
                            placeholder='닉네임'
                            className='input__style'
                            autoComplete='off'
                            required
                            minLength={8}
                            value={youName}
                            onChange={(e) => setYouName(e.currentTarget.value)}
                        />
                    </div>
                    <div className="join__nameCheck">
                        <button onClick={(e) => NameCheckFunc(e)}>
                            {nameInfo === "사용 가능한 닉네임입니다." ? (
                                <FaRegCheckCircle className='check__success' />
                            ) : (
                                <FaRegCheckCircle />
                            )}

                        </button>
                    </div>
                    <div className={nameInfo ?
                        (nameInfo === "사용 가능한 닉네임입니다." ? ('user__msg join__success') : ('user__msg join__fail'))
                        : ("blind")}>
                        {nameInfo}
                    </div>
                    <div className="join__email">
                        <label htmlFor="youEmail" className='required blind'>Email</label>
                        <input
                            type="email"
                            id="youEmail"
                            name="youEmail"
                            placeholder="이메일"
                            className="input__style"
                            autoComplete='off'
                            required
                            minLength={8}
                            value={youEmail}
                            onChange={(e) => setYouEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className='join__password'>
                        <label htmlFor="youPass" className="required blind">비밀번호</label>
                        <input
                            type="text"
                            id="youPass"
                            name="youPass"
                            placeholder="비밀번호"
                            className="input__style"
                            autoComplete="off"
                            required
                            minLength={8}
                            value={youPass}
                            onChange={(e) => setYouPass(e.currentTarget.value)}
                        />
                    </div>
                    <div className='join__passwordC'>
                        <label htmlFor="youPassC" className="required blind">확인 비밀번호</label>
                        <input
                            type="text"
                            id="youPassC"
                            name="youPassC"
                            placeholder="확인 비밀번호"
                            className="input__style"
                            autoComplete="off"
                            required
                            minLength={8}
                            value={youPassC}
                            onChange={(e) => setYouPassC(e.currentTarget.value)}
                        />
                    </div>
                    <button disabled={flag} type='submit' className='user__submit' onClick={(e) => JoinFunc(e)}>회원가입</button>
                </fieldset>
            </form>
        </div >
    )
}

export default UserJoin
