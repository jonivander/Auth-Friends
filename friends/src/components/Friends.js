import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
                friends: res.data.friends,
            })
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
            {friends.map()}
        )
    }

}

export default Friends; 