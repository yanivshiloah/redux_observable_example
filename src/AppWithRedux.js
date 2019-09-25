import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

const getData = () => {
    return async dispatch => {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5f862666cc4aa08c2e5f5c61a85e83');
        const json = await response.json();
        dispatch({type: 'GET_DATA', payload: {...json, updatedAt: Date.now()}});
    };
};

class AppWithRedux extends Component {
    componentDidMount() {
        /*this.props.dispatch(getData());*/
        this.props.dispatch({type: 'FETCH_DATA'});
    }

    render() {
        const {data} = this.props;
        return (
            <div className="App">
                {data && <div>{new Date(data.updatedAt).toLocaleString()}</div>}
                {data && <ul>{data.articles.map(a => <li>{a.content}</li>)}</ul>}
            </div>
        );
    }
}

export default connect(state => ({data: state.dataReducer}))(AppWithRedux);
