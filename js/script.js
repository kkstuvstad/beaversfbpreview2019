//webslides set up
ws = new WebSlides();

//icons
var beavsIcon = L.icon({
  iconUrl: 'assets/beavslogo.png',
  iconSize: [60, 40],
  iconAnchor: [25, 25]
});

var okstIcon = L.icon({
  iconUrl: 'assets/okstcowboys.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var hawaiiIcon = L.icon({
  iconUrl: 'assets/hawaii.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var calpolyIcon = L.icon({
  iconUrl: 'assets/cal-poly.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var stanfordIcon = L.icon({
  iconUrl: 'assets/stanford.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var uclaIcon = L.icon({
  iconUrl: 'assets/ucla.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var utahIcon = L.icon({
  iconUrl: 'assets/utah.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var calIcon = L.icon({
  iconUrl: 'assets/calbears.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var azIcon = L.icon({
  iconUrl: 'assets/arizona.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var uwIcon = L.icon({
  iconUrl: 'assets/uwhuskies.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var asuIcon = L.icon({
  iconUrl: 'assets/asu.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var wsuIcon = L.icon({
  iconUrl: 'assets/wsu.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

var uoIcon = L.icon({
  iconUrl: 'assets/ducks.png',
  iconSize: [30, 30],
  iconAnchor: [20, 20]
});

//First Map
var map1 = L.map('map1', {
  center: [39.828371, -98.579480],
  zoom: 6,
  detectRetina: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 4,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

//Chloropleth Map of States
var colors1 = chroma.scale('YlOrRd').colors(8); //sets scale of states from light to dark

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
        fillOpacity: 0.9,
        weight: 2,
        opacity: 1,
        color: '#b4b4b4',
        dashArray: '4'
    };
}

//adds states to map
L.geoJson.ajax("assets/us-states.json", {
    style: style
}).addTo(map1);

//adds legend to the map
var legend = L.control({position: 'topright'});

legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b>Number of Players from State</b><br />';
    div.innerHTML += '<i style="background: ' + colors1[7] + '; opacity: 0.5"></i><p>24+</p>';
    div.innerHTML += '<i style="background: ' + colors1[6] + '; opacity: 0.5"></i><p>20-23</p>';
    div.innerHTML += '<i style="background: ' + colors1[5] + '; opacity: 0.5"></i><p>16-19</p>';
    div.innerHTML += '<i style="background: ' + colors1[4] + '; opacity: 0.5"></i><p>12-15</p>';
    div.innerHTML += '<i style="background: ' + colors1[3] + '; opacity: 0.5"></i><p>8-11</p>';
    div.innerHTML += '<i style="background: ' + colors1[2] + '; opacity: 0.5"></i><p>4-7</p>';
    div.innerHTML += '<i style="background: ' + colors1[1] + '; opacity: 0.5"></i><p>1-3</p>';
    div.innerHTML += '<i style="background: ' + colors1[0] + '; opacity: 0.5"></i><p>0</p>';
    return div;
};

legend.addTo(map1);

//SECTION 5
//Second Map
var map2 = L.map('map2', {
  center: [44.559582, -123.281426],
  zoom: 7,
  detectRetina: true
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
  minZoom: 4,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map2);

//arrows and markers added to map
new L.marker([44.559582, -123.281426], {icon: beavsIcon}).addTo(map2);

new L.SwoopyArrow([36.12566, -97.066491], [44.559582, -123.281426], {
  color: "#DC4405",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: false,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([36.12566, -97.066491], {icon: okstIcon}).addTo(map2);

new L.SwoopyArrow([44.559582, -123.281426], [21.372649, -157.929821], {
  color: "#000000",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: false,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([21.372649, -157.929821], {icon: hawaiiIcon}).addTo(map2);

new L.SwoopyArrow([35.298447, -120.665], [44.559582, -123.281426], {
  color: "#DC4405",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([35.298447, -120.665], {icon: calpolyIcon}).addTo(map2);

new L.SwoopyArrow([37.434532, -122.161132], [44.559582, -123.281426], {
  color: "#DC4405",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([37.434532, -122.161132], {icon: stanfordIcon}).addTo(map2);

new L.SwoopyArrow([44.559582, -123.281426], [34.161334, -118.16765], {
  color: "#000000",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([34.161334, -118.16765], {icon: uclaIcon}).addTo(map2);

new L.SwoopyArrow([40.760012, -111.848842], [44.559582, -123.281426], {
  color: "#DC4405",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([40.760012, -111.848842], {icon: utahIcon}).addTo(map2);

new L.SwoopyArrow([44.559582, -123.281426], [37.871046, -122.250772], {
  color: "#000000",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([37.871046, -122.250772], {icon: calIcon}).addTo(map2);

new L.SwoopyArrow([44.559582, -123.281426], [32.228843, -110.948846], {
  color: "#000000",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([32.228843, -110.948846], {icon: azIcon}).addTo(map2);

new L.SwoopyArrow([47.650396, -122.301594], [44.559582, -123.281426], {
  color: "#DC4405",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([47.650396, -122.301594], {icon: uwIcon}).addTo(map2);

new L.SwoopyArrow([33.426459, -111.932574], [44.559582, -123.281426], {
  color: "#DC4405",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([33.426459, -111.932574], {icon: asuIcon}).addTo(map2);

new L.SwoopyArrow([44.559582, -123.281426], [46.731833, -117.160499], {
  color: "#000000",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([46.731833, -117.160499], {icon: wsuIcon}).addTo(map2);

new L.SwoopyArrow([44.559582, -123.281426], [44.058463, -123.068469], {
  color: "#000000",
  textClassName: "swoopy-arrow",
  factor: 0.75,
  wight: 2,
  hideArrowHead: true,
  iconSize: [60, 20],
  iconAnchor: [60, 5]
}).addTo(map2);
new L.marker([44.058463, -123.068469], {icon: uoIcon}).addTo(map2);

//sets up slides with event listener
ws.el.addEventListener('ws:slide-change', function() {
  crtDiv = $(".current div");

  if (crtDiv.attr("id") === "chart_grade") {
    //Academic Year
    var chart_grade = c3.generate({
        bindto: '#chart_grade',
        data: {
          columns: [
            ['Fr', 6],
            ['RFr', 16],
            ['So', 9],
            ['RSo', 32],
            ['Jr', 3],
            ['RJr', 8],
            ['Sr', 7],
            ['RSr', 15]
          ],
          types: {
            Fr: 'bar',
            RFr: 'bar',
            So: 'bar',
            RSo: 'bar',
            Jr: 'bar',
            RJr: 'bar',
            Sr: 'bar',
            RSr: 'bar'
          },
          colors: {
            Fr: '#FF0000',
            RFr: '#FFA500',
            So: '#FFFF00',
            RSo: '#00FF00',
            Jr: '#008000',
            RJr: '#87CEEB',
            Sr: '#0000FF',
            RSr: '#800080'
          }
        },
        axis: {
          y: {
            show: true,
            label: {
              text: 'Number of Players',
              position: 'outer-middle'
            }
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_pos") {
    //Position Count Chart
    var chart_pos = c3.generate({
        bindto: '#chart_pos',
        data: {
          columns: [
            ['QB', 5],
            ['RB', 8],
            ['WR', 13],
            ['TE', 6],
            ['OL', 14],
            ['DL', 14],
            ['LB', 14],
            ['DB', 16],
            ['LS', 3],
            ['P', 2],
            ['K', 1]
          ],
          types: {
            QB: 'bar',
            RB: 'bar',
            WR: 'bar',
            TE: 'bar',
            OL: 'bar',
            DL: 'bar',
            LB: 'bar',
            DB: 'bar',
            LS: 'bar',
            P: 'bar',
            K: 'bar'
          }
        },
        axis: {
          y: {
            show: true,
            label: {
              text: 'Number of Players',
              position: 'outer-middle'
            }
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_qb") {
    //Quarterbacks
    var chart_qb = c3.generate({
        bindto: '#chart_qb',
        title: {
          text: "Quarterbacks"
        },
        data: {
          columns: [
            ['RSo', 3],
            ['RSr', 1],
            ['Jr', 1]
          ],
          type: 'pie',
          colors: {
            RSo: '#00FF00',
            Jr: '#008000',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_rb") {
    //Running Backs
    var chart_rb = c3.generate({
        bindto: '#chart_rb',
        title: {
          text: "Running Backs"
        },
        data: {
          columns: [
            ['Fr', 1],
            ['RFr', 2],
            ['So', 2],
            ['RSo', 2],
            ['Sr', 1]
          ],
          type: 'pie',
          colors: {
            Fr: '#FF0000',
            RFr: '#FFA500',
            So: '#FFFF00',
            RSo: '#00FF00',
            Sr: '#0000FF'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_wr") {
    //Wide Receivers
    var chart_wr = c3.generate({
        bindto: '#chart_wr',
        title: {
          text: "Wide Receivers"
        },
        data: {
          columns: [
            ['Fr', 2],
            ['RFr', 3],
            ['RSo', 5],
            ['Jr', 1],
            ['Sr', 1],
            ['RSr', 1]
          ],
          type: 'pie',
          colors: {
            Fr: '#FF0000',
            RFr: '#FFA500',
            RSo: '#00FF00',
            Jr: '#008000',
            Sr: '#0000FF',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_te") {
    //Tight Ends
    var chart_te = c3.generate({
        bindto: '#chart_te',
        title: {
          text: "Tight Ends"
        },
        data: {
          columns: [
            ['So', 2],
            ['RSo', 3],
            ['RSr', 1]
          ],
          type: 'pie',
          colors: {
            So: '#FFFF00',
            RSo: '#00FF00',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_ol") {
    //Offensive Linemen
    var chart_ol = c3.generate({
        bindto: '#chart_ol',
        title: {
          text: "Offensive Linemen"
        },
        data: {
          columns: [
            ['Fr', 1],
            ['RFr', 1],
            ['So', 1],
            ['RSo', 6],
            ['RJr', 2],
            ['Sr', 1],
            ['RSr', 2]
          ],
          type: 'pie',
          colors: {
            Fr: '#FF0000',
            RFr: '#FFA500',
            So: '#FFFF00',
            RSo: '#00FF00',
            RJr: '#87CEEB',
            Sr: '#0000FF',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_dl") {
    //Defensive Linemen
    var chart_dl = c3.generate({
        bindto: '#chart_dl',
        title: {
          text: "Defensive Linemen"
        },
        data: {
          columns: [
            ['Fr', 1],
            ['RFr', 5],
            ['So', 1],
            ['RSo', 2],
            ['RJr', 1],
            ['Sr', 1],
            ['RSr', 3]
          ],
          type: 'pie',
          colors: {
            Fr: '#FF0000',
            RFr: '#FFA500',
            So: '#FFFF00',
            RSo: '#00FF00',
            RJr: '#87CEEB',
            Sr: '#0000FF',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_lb") {
    //Linebackers
    var chart_lb = c3.generate({
        bindto: '#chart_lb',
        title: {
          text: "Linebackers"
        },
        data: {
          columns: [
            ['Fr', 1],
            ['RFr', 1],
            ['So', 3],
            ['RSo', 4],
            ['RJr', 3],
            ['Sr', 2],
          ],
          type: 'pie',
          colors: {
            Fr: '#FF0000',
            RFr: '#FFA500',
            So: '#FFFF00',
            RSo: '#00FF00',
            RJr: '#87CEEB',
            Sr: '#0000FF',
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_db") {
    //Defensive Backs
    var chart_db = c3.generate({
        bindto: '#chart_db',
        title: {
          text: "Defensive Backs"
        },
        data: {
          columns: [
            ['Fr', 1],
            ['RFr', 3],
            ['RSo', 6],
            ['Jr', 1],
            ['RJr', 2],
            ['RSr', 3]
          ],
          type: 'pie',
          colors: {
            Fr: '#FF0000',
            RFr: '#FFA500',
            RSo: '#00FF00',
            Jr: '#008000',
            RJr: '#87CEEB',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_ls") {
    //Long Snappers
    var chart_ls = c3.generate({
        bindto: '#chart_ls',
        title: {
          text: "Long Snappers"
        },
        data: {
          columns: [
            ['RFr', 1],
            ['RSr', 2]
          ],
          type: 'pie',
          colors: {
            RFr: '#FFA500',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_p") {
    //Punters
    var chart_p = c3.generate({
        bindto: '#chart_p',
        title: {
          text: "Punters"
        },
        data: {
          columns: [
            ['RSo', 1],
            ['RSr', 1]
          ],
          type: 'pie',
          colors: {
            RSo: '#00FF00',
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "chart_k") {
    //Kickers
    var chart_k = c3.generate({
        bindto: '#chart_k',
        title: {
          text: "Kickers"
        },
        data: {
          columns: [
            ['RSr', 1]
          ],
          type: 'pie',
          colors: {
            RSr: '#800080'
          }
        }
    });
  } else if (crtDiv.attr("id") === "map1") {
    //Map of Players by State
    map1.invalidateSize();
    map1.fitBounds([
	     [61.257127, -27.711197],
	     [10.158062, -166.905675]
     ]);
  } else if (crtDiv.attr("id") === "map2") {
    //Flow Map of Beavers' 2019 Opponents
    map2.invalidateSize();
    map2.fitBounds([
       [8.494260, -164.614727],
       [50.569031, -88.333362]
     ]);
  } else if (crtDiv.attr("id") === "chart1") {
    //Miles Traveled and Preseason Opponent Rank
    var chart1 = c3.generate({
        bindto: '#chart1',
        data: {
          x: 'x',
          columns: [
            ['x', 'OKST', '@HI', 'CP', 'STAN', '@UCLA', 'UTAH', '@CAL', '@AZ', 'UW', 'ASU', '@WSU', '@UO'], //opponents
            ['miles', 0, 2537, 0, 0, 768, 0, 465, 1080, 0, 0, 331, 36],   //miles to travel
            ['rank', 45, 82, 0, 32, 95, 23, 55, 90, 13, 43, 10, 31]       //opponents rank
          ],
          colors: {
            miles: "#DC4405",
            rank: "#FFFFFF"
          },
          axes: {
            rank: 'y2'
          },
          types: {
            miles: 'bar'
          }
        },
        axis: {
          x: {
            type: 'category',
            tick: {
              multiline: false
            }
          },
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
  } else if (crtDiv.attr("id") === "chart2") {
    //PAC 12 Wins (2013 - 2018)
    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
          x: 'x',
          columns: [
            ['x', '2013', '2014', '2015', '2016', '2017', '2018'], //year
            ['OSU', 4, 2, 0, 3, 0, 1],  //Beavs
            ['UO', 7, 8, 7, 2, 4, 5],  //ducks
            ['UW', 5, 4, 4, 8, 7, 7],  //huskies
            ['WSU', 4, 2, 6, 7, 6, 7],  //cougars
            ['CAL', 0, 3, 4, 3, 2, 4],  //bears
            ['STAN', 7, 5, 8, 6, 7, 6],  //cardinal
            ['AZ', 4, 7, 3, 1, 5, 4],  //wildcats
            ['ASU', 8, 6, 4, 2, 6, 5],  //sun devils
            ['USC', 6, 6, 6, 7, 8, 4],  //trojans
            ['UCLA', 6, 6, 5, 2, 4, 3], //bruins
            ['UTAH', 2, 5, 6, 5, 3, 6], //utes
            ['COLO', 1, 0, 1, 8, 2, 2]  //buffaloes
          ],
          colors: {
            OSU: "#DC4405",
            UO: "#154733",
            UW: "#4B2E83",
            WSU: "#5E6A71",
            CAL: "#FDB515",
            STAN: "#2E2D29",
            AZ: "#FFFFFF",
            ASU: "#8C1D40",
            USC: "#990000",
            UCLA: "#2D68C4",
            UTAH: "#CC0000",
            COLO: "#CFB87C"
          },
          axes: {
            data2: 'Wins'
          }
        },
        axis: {
          x: {
            type: 'category',
            tick: {
              multiline: false
            }
          },
          y: {
            label: {
              text: 'Pac-12 Wins',
              position: 'outer-middle'
            }
          },
        }
    });
  } else if (crtDiv.attr("id") === "chart3") {
    //Points For and Against
    var chart3 = c3.generate({
        bindto: '#chart3',
        data: {
          x: 'x',
          columns: [
            ['x', '@OHST', 'SUU', '@NEV', 'AZ', '@ASU', 'WSU', 'CAL', '@COLO', 'USC', '@STAN', '@UW', 'UO'], //opponents
            ['scored', 31, 48, 35, 14, 24, 37, 7, 41, 21, 17, 23, 15],       //points scored
            ['allowed', 77, 25, 37, 35, 52, 56, 49, 34, 38, 48, 42, 55]      //points allowed
          ],
          colors: {
            scored: "#DC4405",
            allowed: "#FFFFFF"
          },
          types: {
            scored: 'bar',
            allowed: 'bar'
          }
        },
        axis: {
          x: {
            type: 'category',
            tick: {
              multiline: false
            }
          },
          y: {
            show: true,
            label: {
              text: 'Points',
              position: 'outer-middle'
            }
          },
        }
    });
  }
});
