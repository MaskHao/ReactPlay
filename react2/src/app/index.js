/**
 * Created by WillWang on 2017/5/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect, Timeline, Select, Row, Col    } from 'antd';


class Welcome extends Component{
    render(){
        return <h1>你好吗，{this.props.name}</h1>
    }
}

const element = <div><h1>aa</h1></div>;
class Tick extends Component {
    //类构造函数来初始化状态 this.state
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
}
ReactDOM.render(<Tick />, document.getElementById("root"));


