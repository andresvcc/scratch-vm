module.exports = {
    blocks: {
        setMotor: '[M] Motordrehzahl [N]',
        stopMotors: 'Motoren stoppen',
        move: 'gehe [N]',
        moveWithSpeed: 'gehe [N] mit Drehzahl [S]',
        moveWithTime: 'gehe [N] in [S]s',
        turn: 'drehe [N]',
        turnWithSpeed: 'drehe [N] mit Drehzahl [S]',
        turnWithTime: 'drehe [N] in [S]s',
        arc: 'in einem Kreisradius [R] Winkel [A] bewegen',
        setOdomoter: 'Geschwindigkeit Richtung [N] x: [O] y: [P] einstellen',
        leds: 'LEDs [L] R: [R] G: [G] B: [B]',
        setLeds: 'setze [L] LEDs Farbe Effekt auf [C]',
        changeLeds: 'ändere [L] LEDs Farbe Effekt um [C]',
        clearLeds: 'schallte LEDs aus',
        nextDial: 'schalte beim nächsten Durchgang LEDs [L] ein',
        ledsCircle: 'Kreis LEDs [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'horiz. Distanzmesser LEDs [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'Bodensensoren LEDs [A] [B]',
        ledsButtons: 'Tasten LEDs [A] [B] [C] [D]',
        ledsTemperature: 'TemperaturLEDs R: [A] B: [B]',
        ledsRc: 'Fernbedienung LED [A]',
        ledsSound: 'MikrofonLED [A]',
        soundSystem: 'ton Sound abspielen [S]',
        soundFreq: 'Töne bei [N]Hz während [S]s abspielen',
        soundPlaySd: 'Sound-SD-Karte abspielen [N]',
        soundRecord: 'Ton aufnehmen [N]',
        stopSoundRecord: 'Tonaufnahme stoppen',
        soundReplay: 'Ton wiedergeben [N]',
        whenButton: 'wenn die [B] Taste gedrückt wird',
        touching: 'wenn ein Objekt [S] erkannt wird',
        notouching: 'wenn kein Objekt [S] erkannt wird',
        touchingThreshold: 'wenn ein Objekt [S] [N] erkannt wird',
        bump: 'wenn ein Stoss erkannt wird',
        soundDetected: 'wenn ein Ton erkannt wird',
        noSoundDetected: 'wenn kein Geräusch erkannt wird',
        valButton: '[B] Taste',
        proximity: 'horiz. [N] Distanzmesser',
        proxHorizontal: 'alle horiz. Distanzmesser anzeigen',
        ground: 'Bodensensor [N]',
        proxGroundDelta: 'alle Bodensensoren anzeigen',
        distance: 'Abstand  [S]',
        angle: 'Winkel [S]',
        tilt: '[T] Neigungswinkel',
        micIntensity: 'Lautstärke',
        odometer: 'Geschwindigkeitsmesser [O]',
        motor: '[M] Motordrehzahl'
    },
    menus: {
        leftrightall: {
            left: 'links',
            right: 'rechts',
            all: 'alle'
        },
        leftright: {
            left: 'links',
            right: 'rechts'
        },
        sensors: {
            front: 'vordere',
            back: 'rückwärtig',
            ground: 'Boden'
        },
        sensors2: {
            left: 'links',
            front: 'vordere',
            right: 'rechts',
            back: 'rückwärtig',
            ground: 'Boden'
        },
        proxsensors: {
            front_far_left: 'links',
            front_left: 'zentral links',
            front_center: 'zentral',
            front_right: 'zentral rechts',
            front_far_right: 'rechts',
            back_left: 'rückwärtig links',
            back_right: 'rückwärtig rechts'
        },
        horizontalSensors: {
            front_far_left: 'links',
            front_left: 'zentral links',
            front_center: 'zentral',
            front_right: 'zentral rechts',
            front_far_right: 'rechts',
            back_left: 'rückwärtig links',
            back_right: 'rückwärtig rechts'
        },
        groundSensors: {
            left: 'links',
            right: 'rechts'
        },
        light: {
            all: 'alle',
            top: 'oben',
            bottom: 'unterer',
            bottom_left: 'unterer links',
            bottom_right: 'unterer rechts'
        },
        angles: {
            front: 'vordere',
            back: 'rückwärtig',
            ground: 'Boden'
        },
        odo: {
            direction: 'Richtung',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'vorder-rückwärtig',
            top_bottom: 'oben-unten',
            left_right: 'links-rechts'
        },
        buttons: {
            center: 'mittlere',
            front: 'vordere',
            back: 'rückwärtige',
            left: 'linke',
            right: 'rechte'
        },
        nearfar: {
            near: 'nahe',
            far: 'weit'
        }
    }
};
