import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
  group,
} from "d3";

const BarChart = ({ migrations }) => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75, 79]);
  const svgRef = useRef();

  const groupd = group(migrations, (migration) => migration.status);
  console.log(groupd);

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

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

export default BarChart;
