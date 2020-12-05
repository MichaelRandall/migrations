import React, { useRef, useEffect, useState } from "react";
import {
  select,
  axisBottom,
  axisRight,
  axisLeft,
  scaleLinear,
  scaleBand,
  group,
} from "d3";
import { isArray } from "lodash";

const BarChart = (migrations) => {
  // convert object to an array of object
  const migrationsArray = Object.keys(migrations).map((i) => migrations[i]);
  // const migrationsArray = Object.keys(migrations).map((i) =>
  //   console.log(migrations[i])
  // );
  // console.log(migrationsArray);

  const [data, setData] = useState([0, 10, 20, 30, 40]);
  const [data1, setData1] = useState({ migrations });
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    // setting scales
    // domain is the values in array
    // range is what you want to scale your items by > fills to 150px ,
    const xScale = scaleBand()
      //map is assigning each items index to the domain
      .domain(data.map((value, index) => index))
      .range([0, 218])
      .padding(0.8); // adjusts the width of the bars

    // domain = begining and ending values of the axis
    // range = the size of the axis
    const yScale = scaleLinear().domain([0, 80]).range([160, 0]);

    // formatting axes
    // css transform is a 2d property/attribute you can set with style and assign functions/values
    // css transform: (translate | translateX | translateY
    // translate(x,y), translateX on x axis (horizontal), translateY on y axis(vertical)
    // starts from the top of the horizontal bar of x-axis labels
    // set tran
    const xAxis = axisBottom(xScale).ticks(data.length);

    // transforming the position of the x-axis along vertically - (up/down)
    // moves the x-axis bar up or down
    svg
      .select(".x-axis")
      .style("transform", "translateY(160px)")
      .style("color", "green")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    // transform and translate ??? starts from the top of the y axis labels
    // at 0px the top of the y-axis bar is at the top left of the svg element
    // transforms the position of the y-axis along horizontal - sideways
    svg
      .select(".y-axis")
      .style("transform", "translateX(218px)") // moves the y-axis left or right
      .style("color", "green")
      .call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (value, index) => xScale(index))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      // number value corresponds to the vertical position of the x-axis
      // moves the bars up or down
      .attr("height", (value) => 160 - yScale(value));
  }, [data]);

  // g element is used to group shapes together and it is related to svg, not d3
  // example <g><rect></rect><text></text></g>
  // hardcode positions for g elements orgin is always (0,0) starting from top left of screen
  // <g transform="translate(0,0">, <g transform="translate(0,20">, <g transform="translate(0,40">
  // <rect> element has a width and height, but tranform and translate describe where to put elements on screen
  return (
    <div className="stat_box">
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default BarChart;
