//SECTION 3
//First Map
var map1 = L.map('map', {
  center: [39.828371, -98.579480],
  zoom: 1,
  maxZoom: 7,
  minZoom: 1,
  detectRetina: true
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png').addTo(map1);

//Chloropleth Map of States
var colors1 = chroma.scale('Oranges').colors(8); //sets scale of states from light to dark

//assigns color to state based on number of players from state
function setColor(density) {
    var id = 0;
    if (density >= 24) { id = 7; }
    else if (density >= 20 && density < 24) { id = 6; }
    else if (density >= 16 && density < 20) { id = 5; }
    else if (density >= 12 && density < 16) { id = 4; }
    else if (density >= 8 && density < 12) { id = 3; }
    else if (density >= 4 && density < 8) { id = 2; }
    else if (density >= 1 && density < 4) { id = 1; }
    else { id = 0; }
    return colors1[id];
}

function style(feature) {
    return {
        fillColor: setColor(feature.properties.count),
        fillOpacity: 0.4,
        weight: 2,
        opacity: 1,
        color: '#b4b4b4',
        dashArray: '4'
    };
}

//adds states to map
L.geoJson.ajax("assets/us-states.geojson", {
    style: style
}).addTo(map1);

//adds legend to the map
var legend = L.control({position: 'topright'});

legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b>Number of Players from State</b><br />';
    div.innerHTML += '<i style="background: ' + colors[7] + '; opacity: 0.5"></i><p>24+</p>';
    div.innerHTML += '<i style="background: ' + colors[6] + '; opacity: 0.5"></i><p>20-23</p>';
    div.innerHTML += '<i style="background: ' + colors[5] + '; opacity: 0.5"></i><p>16-19</p>';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p>12-15</p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p>8-11</p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p>4-7</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p>1-3</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p>0</p>';
    return div;
};

legend.addTo(map1);

//SECTION 4
//Second Map
var map2 = L.map('map2', {
  center: [39.828371, -98.579480],
  zoom: 1,
  maxZoom: 7,
  minZoom: 1,
  detectRetina: true
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map2);

//Flow Map
/*
$.getJSON({

});
*/

//SECTION 5
//First chart
var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['miles', 0, 2537, 0, 0, 768, 0, 465, 1080, 0, 0, 331, 36],   //miles
        ['rank', 45, 82, 0, 32, 95, 23, 55, 90, 13, 43, 10, 31]       //opponents rank
      ],
      axes: {
        rank: 'y2'
      },
      types: {
        miles: 'bar'
      }
    },
    axis: {
      y: {
        show: true,
        label: {
          text: 'Distance to Travel (mi)',
          position: 'outer-middle'
        }
      },
      y2: {
        show: true,
        label: {
          text: 'Preseason Opponent Rank (CBS Sports)',
          position: 'outer-middle'
        }
      }
    }
});

//SECTION 6
//Second Chart
var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
      columns: [
        ['data1', 4, 2, 0, 3, 0, 1],  //Beavs
        ['data2', 7, 8, 7, 2, 4, 5],  //ducks
        ['data3', 5, 4, 4, 8, 7, 7],  //huskies
        ['data4', 4, 2, 6, 7, 6, 7],  //cougars
        ['data5', 0, 3, 4, 3, 2, 4],  //bears
        ['data6', 7, 5, 8, 6, 7, 6],  //cardinal
        ['data7', 4, 7, 3, 1, 5, 4],  //wildcats
        ['data8', 8, 6, 4, 2, 6, 5],  //sun devils
        ['data9', 6, 6, 6, 7, 8, 4],  //trojans
        ['data10', 6, 6, 5, 2, 4, 3], //bruins
        ['data11', 2, 5, 6, 5, 3, 6], //utes
        ['data12', 1, 0, 1, 8, 2, 2]  //buffaloes
      ],
      axes: {
        data2: 'y2'
      }
    },
    axis: {
      y: {
        label: { // ADD
          text: 'Y Label',
          position: 'outer-middle'
        }
      },
      y2: {
        show: true,
        label: { // ADD
          text: 'Y2 Label',
          position: 'outer-middle'
        }
      }
    }
});
