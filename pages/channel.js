import React from "react";
import styled from "styled-components";

import { seedGen } from "../libs/flash/iota";

export default class extends React.Component {
  state = {
    one: { seed: seedGen(81), input: 50 },
    two: { seed: seedGen(81), input: 50 },
    flash: {
      depth: 3,
      counter: [0, 0, 0, 0],
      bundles: [],
      genesis: "ehhel"
    }
  };
  render() {
    console.log(this.state);
    return <div>Herro</div>;
  }
}