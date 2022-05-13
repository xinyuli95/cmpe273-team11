/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import {Link} from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);
    const [filterUser, setFilteredUser] = useState("");

    console.log(filterUser)
    console.log(users)
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get(
                    `/api/user/userList?name=${filterUser}`
                );
                setUsers(res.data);
                console.log(res.data);


            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, [filterUser]); //changes when click to another category or search


    return (
        <>
            <div className="users">
                <div className="d-flex">
                    <h2 className="fs-headline1" style={{fontSize:"29px"}}>Users</h2>
                </div>

                <div className="d-flex align-items-end justify-content-between my-3">
                    <input
                        name="name"
                        type="text"
                        placeholder="Filter by user"
                        onChange={(e) => setFilteredUser(e.target.value)}

                    />
                </div>

                <div className="users mt-4">
                    <div className="users-wrapper row no-gutters">
                        {/* start iterating users  */}
                        {users.map((user) => (
                            <div className="col-3 d-flex flex-column tag-card">
                                <div className="user-content-wrapper">
                                    <div className="d-flex">
                                        <div className="users-avatar">
                                            <img
                                                // src={user?.profilepicture}
                                                src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"
                                                alt="user avatar"
                                                width="48"
                                                height="48"
                                                className="rounded"
                                            />
                                        </div>
                                        <div className="user-details d-flex flex-column ml-2">
                                            <Link to={`/userProfile/${user._id}`} className="users-name">
                                                {user.name}
                                            </Link>
                                            <span className="users-location">{user.location}</span>
                                            <div className="users-reputation">
                      <span className="reputation-score">
                        {user.reputation}
                      </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* user iteration end */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Users;
