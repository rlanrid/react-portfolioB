import React from 'react'
import UserArea from '../user/UserArea'

const Modal = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className='user__wrap'>
            <UserArea toggleModal={props.toggleModal} />
        </div>
    )
}

export default Modal
