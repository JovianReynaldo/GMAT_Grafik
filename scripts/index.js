
$( document ).ready(function() {
    window.yaw = new Chart('yaw-canvas', configYaw);
    window.pitch = new Chart('pitch-canvas', configPitch);
    window.roll = new Chart('roll-canvas', configRoll);
    window.altitude = new Chart('altitude-canvas', configAltitude);
    window.temperature = new Chart('temperature-canvas', configTemperature);
    window.pressure = new Chart('pressure-canvas', configPressure);

    //yaw
    $("#yaw-input").on('input', ()=>{
        $("#yaw-value").html($("#yaw-input").val())
    });

    $("#yaw-randomizedata").change(() => {
        if($("#yaw-randomizedata").is(':checked'))
            $(".yaw-manual").hide();  
        else
            $(".yaw-manual").show();
    }); 

    pitch
    $("#pitch-input").on('input', ()=>{
        $("#pitch-value").html($("#pitch-input").val())
    });

    $("#pitch-randomizedata").change(() => {
        if($("#pitch-randomizedata").is(':checked'))
            $(".pitch-manual").hide();  
        else
            $(".pitch-manual").show();
    }); 


    //roll
    $("#roll-input").on('input', ()=>{
        $("#roll-value").html($("#roll-input").val())
    });

    $("#roll-randomizedata").change(() => {
        if($("#roll-randomizedata").is(':checked'))
            $(".roll-manual").hide();  
        else
            $(".roll-manual").show();
    }); 


    //altitude
    $("#altitude-input").on('input', ()=>{
        $("#altitude-value").html($("#altitude-input").val())
    });

    $("#altitude-randomizedata").change(() => {
        if($("#altitude-randomizedata").is(':checked'))
            $(".altitude-manual").hide();  
        else
            $(".altitude-manual").show();
    }); 


    //temperature
    $("#temperature-input").on('input', ()=>{
        $("#temperature-value").html($("#temperature-input").val())
    });

    $("#temperature-randomizedata").change(() => {
        if($("#temperature-randomizedata").is(':checked'))
            $(".temperature-manual").hide();  
        else
            $(".temperature-manual").show();
    }); 


    //pressure
    $("#pressure-input").on('input', ()=>{
        $("#pressure-value").html($("#pressure-input").val())
    });

    $("#pressure-randomizedata").change(() => {
        if($("#pressure-randomizedata").is(':checked'))
            $(".pressure-manual").hide();  
        else
            $(".pressure-manual").show();
    }); 


});

var radom30 = () => {
    return (Math.round(Math.random() * 30)) * (Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1);
};

var random100 = () => {
    return (Math.round(Math.random() * 100)) * (Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1);
};

var randomAltitude = () => {
    return Math.round(Math.random() * 50);
};

var randomPressure = () => {
    return Math.round(Math.random() * 10000);
};


$('#start').click(function(){
    time = $('#interval').val() ? $('#interval').val()*1000 : 1100;
    interval = window.setInterval(function(){
        graphYaw();
        graphPitch();
        graphRoll();
        graphAltitude();
        graphTemperature();
        graphPressure();
    }, 1000);
    $('#start').prop('disabled', true);
    $('#stop').prop('disabled', false);
});

$('#stop').click(function(){
    $('#start').prop('disabled', false);
    $('#stop').prop('disabled', true);
    clearInterval(interval);
});
