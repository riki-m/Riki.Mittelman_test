import { Link, useNavigate } from 'react-router-dom';


export default function ContactsListItem({ userItem }) {

    const navigate = useNavigate();

    const nav = () => {
        navigate("/UserPosts", { state: { userId: userItem.id, userName: userItem.name } })
    }
    return (
        <div className='row table-row-border'>

            <button onClick={nav} >
                <div className='row'>
                <div className='col-4' id={userItem.name} >
                    {userItem.name}
                </div>
                <div className='col-4' id={userItem.email} >
                    {userItem.email}
                </div>
                <div className='col-4' id={userItem.company.name} >
                    {userItem.company.name}
                </div>
                </div>
            </button>

        </div>



    )
}



