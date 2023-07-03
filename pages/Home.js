import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { DeleteUserStart, loadUsersStart } from '../Redux/action';

import { MDBSpinner } from 'mdb-react-ui-kit';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { users, loading } = useSelector(state => state.data)
    console.log(users)

    useEffect(() => {
        dispatch(loadUsersStart());
    }, [])

    // if (loading) {
    //     return (
    //         <MDBSpinner style={{ marginTop: "150px" }} role="status">
    //             <span className='visually-hidden'>Loading...</span>
    //         </MDBSpinner>
    //     )
    // }
    function postDelete(id) {
        dispatch(DeleteUserStart(id))
    }
    return (
        <div>

            <div className='tablecontainer'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.length > 0 &&
                            users.map((user, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>

                                        <td>
                                            <NavLink className='edit' to={`/addUser/edit/${user.id}`}>Edit</NavLink>{" "}
                                            <button className='tablebutton' onClick={() => postDelete(user.id)}>Delete</button>{" "}
                                            <NavLink className='edit' to={`/view/${user.id}`}>view</NavLink>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default Home

