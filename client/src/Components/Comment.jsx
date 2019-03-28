import React from 'react'

const Comment = ( {comment} ) => {
    return(
        <>
            <p>{comment.author.username}: {comment.comment}</p>
        </>
    )
}

export default Comment;