import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentContent from './CommentContent';
import { useSelector } from 'react-redux';

const CommentList = (props) => {
    const [commentList, setCommentList] = useState([]);
    const user = useSelector((state) => state.user);

    const getCommentList = () => {
        axios
            .post("/api/comment/list")
            .then((res) => {
                if (res.data.success) {
                    console.log(res);
                    setCommentList([...res.data.commentList]);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getMyList = () => {
        let body = {
            uid: user.uid,
        }

        axios
            .post("/api/comment/filter", body)
            .then((res) => {
                if (res.data.success) {
                    console.log(res);
                    setCommentList([...res.data.commentList]);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (user.accessToken) {
            if (props.state === true) {
                getMyList();
            } else {
                getCommentList();
            }
        } else {
            getCommentList();
        }
    }, [user, props.state])

    return (
        <div className="comment__list">
            {commentList.map((comment, idx) => {
                return (
                    <CommentContent comment={comment} key={idx} />
                )
            })}
        </div>
    )
}

export default CommentList
