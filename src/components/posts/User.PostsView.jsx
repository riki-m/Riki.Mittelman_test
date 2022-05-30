import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import ApiService from '../services/api.sevice'
import UsersPostsListView from '../posts/User.PostsListView'
import AddPostModal from '../posts/User.AddPostModal';
import PostStyle from './PostStyle.css'

export default function UserPostsView({ userId }) {
    const location = useLocation();
    const [usersPostsList, setUsersPostsList] = useState();
    const [dispalyAddPostModal, setDispalyAddPostModal] = useState(false);
    const [postListLength, setPostListLength] = useState(0);
    useEffect(() => {
        getPostsList();
    }, []);
// service function 
    function getPostsList() {
        const userId = location.state.userId;
        ApiService.getPostsList()
            .then((response) => {
                setPostListLength(response.data.length);
                const userPosts = response.data.filter(post => post.userId === userId);
                setUsersPostsList(userPosts)
            }).catch((error) => {
                console.log(error);
                return error;
            });
    }

    const displayAddPostModal = () => {
        setDispalyAddPostModal(true);
    }
    const saveNewPost = (data) => {
        const postsArray = usersPostsList;
        postsArray.push(data);
        setUsersPostsList(postsArray);
        const payload = JSON.stringify(data);
        ApiService.addNewUserPost(payload);
    }

    return (
        <div className="wrapper">
            <h1 className='userName'>{location && location.state && location.state.userName}</h1>
            {usersPostsList ?
                <UsersPostsListView usersPostsList={usersPostsList} /> : null
            }
           <div className='btn'>
            <button type="button"  class="btn btn-dark" onClick={displayAddPostModal}>Add Post</button>
            </div>
            {dispalyAddPostModal && <AddPostModal displayModal={dispalyAddPostModal} setDisplayModal={setDispalyAddPostModal} saveNewPost={saveNewPost} useData={{id: postListLength, userId: location.state.userId}}/>}
        </div>
    )
}



