
import React, { useEffect, useState } from "react";
import "../Users/Style.css"


function Users() { 
  const [user, setUser] = useState([]);
  const [Select, setSelect] = useState([]);
  const [Delete, setDelete] = useState([]);




 
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((Data) => setUser(Data));
  }

  useEffect(() => {
    fetchData();
  },[])
 

  const deletesetUser = (index) => {
    
    const test = [...user]
    test.splice(index, 1)
    console.log('setUser',test)
    setUser(test)
    setDelete (index)
    console.log("setUser",user)
   }

   const updatesetUser = (index) => {
    const test = [...user]
    // setUser([...user, Select])
    setUser(user.map(item => (item.id === Select.id ? Select : item)));
}

// function updatesetUser(e) {
//     setUser(e.target.value);
//     setDelete(true);
    
//   }
//   return{
//     user, setUser,
//     // Select,setSelect,
//     Delete,setDelete
//   }

//   function User() {
//     const name = setUser('some name');
//     const username = setUser('some username');
//     const email = setUser('some@mail.com');
//     const phone = setUser('some 1-770-736-8031 x56442');
//     const website = setUser('some hildegard.org');
  
//     return <input name="username" value={username.value} onChange={username.updatesetUser}/>;
//     return <input name="name" value={name.value} onChange={name.updatesetUser}/>;
//     return <input name="email" value={email.value} onChange={email.updatesetUser}/>;
//     return <input name="phone" value={phone.value} onChange={phone.updatesetUser}/>;
//     return <input name="website" value={website.value} onChange={website.updatesetUser}/>;
//   }

// const updatesetUser = e => {
//     const index = e.target.name
//     setDelete(existingValues => ({
//       // Retain the existing values
//       ...existingValues
//       // update the current field
//       [index]: e.target.value,
//     }))
//   }


  


  return (
    
    <div>
      <table className="table">
        <thead className="te">
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
            <th>Actions</th>
            {/* <th>Actions</th> */}
            </thead>
            <tbody>
            {user.map((userObj, index) => {
            return <tr>   
            <td> {userObj.id}</td>
            <td>{userObj.name}</td>
            <td>{userObj.username}</td>
            <td>{userObj.email}</td>
            <td>{userObj.phone}</td>
            <td>{userObj.website}</td>
        
           <td> <button className="but" onClick={() =>deletesetUser(index)}>Delete</button> </td>
<td> <button className="but" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => setSelect(() =>userObj )} >Edit</button></td>
        </tr>
})}
          
            </tbody>
            
        
      </table>
      <div className="modal clr" id="myModal">
                <div className="modal-dialog card clr">
                
                    <div className="modal-content clr br-5 ">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Data</h4>
                            <button type="button" className="btn-close"  data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div>
                                <div className="mb-3 mt-3">
                                    <label for="name" className="form-label">name:</label>
                                    <input type="name" className="form-control" id="name" placeholder="Enter name"
                                        name="name" value={Select?.name} onChange={(e) => setSelect((prev) => { return { ...prev, name: e.target.value } })} />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label for="name" className="form-label">username</label>
                                    <input type="name" className="form-control" id="username" placeholder="Enter username"
                                        name="name" value={Select?.username} onChange={(e) => setSelect((prev) => { return { ...prev, username: e.target.value } })} />
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="email"
                                        placeholder="Enter Email" name="pswd" value={Select?.email} onChange={(e) => setSelect((prev) => { return { ...prev, email: e.target.value } })} />
                                </div>
                               
                                <div className="mb-3">
                                    <label for="phone" className="form-label">phone</label>
                                    <input type="phone" className="form-control" id="phone"
                                        placeholder="Enter Mobile Number" name="phone" value={Select?.phone} onChange={(e) => setSelect((prev) => { return { ...prev, phone: e.target.value } })} />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label for="website" className="form-label">website</label>
                                    <input type="name" className="form-control" id="website" placeholder="Enter website"
                                        name="name" value={Select?.website} onChange={(e) => setSelect((prev) => { return { ...prev, website: e.target.value } })} />
                                </div>


                            </div>
                        </div>

                        <div class="modal-footer">
                        <button className="but" onClick={updatesetUser}>Update</button> 
                        <button type="button" class="btn but" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                 
                </div>
        
            </div>
          

      
    </div>
    
  );
}

export default Users;