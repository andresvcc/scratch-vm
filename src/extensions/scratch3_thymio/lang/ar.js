module.exports = {
    blocks: {
        setMotor: '[M] شغل المحرك [N]',
        stopMotors: 'توقف',
        move: 'تحرك لمسافة [N]',
        moveWithSpeed: 'تحرك لمسافة [N] بسرعة [S]',
        moveWithTime: 'تحرك لمسافة [N] لمدة [S] ثواني',
        turn: 'استدر [N]',
        turnWithSpeed: 'استدر [N] بسرعة [S]',
        turnWithTime: 'استدر [N] لمدة [S] ثواني',
        arc: 'استدر لمسافة [R] بزاوية [A]',
        setOdomoter: 'حدد اتجاه عداد المسافة [N] x: [O] y: [P]',
        leds: 'أضيء المصباح بلون [L] أحمر: [R] أخضر: [G] أزرق: [B]',
        setLeds: 'حدد ضوء لد [L] لتأثير لون [C]',
        changeLeds: 'غير تأثير لون ضوء [L] ב [C]',
        clearLeds: 'أطفئ مصابيح ليد',
        nextDial: 'أضيء مصباح الشريط التالي باتجاه [L]',
        ledsCircle: 'أضيء كل المصابيح المحيطة [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'أضيء مصابيح لد للمجسين الأفقيين [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'أضيئ مصابيح لد لمجسي الأرضية LEDs [A] [B]',
        ledsButtons: 'أضيء مصابيح لد لمجسي أزرار الضغط [A] [B] [C] [D]',
        ledsTemperature: 'أضيء مصابيح لد لمجس الحرارة [A] [B]',
        ledsRc: 'أضيء مصابيح لد لمجس التحكم عن بعد [A]',
        ledsSound: 'أضيء مصابيح لد للميكروفون [A]',
        soundSystem: 'أسمع نغمة [S]',
        soundFreq: 'أسمع نوتة بتردد [N]شغل لمدة [S] ثواني',
        soundPlaySd: 'أسمع نغمة من بطاقة الذاكرة [N]',
        soundRecord: 'ابدأ تسجيل نغمة [N]',
        stopSoundRecord: 'أوقف تسجيل نغمة',
        soundReplay: 'أسمع نغمة مسجلة [N]',
        whenButton: 'عند الضغط على الزر [B]',
        touching: 'عند تمييز عائق [S]',
        notouching: 'عند عدم تمييز عائق [S]',
        touchingThreshold: 'عند تمييز عائق [S] على بعد حتى [N]',
        bump: 'اذا ميزت اصابة',
        soundDetected: 'هل ميزت نغمة',
        noSoundDetected: 'عندما لا يتم الكشف عن الضوضاء',
        valButton: 'زر [B]',
        proximity: 'اقرأ قيمة مجس القرب [N]',
        proxHorizontal: 'اعرض كل المجسات الأفقية',
        ground: 'مجس الأرضية [N]',
        proxGroundDelta: 'اعرض كل مجسات الأرضية',
        distance: 'اقرأ البعد [S]',
        angle: 'زاوية [S]',
        tilt: 'اقرأ زاوية الميل [T]',
        micIntensity: 'اقرأ درجة الصوت',
        odometer: 'اقرأ قيمة عداد المسافة [O]',
        motor: 'اقرآ سرعة المحرك [M]'
    },
    menus: {
        leftrightall: {
            left: 'يسار',
            right: 'يمين',
            all: 'الكل'
        },
        leftright: {
            left: 'يسار',
            right: 'يمين'
        },
        sensors: {
            front: 'أمام',
            back: 'خلف',
            ground: 'أرضا'
        },
        sensors2: {
            left: 'يسار',
            front: 'أمام',
            right: 'يمين',
            back: 'خلف',
            ground: 'أرضا'
        },
        proxsensors: {
            front_far_left: 'أمام-يسار-متطرف',
            front_left: 'أمام-يسار',
            front_center: 'أمام-مركز',
            front_right: 'أمام-يمين',
            front_far_right: 'أمام-يمين-متطرف',
            back_left: 'خلف-يسار',
            back_right: 'خلف-يمين'
        },
        horizontalSensors: {
            front_far_left: 'أمام-يسار-متطرف',
            front_left: 'أمام-يسار',
            front_center: 'أمام-مركز',
            front_right: 'أمام-يمين',
            front_far_right: 'أمام-يمين-متطرف',
            back_left: 'خلف-يسار',
            back_right: 'خلف-يمين'
        },
        groundSensors: {
            left: 'يساري',
            right: 'يميني'
        },
        light: {
            all: 'الكل',
            top: 'أعلى',
            bottom: 'أسفل',
            bottom_left: 'أسفل-يسار',
            bottom_right: 'أسفل-يمين'
        },
        angles: {
            front: 'أمام',
            back: 'خلف',
            ground: 'أرضا'
        },
        odo: {
            direction: 'اتجاه',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'أمام-خلف',
            top_bottom: 'أعلى-أسفل',
            left_right: 'يمين-يسار'
        },
        buttons: {
            center: 'مركز',
            front: 'أمام',
            back: 'خلف',
            left: 'يسار',
            right: 'يمين'
        },
        nearfar: {
            near: 'قريب',
            far: 'بعيد'
        }
    }
};
