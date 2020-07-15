import React, { Component } from 'react';

class Coursesales extends Component {
    sumPrice(price) {
        this.setState({ total: this.state.total + price });
    }

    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };
        this.sumPrice = this.sumPrice.bind(this);
    }

    render() {
        console.log(this.props.items);
        var courses = this.props.items.map((item, i) => {
            return <Course name={item.name} price={item.price}
                key={1} sumPrice={this.sumPrice} active={item.active} />
        });

        return (
            <div>
                <h1>You can buy courses: </h1>

                <div id="courses">
                    {courses}
                    <p id="total"> Total: <strong>{this.state.total}</strong> </p>
                </div>
            </div>
        );
    }
}

class Course extends Component {
    
    clicker(){
        var active = !this.state.active;
        this.setState({active: active});
        this.props.sumPrice(active ? this.props.price : -this.props.price);
    }

    constructor(props){
        super(props);

        this.state = {
            active: false
        };
        this.clicker = this.clicker.bind(this);
    }

    render() {
        return (
            <div>
                <p onClick={this.clicker}> {this.props.name} <strong>{this.props.price}</strong></p>
            </div>
        );
    }
}

export default Coursesales;