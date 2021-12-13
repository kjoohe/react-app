import { Component } from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>
                    <a href='' onClick={(e)=>{
                        alert('hello');
                        e.preventDefault();
                    }}>
                        {this.props.title}
                    </a>
                </h1>
                {/* <h1>WEB</h1> */}
                {/* World Wide Web! */}
                {/* <h1>{this.props.title}</h1>
                {this.props.sub} */}
            </header>
        );
    }
}

export  { Subject };