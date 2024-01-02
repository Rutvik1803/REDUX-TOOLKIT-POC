import { Col, Row,Card, Space, Button } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser, removeAllUser } from '../store/slices/UserSlice'
import UserList from './UserList'


const UserDisplay = () => {
    const dispatch = useDispatch();
    const addNewUser = () =>{
        dispatch(addUser(fakeUserData()));
    }
    const removeAll = () =>{
        dispatch(removeAllUser());
    }
  return (
    <Row>
        <Col span={24}>
      <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
      <Title>User Dashboard</Title>
      </Col>
      <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
      <Space direction="vertical" size={16}>
    <Card
      title={<Title level={2} type='danger'>User List</Title>}
      extra={ <Button type="text" danger onClick={()=>{addNewUser()}}>
     Add New User
    </Button>}
      style={{
        width: "80vw",
      }}
    >
     <UserList/>
    </Card>
  </Space>
      </Col>
      <Col span={24} style={{display: 'flex', justifyContent: 'center', marginTop: '12px'}}>
      <Button type="text" danger onClick={()=>{removeAll()}}>
     Delete All User
    </Button>
      </Col>
      </Col>
    </Row>
  )
}

export default UserDisplay
