import React from 'react';
import PropTypes from 'prop-types';

ListPost.propTypes = {
    posts: PropTypes.array.isRequired,
};

function ListPost(props) {
    const {posts} = props;

    return (
        <ul>
            {
                posts.map((post) => (
                    <li key = {post.id} style = {{listStyle: 'none', display: 'flex'}}>
                        {post.id} - {post.title || post.name}
                    </li>
                ))
            }
        </ul>
    );
}

export default ListPost;