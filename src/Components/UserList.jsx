import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    DeleteOutlined
  } from '@ant-design/icons';
import { removeUser } from '../store/slices/UserSlice';

const UserList = () => {
    const dispatch = useDispatch();

    const userList = useSelector((state)=>{
        return state.users;
    })
    const deleteUser = (key) =>{
        dispatch(removeUser(key));

    }
   
  return (
    <>
        {userList.map((user,key)=>{
          return <>
        <div key={key} style={{display:'flex', justifyContent: 'space-between'}}>
          <p >{user}</p>
          <DeleteOutlined onClick={()=>{deleteUser(key)}} style={{marginRight: "50px"}} />   
        </div>
           </>
        })
      }
     
    </>
  )
}

export default UserList
