import * as React from "react";
import * as ReactDOM from "react-dom";

import {Button} from "antd";
import "./antd.css";

const element = (
    <Button style={{margin:"10px 10px"}} type="primary" ></Button>
);
ReactDOM.render(element, document.getElementById('root'));
