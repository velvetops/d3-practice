var width = 400;
var height = 400;
var radius = 20;

var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("circle")
  .attr("cx", 40)
  .attr("cy", 30)
  .attr("r", radius)
  .attr("fill", "royalblue");

d3.select("circle")
  .transition()
  .duration(1500)
  .ease(d3.easeBounce)
  .attr("cy", height - radius);

