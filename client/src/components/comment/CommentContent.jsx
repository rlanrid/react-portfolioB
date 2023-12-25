import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const CommentContent = (props) => {
    const user = useSelector((state) => state.user);
    const [editFlag, setEditFlag] = useState(false);
    const [comment, setComment] = useState(props.comment.comment);

    const SubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            uid: user.uid,
            comment: comment,
            commentId: props.comment._id
        }

        axios
            .post("/api/comment/edit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("수정되었습니다.");
                } else {
                    alert("댓글 수정 실패");
                }
                return window.location.reload();
            })
    }

    const DeleteHandler = (e) => {
        e.preventDefault();

        if (window.confirm("삭제하시겠습니까?")) {
            let body = {
                commentId: props.comment._id,
            }
            axios
                .post("/api/comment/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("댓글이 삭제되었습니다.");
                        window.location.reload();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert('댓글 삭제 실패');
                })
        }
    }

    return (
        <div className="list">
            {editFlag ? (
                <div>
                    <form className='co__edit__form'>
                        <input
                            className='input__style'
                            text="text"
                            value={comment}
                            onChange={(e) => { setComment(e.currentTarget.value) }}
                        />
                        <button onClick={(e) => { SubmitHandler(e) }}>Modify</button>
                        &nbsp;
                        <button onClick={(e) => {
                            e.preventDefault();
                            setEditFlag(false);
                        }}>Cancel</button>
                    </form>
                </div>
            ) : (
                <>
                    <div className="co__info">
                        <p className='co__title'>{props.comment.comment}</p>
                        <div className="co__author">
                            - {props.comment.author.displayName}
                        </div>
                    </div>
                    {props.comment.author.uid === user.uid && (
                        <div className="co__edit">
                            <p className='co__modify' onClick={() => {
                                setEditFlag(true);
                            }}><MdEdit /></p>
                            <p className='co__delete' onClick={(e) => DeleteHandler(e)}>
                                <MdDelete />
                            </p>
                        </div>
                    )}
                </>

            )}
        </div>
    )
}

export default CommentContent
