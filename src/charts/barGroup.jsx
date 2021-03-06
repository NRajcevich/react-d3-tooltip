"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid
} from 'react-d3-core';

import {BarGroup} from 'react-d3-shape';
import CommonProps from '../commonProps';
import {isTooltipUpdate} from '../utils/tooltipUpdate';

export default class BarGroupContainer extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isTooltipUpdate(nextProps, nextState, this);
  }

  static defaultProps = CommonProps

  render() {

    const {
      onMouseOver,
      onMouseOut,
      showXGrid,
      showYGrid,
      showXAxis,
      showYAxis
    } = this.props;

    var xgrid, ygrid, xAxis,yAxis;

    if(showXGrid) xgrid = <Xgrid {...this.props}/>;
    if(showYGrid) ygrid = <Ygrid {...this.props}/>;
    if(showXAxis) xAxis = <Xaxis {...this.props}/>;
    if(showYAxis) yAxis = <Yaxis {...this.props}/>;

    return (
      <g>
        {xgrid}
        {ygrid}
        {xAxis}
        {yAxis}
        <BarGroup
          {...this.props}
          onMouseOver= {onMouseOver}
          onMouseOut= {onMouseOut}
        />
      </g>
    )
  }
}
