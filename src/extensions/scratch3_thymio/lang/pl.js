module.exports = {
    blocks: {
        setMotor: '[M] prędkość silnika [N]',
        stopMotors: 'zatrzymaj silniki',
        move: 'jedź[N]',
        moveWithSpeed: 'jedź[N] z prędkością [S]',
        moveWithTime: 'jedź[N] przez [S]s',
        turn: 'skręć [N]',
        turnWithSpeed: 'skręć [N] z prędkością [S]',
        turnWithTime: 'skręcaj [N] przez [S]s',
        arc: 'jedź po okręgu o promieniu [R] kąt [A]',
        setOdomoter: 'współrzędne licznika [N] x: [O] y: [P]',
        leds: 'diody LED [L] R: [R] G: [G] B: [B]',
        setLeds: 'ustaw [L] diody LED na kolor [C]',
        changeLeds: 'zmień [L] diody LED na kolor poprzez [C]',
        clearLeds: 'wyłącz diody LED',
        nextDial: 'następna dioda LED na okręgu po stronie [L]',
        ledsCircle: 'diody LED na okręgu [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'diody LED poziomych czujników zbliżeniowych [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'diody LED czujników podłoża [A] [B]',
        ledsButtons: 'diody LED przycisków [A] [B] [C] [D]',
        ledsTemperature: 'temperatura diod LED R: [A] B: [B]',
        ledsRc: 'dioda LED zdalnego sterowania [A]',
        ledsSound: 'dioda LED mikrofonu [A]',
        soundSystem: 'odtwórz dźwięk systemowy [S]',
        soundFreq: 'odtwórz notatkę z częstotliwością [N]Hz przez [S]s',
        soundPlaySd: 'odtwórz dźwięk z karty SD [N]',
        soundRecord: 'nagrywanie dźwięku [N]',
        stopSoundRecord: 'zatrzymaj nagrywanie dźwięku',
        soundReplay: 'powtórz dźwięk [N]',
        whenButton: 'kiedy przycisk [B] naciśnięty',
        touching: 'gdy obiekt wykryty [S]',
        notouching: 'gdy nie wykryto obiektu [S]',
        touchingThreshold: 'gdy obiekt wykryty [S] [N]',
        bump: 'gdy zostanie wykryty wstrząs',
        soundDetected: 'gdy zostanie wykryty dźwięk',
        noSoundDetected: 'gdy nie zostanie wykryty żaden hałas',
        valButton: 'przycisk [B]',
        proximity: 'poziomy czujnik zbliżeniowy [N]',
        proxHorizontal: 'wyświetl wszystkie poziome czujniki zbliżeniowe',
        ground: 'czujnik podłoża [N]',
        proxGroundDelta: 'wyświetl wszystkie czujniki podłoża',
        distance: 'dystans [S]',
        angle: 'kąt [S]',
        tilt: 'nachylenie na [T]',
        micIntensity: 'natężenie dźwięku',
        odometer: 'licznik [O]',
        motor: 'prędkość silnika [M]'
    },
    menus: {
        leftrightall: {
            left: 'lewy',
            right: 'prawy',
            all: 'wszystkie'
        },
        leftright: {
            left: 'lewy',
            right: 'prawy'
        },
        sensors: {
            front: 'przedni',
            back: 'tylny',
            ground: 'dolny'
        },
        sensors2: {
            left: 'lewy',
            front: 'przedni',
            right: 'prawy',
            back: 'tylny',
            ground: 'dolny'
        },
        proxsensors: {
            front_far_left: 'lewy',
            front_left: 'centralny lewy',
            front_center: 'centralny',
            front_right: 'centralny prawy',
            front_far_right: 'prawy',
            back_left: 'tylny lewy',
            back_right: 'tylny prawy'
        },
        horizontalSensors: {
            front_far_left: 'lewy',
            front_left: 'centralny lewy',
            front_center: 'centralny',
            front_right: 'centralny prawy',
            front_far_right: 'prawy',
            back_left: 'tylny lewy',
            back_right: 'tylny prawy'
        },
        groundSensors: {
            left: 'lewy',
            right: 'prawy'
        },
        light: {
            all: 'wszystkie',
            top: 'górne',
            bottom: 'dolne',
            bottom_left: 'dolne lewe',
            bottom_right: 'dolne prawe'
        },
        angles: {
            front: 'przedni',
            back: 'tylny',
            ground: 'dolny'
        },
        odo: {
            direction: 'kierunek',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'przód-tył',
            top_bottom: 'góra-dół',
            left_right: 'lewo-prawo'
        },
        buttons: {
            center: 'środkowy',
            front: 'naprzód',
            back: 'do tyłu',
            left: 'w lewo',
            right: 'w prawo'
        },
        nearfar: {
            near: 'blisko',
            far: 'daleko'
        }
    }
};
