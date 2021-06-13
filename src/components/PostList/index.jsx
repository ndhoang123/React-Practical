import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: []
};

function PostList(props) {
    const {posts} = props;
    console.log(posts);
    return (
        <ul>
            {(posts && posts.length > 0) && posts.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

export default PostList;