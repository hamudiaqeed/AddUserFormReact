import React from 'react';
import PostItem from './PostItem';

function PostList(props) {

    const {posts} = props;

    return(
        <div>
            <h2>Lista Postari</h2>
            {
                posts.map((post, index) => {
                    return <PostItem 
                        title = {post.title}
                        body = {post.body}
                        key = {index}
                    />
                })
            }
        </div>
    );
}

export default PostList;