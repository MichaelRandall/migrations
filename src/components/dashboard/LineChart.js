import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal } from "d3";

const LineChart = () => {
  const [data, setData] = useState([4, 16, 8, 10, 19, 62, 40, 12]);
  const svgRef = useRef();
  console.log(svgRef);

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
    const aLine = line()
      .x((value, index) => index * 50)
      // .y((value) => value); this value starts from the top left, need to start from the bottom
      .y((value) => 100 - value);
    // .curve(curveCardinal); this will smooth your line so it will not have points
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => aLine(value))
      .attr("fill", "none")
      .attr("stroke-width", 3)
      .attr("stroke", "green");
  }, []);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default LineChart;
