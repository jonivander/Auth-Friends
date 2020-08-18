import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './AddFriend';


class Friends extends React.Component {
    state = {
        friends: []
    }; 

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            console.log(res)
            this.setState({
                ...this.state, 
                friends: res.data
            })
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Friends!</h1>
                <FriendForm />
                {this.state.friends.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <h4>{item.age}</h4>
                            <h4>{item.email}</h4>
                        </div>
                    )
                })}
                
            </div>
        )
    }

}

export default Friends; 