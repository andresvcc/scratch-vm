module.exports = {
    blocks: {
        setMotor: 'moteur [M] à vitesse [N]',
        stopMotors: 'stop moteurs',
        move: 'avancer de [N]',
        moveWithSpeed: 'avancer de [N] à vitesse [S]',
        moveWithTime: 'avancer de [N] en [S]s',
        turn: 'tourner de [N]',
        turnWithSpeed: 'tourner de [N] à vitesse [S]',
        turnWithTime: 'tourner de [N] en [S]s',
        arc: 'faire un cercle de rayon [R] angle [A]',
        setOdomoter: 'initialiser l\'odomètre direction [N] x: [O] y: [P]',
        leds: 'LED [L] R: [R] V: [G] B: [B]',
        setLeds: 'Mettre l\'effet couleur des LED [L] à [C]',
        changeLeds: 'Ajouter [C] à l\'effet couleur des LED [L]',
        clearLeds: 'éteindre LED',
        nextDial: 'allumer la LED du cercle suivante à [L]',
        ledsCircle: 'LED cercle [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'LED capteurs prox. horiz. [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'LED capteurs de sol [A] [B]',
        ledsButtons: 'LED boutons [A] [B] [C] [D]',
        ledsTemperature: 'LED température R: [A] B: [B]',
        ledsRc: 'LED télécommande [A]',
        ledsSound: 'LED micro [A]',
        soundSystem: 'jouer son système [S]',
        soundFreq: 'jouer note à [N]Hz pendant [S]s',
        soundPlaySd: 'jouer son carte SD [N]',
        soundRecord: 'enregistrer son [N]',
        stopSoundRecord: 'arrêter l\'enregistrement du son',
        soundReplay: 'rejouer son [N]',
        whenButton: 'quand le bouton [B] est pressé',
        touching: 'quand un objet est détecté [S]',
        notouching: 'quand aucun objet n\'est détecté [S]',
        touchingThreshold: 'quand un objet est détecté [S] [N]',
        bump: 'quand un choc est detecté',
        soundDetected: 'quand un bruit est détecté',
        noSoundDetected: "quand aucun bruit n'est détecté",
        valButton: 'bouton [B]',
        proximity: 'capteur prox. horiz. [N]',
        proxHorizontal: 'afficher tous les capteurs prox. horiz.',
        ground: 'capteur sol[N]',
        proxGroundDelta: 'afficher tous les capteurs sol',
        distance: 'distance [S]',
        angle: 'angle [S]',
        tilt: 'inclinaison [T]',
        micIntensity: 'niveau sonore',
        odometer: 'odomètre [O]',
        motor: 'vitesse moteur [M]'
    },
    menus: {
        leftrightall: {
            left: 'gauche',
            right: 'droite',
            all: 'tous'
        },
        leftright: {
            left: 'gauche',
            right: 'droite'
        },
        sensors: {
            front: 'devant',
            back: 'derrière',
            ground: 'dessous'
        },
        sensors2: {
            left: 'gauche',
            front: 'devant',
            right: 'droite',
            back: 'derrière',
            ground: 'dessous'
        },
        proxsensors: {
            front_far_left: 'gauche',
            front_left: 'centre gauche',
            front_center: 'centre',
            front_right: 'centre droite',
            front_far_right: 'droite',
            back_left: 'arrière gauche',
            back_right: 'arrière droite'
        },
        horizontalSensors: {
            front_far_left: 'gauche',
            front_left: 'centre gauche',
            front_center: 'centre',
            front_right: 'centre droite',
            front_far_right: 'droite',
            back_left: 'arrière gauche',
            back_right: 'arrière droite'
        },
        groundSensors: {
            left: 'gauche',
            right: 'droite'
        },
        light: {
            all: 'tout',
            top: 'dessus',
            bottom: 'dessous',
            bottom_left: 'dessous gauche',
            bottom_right: 'dessous droite'
        },
        angles: {
            front: 'devant',
            back: 'derrière',
            ground: 'dessous'
        },
        odo: {
            direction: 'direction',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'devant-derrière',
            top_bottom: 'dessus-dessous',
            left_right: 'gauche-droite'
        },
        buttons: {
            center: 'central',
            front: 'avant',
            back: 'arrière',
            left: 'gauche',
            right: 'droite'
        },
        nearfar: {
            near: 'proche',
            far: 'loin'
        }
    }
};
