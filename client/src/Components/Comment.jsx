import React from 'react'

const Comment = ( {comment} ) => {
    return(
        <>
            <div className="comment-div">
                <p><span className="comment-author">{comment.author.username}:</span> <span className="comment">{comment.comment}</span></p>
            </div>
        </>
    )
}

export default Comment;