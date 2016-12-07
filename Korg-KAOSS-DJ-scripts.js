var KAOSSDJ = {};

KAOSSDJ.wheelTouch = function (channel, control, value, status, group) {
    if ((status & 0xF0) === 0x90) {    
        var alpha = 1.0/8;
        var beta = alpha/32;
        engine.scratchEnable(1, 128, 33+1/3, alpha, beta);
    } else {
        engine.scratchDisable(1);
    }
}

KAOSSDJ.wheelTurn = function (channel, control, value, status, group) {
    var newValue;
    if (value < 64) {
        newValue = value;
    } else {
        newValue = value - 128;
    }
    if (engine.isScratching(1)) {
        engine.scratchTick(1, newValue);
    } else {
        engine.setValue('[Channel'+1+']', 'jog', newValue);
    }
}
