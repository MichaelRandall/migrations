import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
} from "d3";

const LineChart = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75, 79]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    // xScale: domain is start and end values in your data array that you are passing
    // range is the size of your svg area along the x axis (horizontals)
    // this will scale your data values to the size of your defined svg area
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    // yScale: sets, gets values for the y-axis (verticals)
    // domain seems different
    // range don't understand
    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    // setting the bottom - x-axis values
    // tick indicates how many ticks to show on x-axis, as many as the array length
    // tickFormat takes the index values and returns plus 1, so instead of 0 on x-axis, it starts at 1
    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    const aLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", aLine)
      .attr("fill", "none")
      .attr("stroke-width", 3)
      .attr("stroke", "green");
  }, [data]);

  return (
    <svg ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default LineChart;
