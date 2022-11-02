import React, { Component } from "react";
import VF from "vexflow";

export default class VexFlow extends Component {
  constructor(props) {
    super(props);

    this._renderer = null;
    this._context = null;
  }

  componentDidMount() {
    this.handleProps();
  }
  componentDidUpdate() {
    this.handleProps();
  }

  handleProps() {
    this.clear();

    const {
      width = 500,
      height = 500,
      font = ["Arial", 10, ""],
      fontColor = "#eed",
      stave,
      notes,
      voice
    } = this.props;

    this._renderer = new VF.Renderer(
      this.refs.wrapper,
      VF.Renderer.Backends.SVG
    );

    this._renderer.resize(width, height);
    this._context = this._renderer.getContext();

    this._context.setFont(...font).setBackgroundFillStyle(fontColor);

    stave.setContext(this._context).draw();

    voice.draw(this._context, stave);
  }

  clear() {
    this.refs.wrapper.innerHTML = "";
  }

  render() {
    return <div ref={"wrapper"} />;
  }
}
