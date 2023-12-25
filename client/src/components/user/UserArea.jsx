import React, { useState } from 'react'
import UserJoin from './UserJoin'
import UserLogin from './UserLogin'
import { IoMdClose } from "react-icons/io";

const UserArea = (props) => {
    const [activeTab, setActiveTab] = useState('join');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='user__cont'>
            <button className="modal__close" onClick={() => { props.toggleModal() }}>
                <IoMdClose className='modal__icon' />
            </button>
            {activeTab === 'join' ? <UserJoin handleTabChange={handleTabChange} /> : <UserLogin handleTabChange={handleTabChange} />}
        </div>
    )
}

export default UserArea
