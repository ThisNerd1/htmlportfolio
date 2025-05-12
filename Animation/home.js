function changeColor(colorClass) {
  var element = document.body;
  // Remove all existing color classes
  element.classList.remove('blue', 'mocha', 'night-sky', 'sunrise-sunset');
  // Add the selected color class
  element.classList.add(colorClass);
}



let chart = anychart.heatMap(getData());
chart.background().fill("rgba(0,0,0,0)");
chart.xAxis().labels().fontColor("#FFFFFF"); 
chart.yAxis().labels().fontColor("#FFFFFF");
chart.container("container");
chart.draw();


// x-axis = on top
// y-axis = left side

function getData() {
  return [
    {
      x: "Javascript",
      y: "Confidence Level",
      heat: 705
    },
    {
      x: "React",
      y: "Confidence Level",
      heat: 705
    },
    {
      x: "C#",
      y: "Confidence Level",
      heat: 100
    } 
  ];
}