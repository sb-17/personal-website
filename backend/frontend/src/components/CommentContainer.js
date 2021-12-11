import React from 'react';
import '../App.css';

const CommentContainer = (props) => {
    const comment = props.comment;

    return (
        <div className="comment-container">
            <div className="comment">
                <h2>
                    <h3>{comment.author}, {comment.published_date}</h3>
                </h2>
                <br />
                <p>{comment.description}</p>
            </div>
        </div>
    )
};

export default CommentContainer;