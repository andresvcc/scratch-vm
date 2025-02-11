module.exports = {
    blocks: {
        setMotor: '[M] motor speed [N]',
        stopMotors: 'stop motors',
        move: 'move [N]',
        moveWithSpeed: 'move [N] with speed [S]',
        moveWithTime: 'move [N] in [S]s',
        turn: 'turn [N]',
        turnWithSpeed: 'turn [N] with speed [S]',
        turnWithTime: 'turn [N] in [S]s',
        arc: 'move in a circle radius [R] angle [A]',
        setOdomoter: 'set odometer direction [N] x: [O] y: [P]',
        leds: 'LEDs [L] R: [R] G: [G] B: [B]',
        setLeds: 'set [L] LEDs color effect to [C]',
        changeLeds: 'change [L] LEDs color effect by [C]',
        clearLeds: 'clear LEDs',
        nextDial: 'turn on next circle LED on the [L]',
        ledsCircle: 'circle LEDs [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'horiz. prox. sensors LEDs [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'ground sensors LEDs [A] [B]',
        ledsButtons: 'buttons LEDs [A] [B] [C] [D]',
        ledsTemperature: 'temperature LEDs R: [A] B: [B]',
        ledsRc: 'remote control LED [A]',
        ledsSound: 'microphone LED [A]',
        soundSystem: 'play system sound [S]',
        soundFreq: 'play note at [N]Hz during [S]s',
        soundPlaySd: 'play sound SD card [N]',
        soundRecord: 'record sound [N]',
        stopSoundRecord: 'stop sound recording',
        soundReplay: 'replay sound [N]',
        whenButton: 'when button [B] pressed',
        touching: 'when object detected [S]',
        notouching: 'when no object detected [S]',
        touchingThreshold: 'when object detected [S] [N]',
        bump: 'when a shock is detected',
        soundDetected: 'when a sound is detected',
        noSoundDetected: 'when no noise is detected',
        valButton: 'button [B]',
        proximity: 'horiz. prox. sensor [N]',
        proxHorizontal: 'display all horiz. prox. sensors',
        ground: 'ground sensor [N]',
        proxGroundDelta: 'display all ground sensors',
        distance: 'distance [S]',
        angle: 'angle [S]',
        tilt: 'tilt on [T]',
        micIntensity: 'sound intensity',
        odometer: 'odometer [O]',
        motor: 'motor speed [M]'
    },
    menus: {
        leftrightall: {
            left: 'left',
            right: 'right',
            all: 'all'
        },
        leftright: {
            left: 'left',
            right: 'right'
        },
        sensors: {
            front: 'front',
            back: 'back',
            ground: 'ground'
        },
        sensors2: {
            left: 'left',
            front: 'front',
            right: 'right',
            back: 'back',
            ground: 'ground'
        },
        proxsensors: {
            front_far_left: 'left',
            front_left: 'center left',
            front_center: 'center',
            front_right: 'center right',
            front_far_right: 'right',
            back_left: 'back left',
            back_right: 'back right'
        },
        horizontalSensors: {
            front_far_left: 'left',
            front_left: 'center left',
            front_center: 'center',
            front_right: 'center right',
            front_far_right: 'right',
            back_left: 'back left',
            back_right: 'back right'
        },
        groundSensors: {
            left: 'left',
            right: 'right'
        },
        light: {
            all: 'all',
            top: 'top',
            bottom: 'bottom',
            bottom_left: 'bottom left',
            bottom_right: 'bottom right'
        },
        angles: {
            front: 'front',
            back: 'back',
            ground: 'ground'
        },
        odo: {
            direction: 'direction',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'front-back',
            top_bottom: 'top-bottom',
            left_right: 'left-right'
        },
        buttons: {
            center: 'center',
            front: 'forward',
            back: 'backward',
            left: 'left',
            right: 'right'
        },
        nearfar: {
            near: 'near',
            far: 'far'
        }
    }
};
