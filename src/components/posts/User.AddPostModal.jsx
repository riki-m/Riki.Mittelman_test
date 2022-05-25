import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function AddPostModal({useData, displayModal, setDisplayModal, saveNewPost, newPostId }) {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const savePostTitle = (value) => {
            setPostTitle(value);
    }
    const savePostBody = (value) => {
        setPostBody(value);
}
    const submitPost = () => {

        setDisplayModal(false);
        const postData = {userId: useData.userId, title: postTitle, id: useData.id, body: postBody};
        saveNewPost(postData);
    }
    return (
        <div>
            <Modal
                show={displayModal}
                onHide={() => setDisplayModal(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Add Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='row'>
                            <div className='col-6'>
                                <label className='col-12 control-label'>Title</label>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    value={postTitle}
                                    onChange={(e) => savePostTitle(e.target.value)}
                                    className='col-12 form-control edit-icon'
                                />
                            </div>
                            <div className='col-12'>
                                <label className='col-12 control-label'>Body</label>
                                <input
                                    type='text'
                                    id='body'
                                    name='body'
                                    value={postBody}
                                    onChange={(e) => savePostBody(e.target.value)}
                                    className='col-12 form-control search-icon'
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

     
                    <button  className='button-blue modal-button' type="submit" onClick={() => { submitPost() }}>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddPostModal;
