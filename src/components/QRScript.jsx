import React, { Component } from "react";
import QRCode from "qrcode.react";
import "../App.css";

class qrArgs extends Component {
    constructor() {
        super();
        this.state = {value: ''}; //initial value

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Generation Completed.');
    }

    render() {
        return (
            <div className="QRDisp">
                <form onSubmit={this.handleSubmit}>
                    <label onChange={this.handleChange}>
                        Text<br />
                        <input type="text" placeholder="QR化したい文字列を入力" Value={this.state.value} />
                    </label>
                    {/*<input type="submit" value="Generate QR" />*/}
                </form>
                Result
                <QRCode value={this.state.value} />
            </div>
        )
    }
}

export default qrArgs;