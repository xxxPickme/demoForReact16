import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store'



class Com extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    componentDidMount() {
        // axios.post('www.baidu.com', { a: 1 })
    }

    render() {
        return (
            <div style={{margin:'100px'}}>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{  width:"25%", marginRight:"1%"}}
                        onChange={this.BtnChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.BtnClick}
                    >
                        增加
                    </Button>
                    <List
                        style={{width:"25%",marginTop:"10px"}}
                        dataSource={this.state.data}
                        bordered
                        renderItem={item => <List.Item>{item}</List.Item>}
                    >

                    </List>
            </div>
        )
    }

    testRef = () => {
        this.setState({
            list: ["321", "456"]
        })
        setTimeout(() => {
            console.log("this.aaa", this.aaa.querySelectorAll("li").length)
        }, 0)

    }

    BtnClick = (e) =>{
        console.log("e",e.target)
        const action = {
            type:"addItem",
            value:e.target.value
        }
        store.dispatch(action)
        this.setState(store.getState())
    }

    BtnChange = (e) =>{
        const action = {
            type:"BtnChange",
            value:e.target.value
        }
        store.dispatch(action)
        console.log("e",e.target.value)
    }
}

Com.propTypes = {
    content: PropTypes.string.isRequired
}

export default Com;