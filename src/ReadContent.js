import { Component } from "react";

class ReadContent extends Component {
    render() {
        return (
            <div>
                <article>
                    <h2>{this.props.title}</h2>
                    {this.props.desc}
                </article>
            </div>
        );
    }
}

export  {ReadContent};