import React from 'react';
import '../App.css';
import axios from 'axios';
import { BsTrash } from 'react-icons/bs';
import { reactLocalStorage } from 'reactjs-localstorage';

const CommentContainer = (props) => {
    const comment = props.comment;

    const DeleteComment = () => {
        const header = {
            headers: {
                'Authorization': reactLocalStorage.get('token')
            }
        }

        axios.post('/api/auth', null, header).then(response => {
            if (response.data.data.user.username === comment.author) {
                axios.delete('/api/comments/' + comment.project, {
                    headers: {
                        'Authorization': reactLocalStorage.get('token')
                    },
                    data: {
                        project: comment.project,
                        author: comment.author,
                        description: comment.description,
                        published_date: comment.published_date
                    }
                }).then(res => {
                    window.location.reload(false);
                }).catch(err => {
                    console.log("Error in Delete Comment!");
                })
            }
        });
    }

    return (
        <div className="comment-container">
            <div className="comment">
                <h2>
                    <h3>{comment.author}, {comment.published_date} <BsTrash onClick={DeleteComment.bind()} /></h3>
                </h2>
                <br />
                <p>{comment.description}</p>
            </div>
        </div>
    )
};

export default CommentContainer;