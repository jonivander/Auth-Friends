import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form, Input, Button } from 'reactstrap'; 


const initialFormValues = {
    name: '',
    age: '',
    email: '',
    id: new Date(), 
}

const initialFriends = [];

const FriendForm = (props) => {
    const {setFriends} = props
    const [formValue, setFormValue] = useState(initialFormValues)

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = (newFriend) => {
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res)
                setFriends(res.data)
                setFormValue(initialFormValues)
            })
            .catch((err) => console.log(err))
    }

    const submit = (e) => {
        e.preventDefault()
        const newFriend = {
            name: formValue.name, 
            age: formValue.age, 
            email: formValue.email, 
        }
        addFriend(newFriend)
    }

    return (
        <Form onSubmit={submit}>
            <label>Name:
                <Input 
                    type='text'
                    name='name'
                    id='name'
                    value={formValue.name}
                    onChange={handleChange}
                />
            </label>

            <label>Age:
                <Input 
                    type='text'
                    name='age'
                    id='age'
                    value={formValue.age}
                    onChange={handleChange}
                />
            </label>

            <label>Email:
                <Input 
                    type='email'
                    name='email'
                    id='email'
                    value={formValue.email}
                    onChange={handleChange}
                />
            </label>

            <Button>Add that friend!</Button>
        </Form>
    )
}

export default FriendForm; 