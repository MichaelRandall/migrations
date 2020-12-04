// import { useD3 } from "./useD3";
import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";
// import d3 from "d3";

// this will use d3 to control the DOM and not react
// not passed into the functional component, it is available
const data1 = [25, 16, 40, 31, 27];
// can substitute with the useState hook within the function
//

// useRef makes the svg DOM element available to D3 with the useRef hook.
// Creates a reference object and pass the ref object to the svg element
// as an attribute of the svg element

// useEffect runs when the document loads for the first time from the return statement below

// to render a cirlce with D3, need to use svg.selectAll("circle")
// .selectAll used to get all svg elements that are a circle - line 24: currently no circle elements
// .data used to synchronize the data from the data array with the different circles - line 24

const BubbleChart = () => {
  const [data, setData] = useState([4, 16, 8, 10, 19]);
  const svgRef = useRef();
  console.log(svgRef);

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
    // console.log(svg.selectAll("circle").data(data)); // returns a selection with enter, exit, and update
    svg
      .selectAll("circle")
      .data(data)
      .join(
        // enter creates NEW circle dom elements for each item in the array
        // -- since this is simple, you could replace enter with just circle - .join("circle").attr("r", (value) => value)... etc.
        // update used to set attributes - for example if a circle element already exists, it would get a class attribute of updated
        // ----update can be removed in this instance since the attribute isn't really doing anything, only for demo purposes
        // exit removes any extra circle elements - if array has 5 elements and a previous circle exists, then the extra removed
        // ----exit is part of the join api and it is default, so I could remove it from below
        // join return a selection of both entering and updating elements, so best to assign attributes after the join
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 3)
      .attr("stroke", "red");
  }, []);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
};

// const BarChart = ({ data }) => {
//   const ref = useD3(
//     (svg) => {
//       const height = 500;
//       const width = 300;
//       const margin = { top: 20, right: 30, bottom: 30, left: 40 };

//       const x = d3
//         .scaleBand()
//         .domain(data.map((d) => d.year))
//         .rangeRound([margin.left, width - margin.right])
//         .padding(0.1);

//       // sales
//       const y1 = d3
//         .scaleLinear()
//         .domain([0, d3.max(data, (d) => d.sales)])
//         .rangeRound([height - margin.bottom, margin.top]);

//       const xAxis = (g) =>
//         g.attr("transform", `translate(0,${height - margin.bottom})`).call(
//           d3
//             .axisBottom(x)
//             .tickValues(
//               d3
//                 .ticks(...d3.extent(x.domain()), width / 40)
//                 .filter((v) => x(v) !== undefined)
//             )
//             .tickSizeOuter(0)
//         );

//       const y1Axis = (g) =>
//         g
//           .attr("transform", `translate(${margin.left},0)`)
//           .style("color", "steelblue")
//           .call(d3.axisLeft(y1).ticks(null, "s"))
//           .call((g) => g.select(".domain").remove())
//           .call((g) =>
//             g
//               .append("text")
//               .attr("x", -margin.left)
//               .attr("y", 10)
//               .attr("fill", "currentColor")
//               .attr("text-anchor", "start")
//               .text(data.y1)
//           );

//       svg.select(".x-axis").call(xAxis);
//       svg.select(".y-axis").call(y1Axis);
//       // d.year and d.sales
//       svg
//         .select(".plot-area")
//         .attr("fill", "steelblue")
//         .selectAll(".bar")
//         .data(data)
//         .join("rect")
//         .attr("class", "bar")
//         .attr("x", (d) => x(d.year))
//         .attr("width", x.bandwidth())
//         .attr("y", (d) => y1(d.sales))
//         .attr("height", (d) => y1(0) - y1(d.sales));
//     },
//     [data.length]
//   );

//   return (
//     <svg
//       ref={ref}
//       style={{
//         height: 500,
//         width: "100%",
//         marginRight: "0px",
//         marginLeft: "0px",
//       }}
//     >
//       <g className="plot-area" />
//       <g className="x-axis" />
//       <g className="y-axis" />
//     </svg>
//   );
// };

export default BubbleChart;
