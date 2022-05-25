import PostStyle from './PostStyle.css'
export default function ContactsListItem({usersPostsList}) {
    return (
        <div>
            {usersPostsList.map(post =>
                <div className='row table-row-border'>
                    <button onClick={() => { }} >
                        <div className='col-12' id={post.title} >
                        <h5 className="style">Title:</h5>
                            {post.title}
                        </div> 
                        <div className='col-12' id={post.body} >
                        <h5 className="style">Body:</h5>
                            {post.body}
                        </div>
                    </button>
                </div>
            )}
        </div>

    )
}

