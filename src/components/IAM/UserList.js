import React, {useState,useEffect} from 'react';
import services from '../../services';

const UserList = () => { 
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        let master = () => {
            services.userServicesAPI.userList().then((response) => setUserList(response.data)).catch((error) => console.log(error));
        }
        master();
    },[])

    // const userListFun = () => { 
        
    // }
    return (
        <div>
            <h4>User List</h4>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Email</td>
                        <td>Mobile Number</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {userList.length > 0 ? userList.map((item, i) => (<tr>
                         <td>{item._id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                         <td>{item.status }</td>
                    </tr>)) : ""}
                    
                </tbody>
            </table>
            {/* <button onClick={()=>userListFun()}>User List</button> */}
        </div>
    )
}

export default UserList;