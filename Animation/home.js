function changeColor(colorClass) {
  var element = document.body;
  // Remove all existing color classes
  element.classList.remove('blue', 'mocha', 'night-sky', 'sunrise-sunset');
  // Add the selected color class
  element.classList.add(colorClass);
}

// // Define data for heatmap
// var data = [
//   [0, 0, 10],
//   [0, 1, 20],
//   [0, 2, 30],
//   [1, 0, 40],
//   [1, 1, 50],
//   [1, 2, 60],
//   [2, 0, 70],
//   [2, 1, 80],
//   [2, 2, 90]
// ];

// // Define dimensions and margins
// var margin = { top: 20, right: 20, bottom: 20, left: 20 };
// var width = 500 - margin.left - margin.right;
// var height = 500 - margin.top - margin.bottom;

// // Create SVG element
// var svg = d3.select("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // Define color scale
// var color = d3.scaleSequential()
//   .domain([0, 100]) // Adjust domain according to your data
//   .interpolator(d3.interpolateViridis);

// // Create heatmap
// svg.selectAll()
//   .data(data)
//   .enter().append("rect")
//   .attr("x", function(d) { return d[0] * 50; })
//   .attr("y", function(d) { return d[1] * 50; })
//   .attr("width", 50)
//   .attr("height", 50)
//   .style("fill", function(d) { return color(d[2]); });