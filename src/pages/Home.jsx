import { Fragment, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { Divider } from '@mui/material';

export const Home = () => {
    const { user } = useContext(AuthContext);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((usersResponse) => {
                setUsers(usersResponse.users);
            });
    }, []);

    return (
        <section>
            <p>This is Home Page</p>

            <div>
                <h3>User Information</h3>

                <div>
                    {users.map((user) => (
                        <Fragment key={user.id}>
                            <div>
                                <p>User Name: {user.firstName}</p>
                                <p>User Age: {user.age}</p>
                                <p>User Gender: {user.gender}</p>
                            </div>

                            <Divider />
                        </Fragment>
                    ))}
                </div>

                
            </div>
        </section>
    );
};