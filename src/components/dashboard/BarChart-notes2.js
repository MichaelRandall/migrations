import React, { useRef, useEffect, useState } from "react";
import {
  select,
  axisBottom,
  axisRight,
  scaleLinear,
  scaleBand,
  group,
  min,
  max,
} from "d3";

const BarChart = ({ migrations }) => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75, 79]);
  const svgRef = useRef();

  const groupdStatus = group(migrations, (migration) => migration.status);
  const groupdOwner = group(
    migrations,
    (migration) => migration.migration_ownerId
  );

  useEffect(() => {
    const svg = select(svgRef.current);
    const scale = scaleLinear()
      .domain([min(data), max(data)])
      .range([10, 300]);

    // .text, append, and style are functions that can take in a constant or an anonymous
    // function as a parameter, the function is a function of data, so each method will be called
    // for each data element
    // the function can take 2 parameters besides the data (d) parameter:
    // ----(d) = data element
    // ----(i) = index elemenet
    // ----(this) = the current DOM element
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      // .attr("x", (value, index) => xScale(index))
      // .attr("width", xScale.bandwidth())
      .attr("height", 50);
  }, [data]);

  // g element is used to group shapes together and it is related to svg, not d3
  return (
    <svg ref={svgRef}>
      {/* <g className="x-axis" />
      <g className="y-axis" /> */}
    </svg>
  );
};

export default BarChart;
