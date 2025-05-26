function changeColor(colorClass) {
  var element = document.body;
  element.classList.remove('daydreams', 'chocolate', 'cool', 'cotton-candy');
  element.classList.add(colorClass);
  if (colorClass === 'chocolate') {
    var barColors = '#874B35';
  } else if (colorClass === 'daydreams'){
    var barColors = '#F2F3F5';
  } else if (colorClass === 'cool'){
    var barColors = '#CCCCFF';
  } else {
    barColors = '#A3A1A1';
  }
  const xValues = ["Golang", "React", "C#", "Python", "Angular", "React-Native","PHP", "Javascript"];
  const yValues = [3.5, 5.5, 7, 6, 6, 5, 4, 7.5];

new Chart("skillChart", {
  type: "bar",
  data: {
    labels: xValues, 
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true, 
          max: 10, 
          color: '#F2F3F5',
        }
      }]
    },
    title: {
      display: true,
      text: "1 - Lowest, 10 - Highest"
    }
  }
});
}

