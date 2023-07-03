import React, { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import { showUserResClean, showUserStart } from "../Redux/action";

function ViewUser() {
    const navigate = useNavigate();

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUserStart(id));
        return () => {
            dispatch(showUserResClean());
        };
    }, [id]);
    const { users, isLoading, response } = useSelector((state) => state.data);
    const user = users.find((user) => user.id === id);
    console.log(response)

    return (
        <div >
            <div >
                {isLoading && (
                    <MutatingDots
                        height="100"
                        width="100"
                        color="blue"
                        secondaryColor="blue"
                        radius="12.5"
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                )}

                <div className="tablecontainer">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 && !isLoading && (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                    <NavLink to="/home">
                        <button className="tablebutton" >Go back</button>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default ViewUser;