import * as React from "react";

class MyButton extends React.Component{
    render() {
        const {disabled, text } = this.props;
        return <button>{this.props.children}</button>;
    }
}
export default MyButton;