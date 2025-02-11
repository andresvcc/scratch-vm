module.exports = {
    blocks: {
        setMotor: '[M]马达以[N]速度的移动',
        stopMotors: '停止所有马达',
        move: '移动 [N]',
        moveWithSpeed: '以速度 [S]移动[N] ',
        moveWithTime: '以速度 [N] 移动 [S]秒',
        turn: '旋转 [N]度',
        turnWithSpeed: '以速度 [S]旋转 [N]度 ',
        turnWithTime: '在 [S]秒内旋转 [N]度 ',
        arc: '延半径[R] 以 [A] 度角移动',
        setOdomoter: '设定 [N] 运动方向  x: [O] y: [P]',
        leds: ' 灯 [L] 红: [R] 绿: [G] 蓝: [B]',
        setLeds: '设置 [L] 的灯光颜色为 [C]',
        changeLeds: '改变灯 [L] 的颜色 [C]',
        clearLeds: '关闭所有的灯',
        nextDial: '打开下个 [L]的环形指示灯',
        ledsCircle: '环形指示灯 [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: '方向传感器指示灯 [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: '地面传感器指示灯 [A] [B]',
        ledsButtons: '按键指示灯 [A] [B] [C] [D]',
        ledsTemperature: '温度传感器指示灯 红: [A] 蓝: [B]',
        ledsRc: '遥控器指示灯 [A]',
        ledsSound: '声音传感器指示灯 [A]',
        soundSystem: '播放系统声音 [S]',
        soundFreq: '播放一个频率为 [N]赫兹的声音 持续[S]秒',
        soundPlaySd: '播放 SD 中的声音 [N]',
        soundRecord: '录音 [N]',
        stopSoundRecord: '停止录音',
        soundReplay: '播放录音 [N]',
        whenButton: '当按键 [B] 按下',
        touching: ' 当检测到 [S] 物体',
        notouching: '当未检测到 [S] 物体',
        touchingThreshold: '当探测到 [S] 物体 [N]',
        bump: '当检测到振动',
        soundDetected: '当检测到声音',
        noSoundDetected: '当检测不到噪音时',
        valButton: '按键 [B]',
        proximity: '方向传感器 [N]',
        proxHorizontal: '显示传感器探测状态',
        ground: '地面传感器 [N]',
        proxGroundDelta: '显示地面传感器状态',
        distance: '距离 [S]',
        angle: '角度 [S]',
        tilt: '  [T] 方向倾斜',
        micIntensity: '声音传感器状态',
        odometer: ' [O] 方向运动距离 ',
        motor: '[M] 马达速度 '
    },
    menus: {
        leftrightall: {
            left: '左',
            right: '右',
            all: '全部'
        },
        leftright: {
            left: '左',
            right: '右'
        },
        sensors: {
            front: '前',
            back: '后',
            ground: '地面'
        },
        sensors2: {
            left: '左',
            front: '前',
            right: '右',
            back: '后',
            ground: '地面'
        },
        proxsensors: {
            front_far_left: '左',
            front_left: '左前',
            front_center: '中间',
            front_right: '右前',
            front_far_right: '右',
            back_left: '左后',
            back_right: '右后'
        },
        horizontalSensors: {
            front_far_left: '左',
            front_left: '左前',
            front_center: '中间',
            front_right: '右前',
            front_far_right: '右',
            back_left: '左后',
            back_right: '右后'
        },
        groundSensors: {
            left: '左',
            right: '右'
        },
        light: {
            all: '所有',
            top: '顶部',
            bottom: '底部',
            bottom_left: '底部左侧',
            bottom_right: '底部右侧'
        },
        angles: {
            front: '前',
            back: '后',
            ground: '地面'
        },
        odo: {
            direction: '方向',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: '前-后',
            top_bottom: '上-下',
            left_right: '左-右'
        },
        buttons: {
            center: '中间',
            front: '前进',
            back: '后退',
            left: '向左',
            right: '向右'
        },
        nearfar: {
            near: '近',
            far: '远'
        }
    }
};
