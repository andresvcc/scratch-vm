module.exports = {
    blocks: {
        setMotor: 'motori [M] con velocità [N]',
        stopMotors: 'ferma motori',
        move: 'avanza di [N]',
        moveWithSpeed: 'avanza di [N] con velocità [S]',
        moveWithTime: 'avanza di [N] in [S]s',
        turn: 'ruota di [N]',
        turnWithSpeed: 'ruota di [N] con velocità [S]',
        turnWithTime: 'ruota di [N] in [S]s',
        arc: 'fai un cerchio di raggio [R] per [A]',
        setOdomoter: 'inizializza odometria direzione [N] x: [O] y: [P]',
        leds: 'LED [L] R: [R] V: [G] B: [B]',
        setLeds: 'porta LED [L] effetto colore a [C] ',
        changeLeds: 'cambia LED [L] l\'effetto colore di [C]',
        clearLeds: 'spegni LED',
        nextDial: 'accendi il LED arancione successivo a [L] del cerchio',
        ledsCircle: 'LED cerchio [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'LED sensori pross. oriz. [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'LED sensori terreno [A] [B]',
        ledsButtons: 'LED pulsanti [A] [B] [C] [D]',
        ledsTemperature: 'LED temperatura R: [A] B: [B]',
        ledsRc: 'LED telecomando [A]',
        ledsSound: 'LED microfono [A]',
        soundSystem: 'accendere suono sistema [S]',
        soundFreq: 'suona nota a [N]Hz per [S]s',
        soundPlaySd: 'accendere suono su scheda SD [N]',
        soundRecord: 'registra suono [N]',
        stopSoundRecord: 'interrompere la registrazione del suono',
        soundReplay: 'riproduci suono [N]',
        whenButton: 'quando si preme il pulsante [B]',
        touching: 'quando oggetto è rilevato [S]',
        notouching: 'quando nessun oggetto è rilevato [S]',
        touchingThreshold: 'quando oggetto è rilevato [S] [N]',
        bump: 'quando un urto è rilevato',
        soundDetected: 'quando un rumore è rilevato',
        noSoundDetected: 'quando non viene rilevato alcun rumore',
        valButton: 'pulsante [B]',
        proximity: 'sensore pross. oriz. [N]',
        proxHorizontal: 'mostra tutti i sensori di pross. oriz.',
        ground: 'sensore terreno [N]',
        proxGroundDelta: 'mostra tutti i sensori terreno',
        distance: 'distanza [S]',
        angle: 'angolo [S]',
        tilt: 'inclinazione [T]',
        micIntensity: 'livello sonoro',
        odometer: 'odometria [O]',
        motor: 'velocità motori [M]'
    },
    menus: {
        leftrightall: {
            left: 'sinistro',
            right: 'destro',
            all: 'tutti'
        },
        leftright: {
            left: 'sinistro',
            right: 'destro'
        },
        sensors: {
            front: 'davanti',
            back: 'dietro',
            ground: 'terreno'
        },
        sensors2: {
            left: 'sinistro',
            front: 'davanti',
            right: 'destro',
            back: 'dietro',
            ground: 'terreno'
        },
        proxsensors: {
            front_far_left: 'sinistra',
            front_left: 'centro sinistra',
            front_center: 'centrale',
            front_right: 'centro destra',
            front_far_right: 'destra',
            back_left: 'posteriore sinistro',
            back_right: 'posteriore destro'
        },
        horizontalSensors: {
            front_far_left: 'sinistra',
            front_left: 'centro sinistra',
            front_center: 'centrale',
            front_right: 'centro destra',
            front_far_right: 'destra',
            back_left: 'posteriore sinistro',
            back_right: 'posteriore destro'
        },
        groundSensors: {
            left: 'sinistra',
            right: 'destra'
        },
        light: {
            all: 'tutti',
            top: 'superiori',
            bottom: 'inferiori',
            bottom_left: 'inferiori a sinistra',
            bottom_right: 'inferiori a destra'
        },
        angles: {
            front: 'davanti',
            back: 'dietro',
            ground: 'terreno'
        },
        odo: {
            direction: 'direzione',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'davanti-dietro',
            top_bottom: 'sopra-sotto',
            left_right: 'sinistro-destro'
        },
        buttons: {
            center: 'centrale',
            front: 'avanti',
            back: 'dietro',
            left: 'sinistro',
            right: 'destro'
        },
        nearfar: {
            near: 'vicino',
            far: 'lontano'
        }
    }
};
