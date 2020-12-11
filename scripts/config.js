var configYaw = {
    type: 'line',
    data: {
        labels: ['0','0','0','0'],
        datasets: [{
            label: 'Yaw',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [
                0,
                0,
                0,
                0,
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 750,
            easing: 'easeInOutQuad',
        },
        title: {
            display: true,
            text: 'G R A F I K    Y A W',
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleAlign: 'center'
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'W a k t u',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Y a w',
                    fontSize: 16,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: -5,
                    max: 5,
                    stepSize: 10
                }
            }]
        }
    }
};

var configPitch = {
    type: 'line',
    data: {
        labels: ['0','2','2','1','2'],
        datasets: [{
            label: 'Pitch',
            borderColor: 'rgb(255,165,0)',
            backgroundColor: 'rgb(255,165,0)',
            data: [
                0,
                2,
                2,
                1,
                2,
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 750,
        },
        title: {
            display: true,
            text: 'G R A F I K    P I T C H',
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleAlign: 'center'
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'W a k t u',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'P i t c h',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: -5,
                    max: 5,
                    stepSize: 10
                }
            }]
        }
    }
};

var configRoll = {
    type: 'line',
    data: {
        labels: ['0','0'],
        datasets: [{
            label: 'Roll',
            borderColor: 'rgb(50,205,50)',
            backgroundColor: 'rgb(50,205,50)',
            data: [
                0,
                0,
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,   
        animation: {
            duration: 750,
            easing: 'linear',
        },
        title: {
            display: true,
            text: 'GRAFIK ROLL',
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleAlign: 'center'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'W a k t u',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'R o l l',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: -5,
                    max: 5,
                    stepSize: 10
                }
            }]
        }
    }
};

var configAltitude = {
    type: 'line',
    data: {
        labels: ['3','2','1','0','0'],
        datasets: [{
            label: 'Altitude',
            borderColor: 'rgb(153,50,204)',
            backgroundColor: 'rgb(153,50,204)',
            data: [
                3,
                2,
                1,
                0,
                0,
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,   
        animation: {
            duration: 750,
        },
        title: {
            display: true,
            text: 'GRAFIK ALTITUDE',
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleAlign: 'center'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'W a k t u',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'A l t i t u d e',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: 0,
                    max: 5,
                    stepSize: 10
                }
            }]
        }
    }
};

var configTemperature = {
    type: 'line',
    data: {
        labels: ['0','20','10','10','0','0','0','0'],
        datasets: [{
            label: 'Temperature',
            borderColor: 'rgb(255,0,0)',
            backgroundColor: 'rgb(255,0,0)',
            data: [
                0,
                20,
                10,
                10,
                0,
                0,
                0,
                0,
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,   
        animation: {
            duration: 750,
            easing: 'linear',
        },
        title: {
            display: true,
            text: 'GRAFIK TEMPERATURE',
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleAlign: 'center'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'W a k t u',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'T e m p e r a t u r e',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: -5,
                    max: 30,
                    stepSize: 20
                }
            }]
        }
    }
};

var configPressure = {
    type: 'line',
    data: {
        labels: ['0','1','1','3','3'],
        datasets: [{
            label: 'Pressure',
            borderColor: 'rgb(0,0,139)',
            backgroundColor: 'rgb(0,0,139)',
            data: [
                0,
                1,
                1,
                3,
                3,
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,   
        animation: {
            duration: 750,
        },
        title: {
            display: true,
            text: 'GRAFIK PRESSURE',
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleAlign: 'center'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'W a k t u',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'P r e s s u r e',
                    fontSize: 14,
                    fontStyle: 'bold'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: 0,
                    max: 5,
                    stepSize: 1000
                }
            }]
        }
    }
};

var yawLineValue;
var yawMaxValue = 0;
var yawMinValue = 0;

function graphYaw(){
    var d = new Date();
    $("#yaw-randomizedata").is(':checked') ? 
        yawLineValue = radom30() :
        yawLineValue = Number($('#yaw-input').val());
    $("#yaw-value").html(yawLineValue);
    if (configYaw.data.datasets.length > 0) {
        //label
        configYaw.data.labels.push(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

        //data
        configYaw.data.datasets.forEach(function(dataset) {
            dataset.data.push(yawLineValue);
        });
    
        //set max
        if(yawMaxValue < yawLineValue + 5){
            configYaw.options.scales.yAxes[0].ticks.max = yawLineValue + 5;
            yawMaxValue = yawLineValue + 5;
        } 

        //set min    
        if (yawLineValue - 5 < yawMinValue){
            configYaw.options.scales.yAxes[0].ticks.min = yawLineValue - 5;
            yawMinValue = yawLineValue - 5;
        }

        window.yaw.update();
    }

    if(configYaw.data.labels.length > 10){
        yawMaxValue = 0;
        yawMinValue = 0;
        configYaw.data.labels.shift();

        configYaw.data.datasets.forEach(function(dataset) {
            dataset.data.forEach((value)=>{
                if(value + 5 > yawMaxValue) yawMaxValue = value + 5;
                if(value - 5 < yawMinValue) yawMinValue = value - 5;
            })
            dataset.data.shift()
        });

        configYaw.options.scales.yAxes[0].ticks.max = yawMaxValue;
        configYaw.options.scales.yAxes[0].ticks.min = yawMinValue;
        window.yaw.update();
    }    
}


var pitchLineValue;
var pitchMaxValue = 0;
var pitchMinValue = 0;

function graphPitch(){
    var d = new Date();
    $("#pitch-randomizedata").is(':checked') ? 
        pitchLineValue = radom30() :
        pitchLineValue = Number($('#pitch-input').val());
    $("#pitch-value").html(pitchLineValue);
    if (configPitch.data.datasets.length > 0) {
        //label
        configPitch.data.labels.push(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

        //data
        configPitch.data.datasets.forEach(function(dataset) {
            dataset.data.push(pitchLineValue);
        });
    
        //set max
        if(pitchMaxValue < pitchLineValue + 5){
            configPitch.options.scales.yAxes[0].ticks.max = pitchLineValue + 5;
            pitchMaxValue = pitchLineValue + 5;
        } 

        //set min    
        if (pitchLineValue - 5 < pitchMinValue){
            configPitch.options.scales.yAxes[0].ticks.min = pitchLineValue - 5;
            pitchMinValue = pitchLineValue - 5;
        }

        window.pitch.update();
    }

    if(configPitch.data.labels.length > 10){
        pitchMaxValue = 0;
        pitchMinValue = 0;
        configPitch.data.labels.shift();

        configPitch.data.datasets.forEach(function(dataset) {
            dataset.data.forEach((value)=>{
                if(value + 5 > pitchMaxValue) pitchMaxValue = value + 5;
                if(value - 5 < pitchMinValue) pitchMinValue = value - 5;
            })
            dataset.data.shift()
        });

        configPitch.options.scales.yAxes[0].ticks.max = pitchMaxValue;
        configPitch.options.scales.yAxes[0].ticks.min = pitchMinValue;
        window.pitch.update();
    }    
}



var rollLineValue;
var rollMaxValue = 0;
var rollMinValue = 0;

function graphRoll(){
    var d = new Date();
    $("#roll-randomizedata").is(':checked') ? 
        rollLineValue = radom30() :
        rollLineValue = Number($('#roll-input').val());
    $("#roll-value").html(rollLineValue);
    if (configRoll.data.datasets.length > 0) {
        //label
        configRoll.data.labels.push(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

        //data
        configRoll.data.datasets.forEach(function(dataset) {
            dataset.data.push(rollLineValue);
        });
    
        //set max
        if(rollMaxValue < rollLineValue + 5){
            configRoll.options.scales.yAxes[0].ticks.max = rollLineValue + 5;
            rollMaxValue = rollLineValue + 5;
        } 

        //set min    
        if (rollLineValue - 5 < rollMinValue){
            configRoll.options.scales.yAxes[0].ticks.min = rollLineValue - 5;
            rollMinValue = rollLineValue - 5;
        }

        window.roll.update();
    }

    if(configRoll.data.labels.length > 10){
        rollMaxValue = 0;
        rollMinValue = 0;
        configRoll.data.labels.shift();

        configRoll.data.datasets.forEach(function(dataset) {
            dataset.data.forEach((value)=>{
                if(value + 5 > rollMaxValue) rollMaxValue = value + 5;
                if(value - 5 < rollMinValue) rollMinValue = value - 5;
            })
            dataset.data.shift()
        });

        configRoll.options.scales.yAxes[0].ticks.max = rollMaxValue;
        configRoll.options.scales.yAxes[0].ticks.min = rollMinValue;
        window.roll.update();
    }    
}



var altitudeLineValue;
var altitudeMaxValue = 0;
var altitudeMinValue = 0;

function graphAltitude(){
    var d = new Date();
    $("#altitude-randomizedata").is(':checked') ? 
        altitudeLineValue = randomAltitude() :
        altitudeLineValue = Number($('#altitude-input').val());
    $("#altitude-value").html(altitudeLineValue);
    if (configAltitude.data.datasets.length > 0) {
        //label
        configAltitude.data.labels.push(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

        //data
        configAltitude.data.datasets.forEach(function(dataset) {
            dataset.data.push(altitudeLineValue);
        });
    
        //set max
        if(altitudeMaxValue < altitudeLineValue + 5){
            configAltitude.options.scales.yAxes[0].ticks.max = altitudeLineValue + 5;
            altitudeMaxValue = altitudeLineValue + 5;
        }

        window.altitude.update();
    }

    if(configAltitude.data.labels.length > 10){
        altitudeMaxValue = 0;
        configAltitude.data.labels.shift();

        configAltitude.data.datasets.forEach(function(dataset) {
            dataset.data.forEach((value)=>{
                if(value + 5 > altitudeMaxValue) altitudeMaxValue = value + 5;
            })
            dataset.data.shift()
        });

        configAltitude.options.scales.yAxes[0].ticks.max = altitudeMaxValue;
        window.altitude.update();
    }    
}



var temperatureLineValue;
var temperatureMaxValue = 0;
var temperatureMinValue = 0;

function graphTemperature(){
    var d = new Date();
    $("#temperature-randomizedata").is(':checked') ? 
        temperatureLineValue = random100() :
        temperatureLineValue = Number($('#temperature-input').val());
    $("#temperature-value").html(temperatureLineValue);
    if (configTemperature.data.datasets.length > 0) {
        //label
        configTemperature.data.labels.push(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

        //data
        configTemperature.data.datasets.forEach(function(dataset) {
            dataset.data.push(temperatureLineValue);
        });
    
        //set max
        if(temperatureMaxValue < temperatureLineValue + 20){
            configTemperature.options.scales.yAxes[0].ticks.max = temperatureLineValue + 20;
            temperatureMaxValue = temperatureLineValue + 20;
        } 

        //set min    
        if (temperatureLineValue - 20 < temperatureMinValue){
            configTemperature.options.scales.yAxes[0].ticks.min = temperatureLineValue - 20;
            temperatureMinValue = temperatureLineValue - 20;
        }

        window.temperature.update();
    }

    if(configTemperature.data.labels.length > 10){
        temperatureMaxValue = 0;
        temperatureMinValue = 0;
        configTemperature.data.labels.shift();

        configTemperature.data.datasets.forEach(function(dataset) {
            dataset.data.forEach((value)=>{
                if(value + 20 > temperatureMaxValue) temperatureMaxValue = value + 20;
                if(value - 20 < temperatureMinValue) temperatureMinValue = value - 20;
            })
            dataset.data.shift()
        });

        configTemperature.options.scales.yAxes[0].ticks.max = temperatureMaxValue;
        configTemperature.options.scales.yAxes[0].ticks.min = temperatureMinValue;
        window.temperature.update();
    }    
}



var pressureLineValue;
var pressureMaxValue = 0;
var pressureMinValue = 0;

function graphPressure(){
    var d = new Date();
    $("#pressure-randomizedata").is(':checked') ? 
        pressureLineValue = randomPressure() :
        pressureLineValue = Number($('#pressure-input').val());
    $("#pressure-value").html(pressureLineValue);
    if (configPressure.data.datasets.length > 0) {
        //label
        configPressure.data.labels.push(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

        //data
        configPressure.data.datasets.forEach(function(dataset) {
            dataset.data.push(pressureLineValue);
        });
    
        //set max
        if(pressureMaxValue < pressureLineValue + 1000){
            configPressure.options.scales.yAxes[0].ticks.max = pressureLineValue + 1000;
            pressureMaxValue = pressureLineValue + 1000;
        }

        window.pressure.update();
    }

    if(configPressure.data.labels.length > 10){
        pressureMaxValue = 0;
        configPressure.data.labels.shift();

        configPressure.data.datasets.forEach(function(dataset) {
            dataset.data.forEach((value)=>{
                if(value + 1000 > pressureMaxValue) pressureMaxValue = value + 1000;
            })
            dataset.data.shift()
        });

        configPressure.options.scales.yAxes[0].ticks.max = pressureMaxValue;
        window.pressure.update();
    }    
}


