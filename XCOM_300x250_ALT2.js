(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 300,
        height: 250,
        fps: 20,
        color: "#000000",
        manifest: [
            {src: "cta_txt.png", id: "cta_txt"},
            {src: "heads_300x250.jpg", id: "heads_300x250"},
            {src: "human_faces2.jpg", id: "human_faces2"},
            {src: "lense_flare2.jpg", id: "lense_flare2"},
            {src: "logo_2.png", id: "logo_2"},
            {src: "logo_C.png", id: "logo_C"},
            {src: "logo_M.png", id: "logo_M"},
            {src: "logo_O.png", id: "logo_O"},
            {src: "logo_X.png", id: "logo_X"},
            {src: "pattern_overlay1.png", id: "pattern_overlay1"},
            {src: "pattern_overlay2B.png", id: "pattern_overlay2B"},
            {src: "pattern_overlay3.png", id: "pattern_overlay3"},
            {src: "skull_face_ef.jpg", id: "skull_face_ef"},
            {src: "skulls_300x250.jpg", id: "skulls_300x250"},
            {src: "txt1_728.png", id: "txt1_728"},
            {src: "txt2_728.png", id: "txt2_728"},
            {src: "txt_ef_new.png", id: "txt_ef_new"}
        ]
    };


// symbols:


    (lib.cta_txt = function () {
        this.initialize(img.cta_txt);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 133, 15);


    (lib.heads_300x250 = function () {
        this.initialize(img.heads_300x250);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 470, 370);


    (lib.human_faces2 = function () {
        this.initialize(img.human_faces2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 279, 374);


    (lib.lense_flare2 = function () {
        this.initialize(img.lense_flare2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 200, 116);


    (lib.logo_2 = function () {
        this.initialize(img.logo_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 46, 60);


    (lib.logo_C = function () {
        this.initialize(img.logo_C);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 56, 48);


    (lib.logo_M = function () {
        this.initialize(img.logo_M);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 60, 51);


    (lib.logo_O = function () {
        this.initialize(img.logo_O);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 58, 48);


    (lib.logo_X = function () {
        this.initialize(img.logo_X);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 58, 53);


    (lib.pattern_overlay1 = function () {
        this.initialize(img.pattern_overlay1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 108, 90);


    (lib.pattern_overlay2B = function () {
        this.initialize(img.pattern_overlay2B);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 199, 45);


    (lib.pattern_overlay3 = function () {
        this.initialize(img.pattern_overlay3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 91, 73);


    (lib.skull_face_ef = function () {
        this.initialize(img.skull_face_ef);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);


    (lib.skulls_300x250 = function () {
        this.initialize(img.skulls_300x250);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 470, 370);


    (lib.txt1_728 = function () {
        this.initialize(img.txt1_728);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 75);


    (lib.txt2_728 = function () {
        this.initialize(img.txt2_728);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 75);


    (lib.txt_ef_new = function () {
        this.initialize(img.txt_ef_new);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 127, 75);


    (lib.txt2_container = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.txt2_728();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 75);


    (lib.txt1_container = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.txt1_728();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 231, 75);


    (lib.logoX = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.logo_X();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 58, 53);


    (lib.logoO = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.logo_O();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 58, 48);


    (lib.logoM = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.logo_M();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 60, 51);


    (lib.logoC = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.logo_C();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 56, 48);


    (lib.logo2 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.logo_2();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 46, 60);


    (lib.human_faces = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.human_faces2();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 279, 374);


    (lib.flare = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.lense_flare2();
        this.instance.setTransform(17.6, -10.6);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(17.6, -10.6, 200, 116);


    (lib.ef_txt = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.txt_ef_new();
        this.instance.setTransform(8, 4);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(8, 4, 127, 75);


    (lib.cta3 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,245,247,0.012)").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
        this.shape.setTransform(300, 250);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);


    (lib.cta_txt2 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.cta_txt();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 133, 15);


    (lib.cta_bg2 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#00D2FF").ss(1, 1, 1).p("Aq/iHIV/AAQAqAAAdAdQAdAeAAApIAABHQAAApgdAdQgdAegqAAI1/AAQgqAAgdgeQgdgdAAgpIAAhHQAAgpAdgeQAdgdAqAAg");
        this.shape.setTransform(80.5, 13.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(12,29,44,0.749)").s().p("Aq/CIQgqAAgdgeQgdgdAAgpIAAhHQAAgpAdgeQAdgdAqAAIV/AAQAqAAAdAdQAdAeAAApIAABHQAAApgdAdQgdAegqAAg");
        this.shape_1.setTransform(80.5, 13.6);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 163, 29.3);


    (lib.black_fade3 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
        this.shape.setTransform(150, 125);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);


    (lib.black_fade = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
        this.shape.setTransform(150, 125, 0.412, 2.778);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);


    (lib.black_bg3 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
        this.shape.setTransform(150, 125);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);


    (lib.black_ball = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#000000", "rgba(0,0,0,0)"], [0.486, 1], 0, 0, 0, 0, 0, 358.4).s().p("EgnNAldQwQvhgB18QAB17QQviQQQvgW9gBQW+ABQRPgQQQPigBV7QABV8wQPhQwRPh2+ABQ29gBwQvhg");
        this.shape.setTransform(355.1, 339.1);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 710.2, 678.2);


    (lib.bg3_container = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.skull_face_ef();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);


    (lib.bg2_new = function () {
        this.initialize();

        // Layer 3
        this.instance = new lib.skulls_300x250();
        this.instance.setTransform(126, 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(126, 0, 470, 370);


    (lib.bg1_new = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.heads_300x250();
        this.instance.setTransform(427, 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(427, 0, 470, 370);


    (lib.bg_pattern3 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.pattern_overlay3();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 91, 73);


    (lib.bg_pattern2 = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.pattern_overlay2B();
        this.instance.setTransform(150, 0, 2, 2);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 548, 90);


    (lib.bg_pattern1 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.pattern_overlay1();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 108, 90);


    (lib.txt2 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.txt2_container();
        this.instance.setTransform(115.5, 37.5, 1, 1, 0, 0, 0, 115.5, 37.5);
        this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 4);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-2, -2, 239, 83);


    (lib.txt1 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.txt1_container();
        this.instance.setTransform(115.5, 37.5, 1, 1, 0, 0, 0, 115.5, 37.5);
        this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 4);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-2, -2, 239, 83);


    (lib.logo = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.logoX();
        this.instance.setTransform(22, 25.5, 1, 1, 0, 0, 0, 29, 26.5);

        this.instance_1 = new lib.logoC();
        this.instance_1.setTransform(70, 29, 1, 1, 0, 0, 0, 28, 24);

        this.instance_2 = new lib.logoO();
        this.instance_2.setTransform(123, 29, 1, 1, 0, 0, 0, 29, 24);

        this.instance_3 = new lib.logoM();
        this.instance_3.setTransform(181, 27.5, 1, 1, 0, 0, 0, 30, 25.5);

        this.instance_4 = new lib.logo2();
        this.instance_4.setTransform(234, 29, 1, 1, 0, 0, 0, 23, 30);

        this.addChild(this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-7, -1, 264, 60);


    (lib.cta_container = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_15 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aq/CIQgqAAgdgeIAAAAQgdgdAAgpIAAAAIAAhHQAAgpAdgeIAAAAQAdgdAqAAIAAAAIV/AAQAqAAAdAdIAAAAQAdAeAAApIAAAAIAABHQAAApgdAdIAAAAQgdAegqAAIAAAAg");
        mask.setTransform(84.5, 16.4);

        // Layer 7
        this.instance = new lib.flare();
        this.instance.setTransform(-233.5, 10.8, 2.5, 2.5, 0, 0, 0, 112.5, 33.5);
        this.instance.compositeOperation = "lighter";

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: 117.6,
            regY: 47.4,
            x: -130.8,
            y: 53.1
        }, 0).wait(1).to({x: -50.6, y: 59.9}, 0).wait(1).to({x: 17, y: 65.6}, 0).wait(1).to({
            x: 73,
            y: 70.3
        }, 0).wait(1).to({x: 119.3, y: 74.2}, 0).wait(1).to({x: 157.4, y: 77.4}, 0).wait(1).to({
            x: 188.7,
            y: 80.1
        }, 0).wait(1).to({x: 214.1, y: 82.2}, 0).wait(1).to({x: 234.6, y: 84}, 0).wait(1).to({
            x: 250.8,
            y: 85.3
        }, 0).wait(1).to({x: 263.2, y: 86.4}, 0).wait(1).to({x: 272.4, y: 87.1}, 0).wait(1).to({
            x: 278.5,
            y: 87.7
        }, 0).wait(1).to({x: 282, y: 88}, 0).wait(1).to({regX: 112.5, regY: 33.5, x: 270.4, y: 53.3}, 0).wait(1));

        // Layer 4
        this.instance_1 = new lib.cta_txt2();
        this.instance_1.setTransform(84.5, -13.5, 1, 1, 0, 0, 0, 66.5, 9.5);

        this.instance_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y: -12.2}, 0).wait(1).to({y: -7.9}, 0).wait(1).to({y: 0.1}, 0).wait(1).to({y: 8.2}, 0).wait(1).to({y: 13.2}, 0).wait(1).to({y: 15.7}, 0).wait(1).to({y: 16.5}, 0).wait(9));

        // Layer 2
        this.instance_2 = new lib.cta_txt2();
        this.instance_2.setTransform(84.5, 16.5, 1, 1, 0, 0, 0, 66.5, 9.5);

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y: 17.8}, 0).wait(1).to({y: 22}, 0).wait(1).to({y: 30}, 0).wait(1).to({y: 38.2}, 0).wait(1).to({y: 43.2}, 0).wait(1).to({y: 45.7}, 0).wait(1).to({y: 46.5}, 0).wait(9));

        // Layer 3
        this.instance_3 = new lib.cta_bg2();
        this.instance_3.setTransform(84.5, 16.4, 1, 1, 0, 0, 0, 80.5, 13.6);
        this.instance_3.shadow = new cjs.Shadow("rgba(7,134,163,1)", 0, 0, 4);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1.5, 0.3, 170, 36);


    (lib.black_fade2 = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.black_fade();
        this.instance.setTransform(1287, 338.7, 1, 1.233, 0, 0, 0, 364, 45.1);

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(0,0,0,0)", "#000000"], [0.106, 1], -25.1, 0, 25.1, 0).s().p("Aj6YeMAAAgw8IH0AAMAAAAw8g");
        this.shape.setTransform(898.1, 437.2);

        this.addChild(this.shape, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(873, 280.5, 350, 313.4);


    (lib.big_skulls = function () {
        this.initialize();

        // Layer 6
        this.instance = new lib.black_ball();
        this.instance.setTransform(-603.6, 437.2, 1.5, 1.5, 0, 0, 0, 355.1, 339.1);

        this.instance_1 = new lib.black_ball();
        this.instance_1.setTransform(596.7, 419.2, 1.5, 1.5, 0, 0, 0, 355.1, 339.1);

        // bg2_new
        this.instance_2 = new lib.bg2_new();
        this.instance_2.setTransform(425.5, 16.5, 1, 1, 0, 180, 0, 487.5, 62.5);

        // bg2_new
        this.instance_3 = new lib.bg2_new();
        this.instance_3.setTransform(-293.5, 16.5, 1, 1, 180, 0, 0, 487.5, 62.5);

        this.instance_4 = new lib.bg2_new();
        this.instance_4.setTransform(-293.5, 754.5, 1, 1, 180, 0, 0, 487.5, 62.5);

        this.instance_5 = new lib.bg2_new();
        this.instance_5.setTransform(-293.5, 140.5, 1, 1, 0, 0, 180, 487.5, 62.5);

        this.instance_6 = new lib.bg2_new();
        this.instance_6.setTransform(638.5, 16.5, 1, 1, 180, 0, 0, 487.5, 62.5);

        this.instance_7 = new lib.bg2_new();
        this.instance_7.setTransform(638.5, 754.5, 1, 1, 180, 0, 0, 487.5, 62.5);

        this.instance_8 = new lib.bg2_new();
        this.instance_8.setTransform(638.5, 140.5, 1, 1, 0, 0, 180, 487.5, 62.5);

        this.instance_9 = new lib.bg2_new();
        this.instance_9.setTransform(425.5, 754.5, 1, 1, 0, 180, 0, 487.5, 62.5);

        // bg2_new
        this.instance_10 = new lib.bg2_new();
        this.instance_10.setTransform(425.5, 140.5, 1, 1, 0, 0, 0, 487.5, 62.5);

        this.addChild(this.instance_10, this.instance_9, this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1136.3, -291, 2265.6, 1236.8);


    (lib.bg3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }
        this.frame_31 = function () {
            this.gotoAndStop(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(1));

        // Layer 3
        this.instance = new lib.human_faces();
        this.instance.setTransform(87.1, 125.3, 0.67, 0.67, 0, 0, 0, 130, 187);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: 139.5,
            scaleX: 0.89,
            scaleY: 0.89,
            x: 124.3,
            y: 118.4,
            alpha: 0.67
        }, 0).wait(1).to({scaleX: 0.96, scaleY: 0.96, x: 133.9, y: 116.3, alpha: 0.877}, 0).wait(1).to({
            scaleX: 0.99,
            scaleY: 0.99,
            x: 137.6,
            y: 115.5,
            alpha: 0.959
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 139.1, y: 115.2, alpha: 0.992}, 0).wait(1).to({
            regX: 130,
            scaleX: 1,
            scaleY: 1,
            x: 130,
            y: 115,
            alpha: 1
        }, 0).wait(2).to({
            regX: 139.5,
            scaleX: 1,
            scaleY: 1,
            x: 139.4,
            y: 115.1,
            alpha: 0.998
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 139.2, alpha: 0.993}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 138.9,
            y: 115.2,
            alpha: 0.986
        }, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, x: 138.4, y: 115.3, alpha: 0.976}, 0).wait(1).to({
            scaleX: 0.99,
            scaleY: 0.99,
            x: 137.8,
            y: 115.4,
            alpha: 0.962
        }, 0).wait(1).to({scaleX: 0.98, scaleY: 0.98, x: 137, y: 115.6, alpha: 0.944}, 0).wait(1).to({
            scaleX: 0.97,
            scaleY: 0.97,
            x: 135.9,
            y: 115.9,
            alpha: 0.921
        }, 0).wait(1).to({scaleX: 0.97, scaleY: 0.97, x: 134.6, y: 116.1, alpha: 0.893}, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            x: 132.9,
            y: 116.5,
            alpha: 0.856
        }, 0).wait(1).to({scaleX: 0.94, scaleY: 0.94, x: 130.8, y: 117, alpha: 0.811}, 0).wait(1).to({
            scaleX: 0.92,
            scaleY: 0.92,
            x: 128.2,
            y: 117.6,
            alpha: 0.753
        }, 0).wait(1).to({scaleX: 0.9, scaleY: 0.9, x: 124.8, y: 118.4, alpha: 0.681}, 0).wait(1).to({
            scaleX: 0.87,
            scaleY: 0.87,
            x: 120.7,
            y: 119.2,
            alpha: 0.592
        }, 0).wait(1).to({scaleX: 0.83, scaleY: 0.83, x: 115.9, y: 120.3, alpha: 0.487}, 0).wait(1).to({
            scaleX: 0.79,
            scaleY: 0.79,
            x: 110.8,
            y: 121.5,
            alpha: 0.376
        }, 0).wait(1).to({scaleX: 0.76, scaleY: 0.76, x: 106.2, y: 122.5, alpha: 0.277}, 0).wait(1).to({
            scaleX: 0.74,
            scaleY: 0.74,
            x: 102.5,
            y: 123.3,
            alpha: 0.196
        }, 0).wait(1).to({scaleX: 0.72, scaleY: 0.72, x: 99.7, y: 123.9, alpha: 0.136}, 0).wait(1).to({
            scaleX: 0.7,
            scaleY: 0.7,
            x: 97.7,
            y: 124.4,
            alpha: 0.091
        }, 0).wait(1).to({scaleX: 0.69, scaleY: 0.69, x: 96.1, y: 124.7, alpha: 0.058}, 0).wait(1).to({
            scaleX: 0.68,
            scaleY: 0.68,
            x: 95.1,
            y: 125,
            alpha: 0.034
        }, 0).wait(1).to({scaleX: 0.68, scaleY: 0.68, x: 94.3, y: 125.2, alpha: 0.018}, 0).wait(1).to({
            scaleX: 0.67,
            scaleY: 0.67,
            x: 93.8,
            y: 125.3,
            alpha: 0.007
        }, 0).wait(1).to({scaleX: 0.67, scaleY: 0.67, x: 93.6, alpha: 0.002}, 0).wait(1).to({
            regX: 130,
            scaleX: 0.67,
            scaleY: 0.67,
            x: 87.1,
            alpha: 0
        }, 0).wait(1));

        // Layer 1
        this.instance_1 = new lib.bg3_container();
        this.instance_1.setTransform(269, 45, 1, 1, 0, 0, 0, 269, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            regX: 150,
            regY: 125,
            scaleX: 1.34,
            scaleY: 1.34,
            x: 199,
            y: 118.7
        }, 0).wait(1).to({scaleX: 1.44, scaleY: 1.44, x: 214.1, y: 116.7}, 0).wait(1).to({
            scaleX: 1.48,
            scaleY: 1.48,
            x: 220,
            y: 115.9
        }, 0).wait(1).to({scaleX: 1.5, scaleY: 1.5, x: 222.4, y: 115.6}, 0).wait(1).to({
            regX: 269,
            regY: 45,
            scaleX: 1.5,
            scaleY: 1.5,
            x: 401.5,
            y: -4.5
        }, 0).wait(2).to({
            regX: 150,
            regY: 125,
            scaleX: 1.5,
            scaleY: 1.5,
            x: 222.9,
            y: 115.6
        }, 0).wait(1).to({scaleX: 1.5, scaleY: 1.5, x: 222.6}, 0).wait(1).to({
            scaleX: 1.49,
            scaleY: 1.49,
            x: 222,
            y: 115.7
        }, 0).wait(1).to({scaleX: 1.49, scaleY: 1.49, x: 221.3, y: 115.8}, 0).wait(1).to({
            scaleX: 1.48,
            scaleY: 1.48,
            x: 220.3,
            y: 115.9
        }, 0).wait(1).to({scaleX: 1.47, scaleY: 1.47, x: 219, y: 116.1}, 0).wait(1).to({
            scaleX: 1.46,
            scaleY: 1.46,
            x: 217.3,
            y: 116.3
        }, 0).wait(1).to({scaleX: 1.45, scaleY: 1.45, x: 215.2, y: 116.6}, 0).wait(1).to({
            scaleX: 1.43,
            scaleY: 1.43,
            x: 212.5,
            y: 116.9
        }, 0).wait(1).to({scaleX: 1.41, scaleY: 1.41, x: 209.2, y: 117.3}, 0).wait(1).to({
            scaleX: 1.38,
            scaleY: 1.38,
            x: 205,
            y: 117.9
        }, 0).wait(1).to({scaleX: 1.34, scaleY: 1.34, x: 199.8, y: 118.6}, 0).wait(1).to({
            scaleX: 1.3,
            scaleY: 1.3,
            x: 193.3,
            y: 119.4
        }, 0).wait(1).to({scaleX: 1.24, scaleY: 1.24, x: 185.6, y: 120.4}, 0).wait(1).to({
            scaleX: 1.19,
            scaleY: 1.19,
            x: 177.5,
            y: 121.5
        }, 0).wait(1).to({scaleX: 1.14, scaleY: 1.14, x: 170.2, y: 122.4}, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: 1.1,
            x: 164.4,
            y: 123.2
        }, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 160, y: 123.8}, 0).wait(1).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 156.7,
            y: 124.2
        }, 0).wait(1).to({scaleX: 1.03, scaleY: 1.03, x: 154.3, y: 124.5}, 0).wait(1).to({
            scaleX: 1.02,
            scaleY: 1.02,
            x: 152.5,
            y: 124.7
        }, 0).wait(1).to({scaleX: 1.01, scaleY: 1.01, x: 151.4, y: 124.9}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 150.6,
            y: 125
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 150.2}, 0).wait(1).to({
            regX: 269,
            regY: 45,
            scaleX: 1,
            scaleY: 1,
            x: 269,
            y: 45
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250.6);


// stage content:


    (lib.XCOM_300x250_ALT2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_44 = function () {
            /* Mouse Over Event
             Working Rollover code
             */

            var frequency = 100;
            stage.enableMouseOver(frequency);

            this.cta2.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
            this.cta2.addEventListener("click", fl_MouseClickHandler.bind(this));

            function fl_MouseOverHandler() {
                this.cta.play();
                this.bg3.play();
            }

            function fl_MouseClickHandler() {
                EB.clickthrough();
            }
        }
        this.frame_357 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(313).call(this.frame_357).wait(3));

        // CTA hit area
        this.cta2 = new lib.cta3();
        this.cta2.setTransform(150, 125, 0.5, 0.5, 0, 0, 0, 300, 250);

        this.timeline.addTween(cjs.Tween.get(this.cta2).wait(360));

        // outline
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
        this.shape.setTransform(150, 125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

        // black fade
        this.instance = new lib.black_fade3();
        this.instance.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off: false}, 0).to({alpha: 1}, 10).to({alpha: 0}, 5).to({_off: true}, 1).wait(315));

        // mask1 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_209 = new cjs.Graphics().p("A2MNTIAAjDIF6AAIAADDgAGqKdIAAhvIFCAAIAABvgAQvGwIAAjTIFeAAIAADTgA2MBfIAAiJIMQAAIAACJg");
        var mask_graphics_210 = new cjs.Graphics().p("AVVNhIAAjSIFdAAIAADSgAnGLHIAAi2IGJAAIAAC2gAyrKPIAAjEIF6AAIAADEgAGqKCIAAhxIELAAIAABxgAQTHLIAAhvIFCAAIAABvgA6yFNIAAlcIFRAAIAAFcgAuUCzIAAlNIJbAAIAAipIEJAAIAAGjIhUAAIAABTgALCgcIAAgrIEZAAIAAArg");
        var mask_graphics_211 = new cjs.Graphics().p("ABFPDIAAinIpYAAIAAlRIMPAAIAABVIBUAAIAAGjgAJ2IDIAAgpIEYAAIAAApgA7/HLIAAleIFRAAIAAFegAVAFNIAAjEIHAAAIAADEgAuaEkIAAi3IGHAAIAAC3gAPGBgIAAhvIFCAAIAABvgAz5gPIAAjDIF7AAIAADDgAFdhUIAAhxIELAAIAABxgAUIjSIAAjTIFeAAIAADTg");
        var mask_graphics_212 = new cjs.Graphics().p("AmONbIAAhxIELAAIAABxgA5rLqIAAjSIFeAAIAADSgAKnLdIAAjFIHAAAIAADFgACTIYIAAioIpZAAIAAlQIMOAAIAABUIBUAAIAAGkgAV/HhIAAhxIFCAAIAABxgAK1DJIAAgrIEYAAIAAArgAuiDJIAAjEIF6AAIAADEgA7ACRIAAlcIFRAAIAAFcgAtbgVIAAi2IGHAAIAAC2g");
        var mask_graphics_213 = new cjs.Graphics().p("EgqNAOSIAA0GMBUbAAAIAAUGgAjRMUIEJAAIAAhvIkJAAgA2uKlIFeAAIAAjSIleAAgANjKWIHBAAIAAjDInBAAgAkJErIJZAAIAACoIEJAAIAAmkIhUAAIAAhSIsOAAgAY8GaIFCAAIAAhvIlCAAgANyCCIEYAAIAAgpIkYAAgArlCCIF6AAIAAjCIl6AAgA4DBLIFRAAIAAldIlRAAgAqehcIGHAAIAAi2ImHAAg");
        var mask_graphics_214 = new cjs.Graphics().p("EgodAM9IAAuCMBQ7AAAIAAOCg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(209).to({graphics: mask_graphics_209, x: 27.9, y: 85.2}).wait(1).to({
            graphics: mask_graphics_210,
            x: 75.5,
            y: 86.6
        }).wait(1).to({graphics: mask_graphics_211, x: 111.2, y: 96.4}).wait(1).to({
            graphics: mask_graphics_212,
            x: 104.9,
            y: 85.9
        }).wait(1).to({graphics: mask_graphics_213, x: 212, y: 91.5}).wait(1).to({
            graphics: mask_graphics_214,
            x: 232,
            y: 83
        }).wait(1).to({graphics: null, x: 0, y: 0}).wait(145));

        // txt2_728.png
        this.instance_1 = new lib.txt2();
        this.instance_1.setTransform(102.5, 119.5, 2, 2, 0, 0, 0, 115.5, 37.5);
        this.instance_1._off = true;

        this.instance_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off: false}, 0).wait(1).to({
            scaleX: 1.5,
            scaleY: 1.5,
            x: 130.5
        }, 0).to({scaleX: 1, scaleY: 1, x: 150.5}, 3).to({_off: true}, 2).wait(145));

        // mask1 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_186 = new cjs.Graphics().p("A2MNTIAAjDIF6AAIAADDgAGqKdIAAhvIFCAAIAABvgAQvGwIAAjTIFeAAIAADTgA2MBfIAAiJIMQAAIAACJg");
        var mask_1_graphics_187 = new cjs.Graphics().p("AVVNhIAAjSIFdAAIAADSgAnGLHIAAi2IGJAAIAAC2gAyrKPIAAjEIF6AAIAADEgAGqKCIAAhxIELAAIAABxgAQTHLIAAhvIFCAAIAABvgA6yFNIAAlcIFRAAIAAFcgAuUCzIAAlNIJbAAIAAipIEJAAIAAGjIhUAAIAABTgALCgcIAAgrIEZAAIAAArg");
        var mask_1_graphics_188 = new cjs.Graphics().p("ABFPDIAAinIpYAAIAAlRIMPAAIAABVIBUAAIAAGjgAJ2IDIAAgpIEYAAIAAApgA7/HLIAAleIFRAAIAAFegAVAFNIAAjEIHAAAIAADEgAuaEkIAAi3IGHAAIAAC3gAPGBgIAAhvIFCAAIAABvgAz5gPIAAjDIF7AAIAADDgAFdhUIAAhxIELAAIAABxgAUIjSIAAjTIFeAAIAADTg");
        var mask_1_graphics_189 = new cjs.Graphics().p("AmONbIAAhxIELAAIAABxgA5rLqIAAjSIFeAAIAADSgAKnLdIAAjFIHAAAIAADFgACTIYIAAioIpZAAIAAlQIMOAAIAABUIBUAAIAAGkgAV/HhIAAhxIFCAAIAABxgAK1DJIAAgrIEYAAIAAArgAuiDJIAAjEIF6AAIAADEgA7ACRIAAlcIFRAAIAAFcgAtbgVIAAi2IGHAAIAAC2g");
        var mask_1_graphics_190 = new cjs.Graphics().p("EgqNAOSIAA0GMBUbAAAIAAUGgAjRMUIEJAAIAAhvIkJAAgA2uKlIFeAAIAAjSIleAAgANjKWIHBAAIAAjDInBAAgAkJErIJZAAIAACoIEJAAIAAmkIhUAAIAAhSIsOAAgAY8GaIFCAAIAAhvIlCAAgANyCCIEYAAIAAgpIkYAAgArlCCIF6AAIAAjCIl6AAgA4DBLIFRAAIAAldIlRAAgAqehcIGHAAIAAi2ImHAAg");
        var mask_1_graphics_191 = new cjs.Graphics().p("EgodAM9IAAuCMBQ7AAAIAAOCg");
        var mask_1_graphics_211 = new cjs.Graphics().p("AIHNgIAAh3ImuAAIAAjxIIxAAIAAA9IA7AAIAAErgAOYIhIAAgfIDIAAIAAAfgAspH4IAAj6IDwAAIAAD6gAWVGeIAAiLIFBAAIAACLgAi9GBIAAiDIEWAAIAACDgASHD0IAAhQIDnAAIAABQgAm2CkIAAiLIEOAAIAACLgALPBzIAAhQIC/AAIAABQgAVuAZIAAiVID6AAIAACVg");
        var mask_1_graphics_212 = new cjs.Graphics().p("A9SM9IAAuWMA8SAAAIAAOWgAheLjIC8AAIAAhPIi8AAgAvYKUID7AAIAAiWIj7AAgAKjKJIE/AAIAAiLIk/AAgAiFGGIGrAAIAAB4IC+AAIAAksIg7AAIAAg8IouAAgASqHVIDnAAIAAhPIjnAAgAKtENIDIAAIAAgdIjIAAgAnZENIEOAAIAAiLIkOAAgAwUDmIDwAAIAAj5IjwAAgAmoBtIEYAAIAAiAIkYAAg");
        var mask_1_graphics_213 = new cjs.Graphics().p("EgodAM9IAAuCMBQ7AAAIAAOCg");
        var mask_1_graphics_239 = new cjs.Graphics().p("AC5LjIAAhPIC9AAIAABPgArAKUIAAiWID7AAIAACWgAO7KJIAAiLIE/AAIAACLgAI+H+IAAh4ImtAAIAAjwIIwAAIAAA8IA7AAIAAEsgAXCHVIAAhPIDnAAIAABPgAPFENIAAgdIDIAAIAAAdgAjBENIAAiLIEMAAIAACLgAr8DmIAAj5IDwAAIAAD5gAiQBtIAAiAIEWAAIAACAg");
        var mask_1_graphics_240 = new cjs.Graphics().p("AkCMQIAAiLIEMAAIAACLgAQjKPIAAhRIDnAAIAABRgAXwHkIAAiWID5AAIAACWgAkCD0IAAhkIIuAAIAABkg");
        var mask_1_graphics_241 = new cjs.Graphics().p("AWlMbIAAiWID6AAIAACWgACQKsIAAiBIEZAAIAACBgAl/KFIAAiNIEOAAIAACNgAMGJ7IAAhQIC/AAIAABQgAS+H4IAAhPIDnAAIAABPgAryGeIAAj5IDwAAIAAD5gAi3EwIAAjvIGsAAIAAh3IC+AAIAAErIg8AAIAAA7gAPPCbIAAgfIDIAAIAAAfg");
        var mask_1_graphics_242 = new cjs.Graphics().p("AIHNgIAAh3ImuAAIAAjxIIxAAIAAA9IA7AAIAAErgAOYIhIAAgfIDIAAIAAAfgAspH4IAAj6IDwAAIAAD6gAWVGeIAAiLIFBAAIAACLgAi9GBIAAiDIEWAAIAACDgASHD0IAAhQIDnAAIAABQgAm2CkIAAiLIEOAAIAACLgALPBzIAAhQIC/AAIAABQgAVuAZIAAiVID6AAIAACVg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(186).to({graphics: mask_1_graphics_186, x: 27.9, y: 85.2}).wait(1).to({
            graphics: mask_1_graphics_187,
            x: 75.5,
            y: 86.6
        }).wait(1).to({graphics: mask_1_graphics_188, x: 111.2, y: 96.4}).wait(1).to({
            graphics: mask_1_graphics_189,
            x: 104.9,
            y: 85.9
        }).wait(1).to({graphics: mask_1_graphics_190, x: 212, y: 91.5}).wait(1).to({
            graphics: mask_1_graphics_191,
            x: 232,
            y: 83
        }).wait(20).to({graphics: mask_1_graphics_211, x: 175, y: 86.5}).wait(1).to({
            graphics: mask_1_graphics_212,
            x: 198.5,
            y: 83
        }).wait(1).to({graphics: mask_1_graphics_213, x: 232, y: 83}).wait(26).to({
            graphics: mask_1_graphics_239,
            x: 170.5,
            y: 74
        }).wait(1).to({graphics: mask_1_graphics_240, x: 177, y: 78.5}).wait(1).to({
            graphics: mask_1_graphics_241,
            x: 169.5,
            y: 79.5
        }).wait(1).to({graphics: mask_1_graphics_242, x: 175, y: 86.5}).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(117));

        // txt2_728.png
        this.instance_2 = new lib.txt2();
        this.instance_2.setTransform(102.5, 119.5, 2, 2, 0, 0, 0, 115.5, 37.5);
        this.instance_2._off = true;

        this.instance_2.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(186).to({_off: false}, 0).wait(1).to({
            scaleX: 1.5,
            scaleY: 1.5,
            x: 130.5
        }, 0).to({scaleX: 1, scaleY: 1, x: 150.5}, 3).wait(51).to({scaleY: 0.5}, 0).wait(1).to({
            regY: 37.4,
            scaleY: 0.25
        }, 0).to({_off: true}, 1).wait(117));

        // mask1 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        var mask_2_graphics_93 = new cjs.Graphics().p("ApZMzIAAiwIFUAAIAACwgAQkKQIAAhlIEiAAIAABlgAZnG5IAAi9IE7AAIAAC9gApZCLIAAh+ILAAAIAAB+g");
        var mask_2_graphics_94 = new cjs.Graphics().p("AYJNAIAAi9IE7AAIAAC9gAhbK1IAAijIFfAAIAACjgAr2KDIAAiwIFUAAIAACwgAK9J2IAAhkIDwAAIAABkgAToHTIAAhlIEhAAIAABlgAzJFhIAAk7IEvAAIAAE7gAn6DXIAAktIIbAAIAAiXIDwAAIAAF4IhMAAIAABMgAO5AaIAAgkID8AAIAAAkg");
        var mask_2_graphics_95 = new cjs.Graphics().p("AF8OYIAAiXIodAAIAAkvILBAAIAABMIBLAAIAAF6gAN0IFIAAgmID8AAIAAAmgA0PHSIAAk7IEvAAIAAE7gAX2FhIAAiwIGUAAIAACwgAoBE7IAAikIFgAAIAACkgASiCLIAAhlIEhAAIAABlgAs8AmIAAiuIFUAAIAACugAJ4gXIAAhlIDvAAIAABlgAXDiIIAAi9IE7AAIAAC9g");
        var mask_2_graphics_96 = new cjs.Graphics().p("AgpL7IAAhlIDuAAIAABlgAyKKWIAAi9IE7AAIAAC9gAOgKJIAAiwIGTAAIAACwgAHBHZIAAiXIocAAIAAkvILAAAIAABMIBLAAIAAF6gAYvGmIAAhkIEiAAIAABkgAOsCqIAAglID8AAIAAAlgAoHCqIAAiuIFUAAIAACugAzWB4IAAk5IEvAAIAAE5gAnIgdIAAikIFgAAIAACkg");
        var mask_2_graphics_97 = new cjs.Graphics().p("Egl+ANsIAAyFMBL9AAAIAASFgAi8L7IDuAAIAAhlIjuAAgA0dKWIE7AAIAAi9Ik7AAgAMNKJIGTAAIAAiwImTAAgAjuFCIIcAAIAACXIDvAAIAAl6IhLAAIAAhMIrAAAgAWcGnIEiAAIAAhlIkiAAgAMZCrID8AAIAAgmIj8AAgAqaCrIFUAAIAAivIlUAAgA1pB4IEvAAIAAk5IkvAAgApbgdIFgAAIAAikIlgAAg");
        var mask_2_graphics_98 = new cjs.Graphics().p("EgocAMzIAAuCMBQ5AAAIAAOCg");

        this.timeline.addTween(cjs.Tween.get(mask_2).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(93).to({graphics: mask_2_graphics_93, x: 195.5, y: 82}).wait(1).to({
            graphics: mask_2_graphics_94,
            x: 186.1,
            y: 83.3
        }).wait(1).to({graphics: mask_2_graphics_95, x: 193, y: 92.1}).wait(1).to({
            graphics: mask_2_graphics_96,
            x: 187.3,
            y: 76.3
        }).wait(1).to({graphics: mask_2_graphics_97, x: 202, y: 87.7}).wait(1).to({
            graphics: mask_2_graphics_98,
            x: 230,
            y: 82
        }).wait(1).to({graphics: null, x: 0, y: 0}).wait(261));

        // txt1_728.png
        this.instance_3 = new lib.txt1();
        this.instance_3.setTransform(158.5, 117.5, 2, 2, 0, 0, 0, 115.5, 37.5);
        this.instance_3._off = true;

        this.instance_3.mask = mask_2;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(93).to({_off: false}, 0).wait(1).to({
            scaleX: 1.5,
            scaleY: 1.5,
            x: 138.5
        }, 0).to({scaleX: 1, scaleY: 1, x: 148.5}, 3).to({_off: true}, 2).wait(261));

        // mask1 (mask)
        var mask_3 = new cjs.Shape();
        mask_3._off = true;
        var mask_3_graphics_83 = new cjs.Graphics().p("ApZMzIAAiwIFUAAIAACwgAQkKQIAAhlIEiAAIAABlgAZnG5IAAi9IE7AAIAAC9gApZCLIAAh+ILAAAIAAB+g");
        var mask_3_graphics_84 = new cjs.Graphics().p("AYJNAIAAi9IE7AAIAAC9gAhbK1IAAijIFfAAIAACjgAr2KDIAAiwIFUAAIAACwgAK9J2IAAhkIDwAAIAABkgAToHTIAAhlIEhAAIAABlgAzJFhIAAk7IEvAAIAAE7gAn6DXIAAktIIbAAIAAiXIDwAAIAAF4IhMAAIAABMgAO5AaIAAgkID8AAIAAAkg");
        var mask_3_graphics_85 = new cjs.Graphics().p("AF8OYIAAiXIodAAIAAkvILBAAIAABMIBLAAIAAF6gAN0IFIAAgmID8AAIAAAmgA0PHSIAAk7IEvAAIAAE7gAX2FhIAAiwIGUAAIAACwgAoBE7IAAikIFgAAIAACkgASiCLIAAhlIEhAAIAABlgAs8AmIAAiuIFUAAIAACugAJ4gXIAAhlIDvAAIAABlgAXDiIIAAi9IE7AAIAAC9g");
        var mask_3_graphics_86 = new cjs.Graphics().p("AgpL7IAAhlIDuAAIAABlgAyKKWIAAi9IE7AAIAAC9gAOgKJIAAiwIGTAAIAACwgAHBHZIAAiXIocAAIAAkvILAAAIAABMIBLAAIAAF6gAYvGmIAAhkIEiAAIAABkgAOsCqIAAglID8AAIAAAlgAoHCqIAAiuIFUAAIAACugAzWB4IAAk5IEvAAIAAE5gAnIgdIAAikIFgAAIAACkg");
        var mask_3_graphics_87 = new cjs.Graphics().p("Egl+ANsIAAyFMBL9AAAIAASFgAi8L7IDuAAIAAhlIjuAAgA0dKWIE7AAIAAi9Ik7AAgAMNKJIGTAAIAAiwImTAAgAjuFCIIcAAIAACXIDvAAIAAl6IhLAAIAAhMIrAAAgAWcGnIEiAAIAAhlIkiAAgAMZCrID8AAIAAgmIj8AAgAqaCrIFUAAIAAivIlUAAgA1pB4IEvAAIAAk5IkvAAgApbgdIFgAAIAAikIlgAAg");
        var mask_3_graphics_88 = new cjs.Graphics().p("EgocAMzIAAuCMBQ5AAAIAAOCg");
        var mask_3_graphics_95 = new cjs.Graphics().p("AH+NXIAAh4ImvAAIAAjwIIwAAIAAA8IA8AAIAAEsgAONIWIAAgeIDJAAIAAAegAszHvIAAj7IDxAAIAAD7gAWLGVIAAiNIFBAAIAACNgAjHF3IAAiDIEWAAIAACDgAR9DqIAAhQIDnAAIAABQgAnBCaIAAiLIEOAAIAACLgALFBpIAAhQIC+AAIAABQgAVkAPIAAiVID5AAIAACVg");
        var mask_3_graphics_96 = new cjs.Graphics().p("A9cMzIAAuWMA8TAAAIAAOWgAhnLZIC8AAIAAhQIi8AAgAvhKJID6AAIAAiVIj6AAgAKYJ/IFBAAIAAiLIlBAAgAiQF7IGsAAIAAB5IC+AAIAAktIg7AAIAAg7IovAAgASgHLIDnAAIAAhQIjnAAgAKiEEIDJAAIAAgeIjJAAgAnjEEIEOAAIAAiNIkOAAgAweDcIDxAAIAAj4IjxAAgAmyBjIEYAAIAAh/IkYAAg");
        var mask_3_graphics_97 = new cjs.Graphics().p("EgocAMzIAAuCMBQ5AAAIAAOCg");
        var mask_3_graphics_128 = new cjs.Graphics().p("ACvLZIAAhQIC+AAIAABQgArJKJIAAiVID6AAIAACVgAOwJ/IAAiLIFBAAIAACLgAI0H0IAAh5ImuAAIAAjvIIxAAIAAA7IA7AAIAAEtgAW4HLIAAhQIDnAAIAABQgAO6EEIAAgeIDJAAIAAAegAjLEEIAAiNIEMAAIAACNgAsGDcIAAj4IDxAAIAAD4gAiaBjIAAh/IEWAAIAAB/g");
        var mask_3_graphics_129 = new cjs.Graphics().p("AkMMGIAAiLIEMAAIAACLgAQZKFIAAhQIDnAAIAABQgAXlHbIAAiXID6AAIAACXgAkMDqIAAhkIIuAAIAABkg");
        var mask_3_graphics_130 = new cjs.Graphics().p("AH+NXIAAh4ImvAAIAAjwIIwAAIAAA8IA8AAIAAEsgAONIWIAAgeIDJAAIAAAegAszHvIAAj7IDxAAIAAD7gAWLGVIAAiNIFBAAIAACNgAjHF3IAAiDIEWAAIAACDgAR9DqIAAhQIDnAAIAABQgAnBCaIAAiLIEOAAIAACLgALFBpIAAhQIC+AAIAABQgAVkAPIAAiVID5AAIAACVg");

        this.timeline.addTween(cjs.Tween.get(mask_3).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(83).to({graphics: mask_3_graphics_83, x: 195.5, y: 82}).wait(1).to({
            graphics: mask_3_graphics_84,
            x: 186.1,
            y: 83.3
        }).wait(1).to({graphics: mask_3_graphics_85, x: 193, y: 92.1}).wait(1).to({
            graphics: mask_3_graphics_86,
            x: 187.3,
            y: 76.3
        }).wait(1).to({graphics: mask_3_graphics_87, x: 202, y: 87.7}).wait(1).to({
            graphics: mask_3_graphics_88,
            x: 230,
            y: 82
        }).wait(7).to({graphics: mask_3_graphics_95, x: 174, y: 85.5}).wait(1).to({
            graphics: mask_3_graphics_96,
            x: 197.5,
            y: 82
        }).wait(1).to({graphics: mask_3_graphics_97, x: 230, y: 82}).wait(31).to({
            graphics: mask_3_graphics_128,
            x: 169.5,
            y: 73
        }).wait(1).to({graphics: mask_3_graphics_129, x: 176, y: 77.5}).wait(1).to({
            graphics: mask_3_graphics_130,
            x: 174,
            y: 85.5
        }).wait(1).to({graphics: null, x: 0, y: 0}).wait(229));

        // txt1_728.png
        this.instance_4 = new lib.txt1();
        this.instance_4.setTransform(158.5, 117.5, 2, 2, 0, 0, 0, 115.5, 37.5);
        this.instance_4._off = true;

        this.instance_4.mask = mask_3;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(83).to({_off: false}, 0).wait(1).to({
            scaleX: 1.5,
            scaleY: 1.5,
            x: 138.5
        }, 0).to({scaleX: 1, scaleY: 1, x: 148.5}, 3).wait(43).to({
            regY: 37.6,
            scaleY: 0.25
        }, 0).to({_off: true}, 1).wait(229));

        // pattern_overlay3.png
        this.instance_5 = new lib.bg_pattern3();
        this.instance_5.setTransform(5.5, 182.5, 1, 1, 0, 0, 0, 45.5, 36.5);
        this.instance_5.alpha = 0.469;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off: false}, 0).to({_off: true}, 1).wait(254));

        // pattern_overlay3.png
        this.instance_6 = new lib.bg_pattern3();
        this.instance_6.setTransform(-174.5, 109.5, 1, 1, 0, 0, 0, 45.5, 36.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -154.5
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -164.5,
            y: 126.5
        }, 0).to({_off: true}, 2).wait(1).to({
            _off: false,
            x: -174.5,
            y: 109.5,
            alpha: 0.469,
            compositeOperation: NaN
        }, 0).wait(8).to({scaleX: 2.5, scaleY: 2.5, x: -104.5}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: -174.5
        }, 0).wait(12).to({x: -64.5}, 0).to({_off: true}, 1).wait(19).to({_off: false}, 0).wait(1).to({x: -174.5}, 0).wait(1).to({
            scaleX: 2.5,
            scaleY: 2.5,
            x: -104.5
        }, 0).to({_off: true}, 1).wait(56).to({
            _off: false,
            scaleX: 1,
            scaleY: 1,
            x: -170.5,
            y: 111.5
        }, 0).to({_off: true}, 1).wait(1).to({_off: false, x: -150.5}, 0).to({_off: true}, 1).wait(2).to({
            _off: false,
            x: -160.5,
            y: 128.5
        }, 0).to({_off: true}, 1).wait(9).to({
            _off: false,
            scaleX: 2.5,
            scaleY: 2.5,
            x: -100.5,
            y: 111.5,
            compositeOperation: NaN
        }, 0).to({_off: true}, 1).wait(11).to({
            _off: false,
            scaleX: 1,
            scaleY: 1,
            x: -60.5
        }, 0).to({_off: true}, 1).wait(25).to({_off: false}, 0).wait(1).to({x: -170.5}, 0).wait(1).to({
            scaleX: 2.5,
            scaleY: 2.5,
            x: -100.5
        }, 0).to({_off: true}, 1).wait(118));

        // pattern_overlay2.png
        this.instance_7 = new lib.bg_pattern2();
        this.instance_7.setTransform(-6, 118, 1, 1, 0, 0, 0, 199, 45);
        this.instance_7.alpha = 0.469;
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 134,
            y: 78
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -6,
            y: 118
        }, 0).to({_off: true}, 1).wait(15).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 134,
            y: 78
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -6,
            y: 118
        }, 0).to({_off: true}, 1).wait(84).to({
            _off: false,
            x: -2,
            y: 120
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 138,
            y: 80
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -2,
            y: 120
        }, 0).to({_off: true}, 1).wait(19).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 138,
            y: 80
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -2,
            y: 120
        }, 0).to({_off: true}, 1).wait(90).to({
            _off: false,
            scaleY: 2,
            x: -42,
            y: 126,
            alpha: 1
        }, 0).wait(1).to({scaleY: 1, x: 48}, 0).to({_off: true}, 1).wait(39));

        // pattern_overlay2.png
        this.instance_8 = new lib.bg_pattern2();
        this.instance_8.setTransform(-6, 105, 1, 1, 0, 0, 0, 199, 45);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 134,
            y: 65
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -6,
            y: 105
        }, 0).to({_off: true}, 1).wait(22).to({_off: false, y: 118}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 134,
            y: 78
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -6,
            y: 118
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 144,
            alpha: 0.469,
            compositeOperation: NaN
        }, 0).wait(10).to({x: -6}, 0).wait(1).to({
            x: 144,
            compositeOperation: NaN
        }, 0).wait(31).to({x: -6}, 0).to({_off: true}, 1).wait(60).to({
            _off: false,
            x: -2,
            y: 120
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 138,
            y: 80
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -2,
            y: 120
        }, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: 148,
            compositeOperation: NaN
        }, 0).wait(4).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            x: -2
        }, 0).wait(1).to({x: 148, compositeOperation: NaN}, 0).wait(8).to({x: -2}, 0).wait(1).to({
            x: 148,
            compositeOperation: NaN
        }, 0).wait(28).to({x: -2}, 0).to({_off: true}, 1).wait(116));

        // pattern_overlay1.png
        this.instance_9 = new lib.bg_pattern1();
        this.instance_9.setTransform(458, 120, 1, 1, 0, 0, 0, 54, 45);
        this.instance_9.alpha = 0.469;
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(209).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(21).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(120));

        // pattern_overlay1.png
        this.instance_10 = new lib.bg_pattern1();
        this.instance_10.setTransform(34, 105, 1, 1, 0, 0, 0, 54, 45);
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({_off: false}, 0).to({_off: true}, 1).wait(20).to({
            _off: false,
            x: 284,
            y: 118
        }, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({
            _off: false,
            alpha: 0.469,
            compositeOperation: NaN
        }, 0).to({_off: true}, 8).wait(1).to({_off: false}, 0).wait(10).to({x: 134}, 0).wait(1).to({x: 284}, 0).wait(20).to({
            scaleX: 2,
            scaleY: 2,
            x: 224
        }, 0).to({_off: true}, 1).wait(59).to({
            _off: false,
            scaleX: 1,
            scaleY: 1,
            x: 118,
            y: 120
        }, 0).to({_off: true}, 1).wait(1).to({_off: false, x: 203}, 0).to({_off: true}, 2).wait(1).to({
            _off: false,
            x: 253,
            compositeOperation: NaN
        }, 0).wait(8).to({scaleX: 2, scaleY: 2, x: 193}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 253
        }, 0).wait(10).to({x: 103}, 0).wait(1).to({x: 253}, 0).wait(29).to({
            scaleX: 2,
            scaleY: 2,
            x: 193
        }, 0).to({_off: true}, 1).wait(118));

        // mask1 (mask)
        var mask_4 = new cjs.Shape();
        mask_4._off = true;
        var mask_4_graphics_352 = new cjs.Graphics().p("AA3CHIAAgpIB2AAIAAApgAEjAwIAAhLICAAAIAABLgAmihTIAAgzIEfAAIAAAzg");
        var mask_4_graphics_353 = new cjs.Graphics().p("AH0DZIAAhMICAAAIAABMgAilChIAAhCICPAAIAABCgAm1CNIAAhIICKAAIAABIgACcCHIAAgoIBhAAIAAAogAF+BFIAAgqIB2AAIAAAqgApzAXIAAh/IB7AAIAAB/gAlOggIAAh7IDcAAIAAg9IBiAAIAACaIgfAAIAAAegAEDhtIAAgQIBmAAIAAAQg");
        var mask_4_graphics_354 = new cjs.Graphics().p("AAZDxIAAg+IjaAAIAAh7IEdAAIAAAfIAeAAIAACagADmBmIAAgQIBnAAIAAAQgAqPBRIAAh+IB7AAIAAB+gAHsAjIAAhGICkAAIAABGgAlRAUIAAhBICQAAIAABBgAFigyIAAgpIB2AAIAAApgAnShbIAAhIICLAAIAABIgACAh1IAAgpIBhAAIAAApgAHYijIAAhNIB/AAIAABNg");
        var mask_4_graphics_355 = new cjs.Graphics().p("AiRDCIAAgoIBhAAIAAAogApaCaIAAhOICBAAIAABOgAD4CUIAAhIICkAAIAABIgAA1BMIAAg9IjaAAIAAh5IEdAAIAAAfIAfAAIAACXgAIDA4IAAgpIB2AAIAAApgAD9gtIAAgPIBnAAIAAAPgAlUgtIAAhIICLAAIAABIgAp4hBIAAiAIB7AAIAACAgAk6h/IAAhCICQAAIAABCg");
        var mask_4_graphics_356 = new cjs.Graphics().p("AvdDrIAAnVIe6AAIAAHVgAhLC9IBfAAIAAgpIhfAAgAoUCUICAAAIAAhNIiAAAgAE+CPICkAAIAAhIIikAAgAhgAJIDbAAIAAA+IBhAAIAAiXIgfAAIAAggIkdAAgAJIAzIB2AAIAAgqIh2AAgAFDgyIBnAAIAAgPIhnAAgAkOgyICLAAIAAhIIiLAAgAoyhHIB6AAIAAh/Ih6AAgAj1iEICQAAIAAhCIiQAAg");
        var mask_4_graphics_357 = new cjs.Graphics().p("A0vDmIAAnLMApfAAAIAAHLg");

        this.timeline.addTween(cjs.Tween.get(mask_4).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(352).to({graphics: mask_4_graphics_352, x: 167.3, y: 204.4}).wait(1).to({
            graphics: mask_4_graphics_353,
            x: 188.7,
            y: 203.9
        }).wait(1).to({graphics: mask_4_graphics_354, x: 214.1, y: 206.2}).wait(1).to({
            graphics: mask_4_graphics_355,
            x: 224.3,
            y: 203
        }).wait(1).to({graphics: mask_4_graphics_356, x: 229.8, y: 205.7}).wait(1).to({
            graphics: mask_4_graphics_357,
            x: 244.2,
            y: 206.1
        }).wait(3));

        // CTA
        this.cta = new lib.cta_container();
        this.cta.setTransform(632.5, 111, 1, 1, 0, 0, 0, 84.5, 17);

        this.cta.mask = mask_4;

        this.timeline.addTween(cjs.Tween.get(this.cta).wait(79).to({
            scaleX: 0.9,
            scaleY: 0.9,
            x: 602.9,
            y: 115.6
        }, 0).wait(273).to({regY: 16.9, scaleX: 0.89, scaleY: 0.89, x: 208.5, y: 205.5}, 0).wait(8));

        // black fade
        this.instance_11 = new lib.black_fade();
        this.instance_11.setTransform(364, 45, 1, 1, 0, 0, 0, 364, 45);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).wait(41).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(62).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).to({_off: true}, 46).wait(1).to({_off: false}, 0).to({_off: true}, 1).wait(117));

        // mask1 (mask)
        var mask_5 = new cjs.Shape();
        mask_5._off = true;
        var mask_5_graphics_335 = new cjs.Graphics().p("AGFGlIAAhpIDLAAIAABpgAVjFEIAAg8ICtAAIAAA8gAa9DEIAAhwIC7AAIAABwgAGFAQIAAhJIGlAAIAABJg");
        var mask_5_graphics_336 = new cjs.Graphics().p("AaEGtIAAhxIC8AAIAABxgAK1FaIAAhhIDSAAIAABhgAEoE8IAAhpIDKAAIAABpgASOE1IAAg8ICOAAIAAA8gAXYDTIAAg8ICsAAIAAA8gAASCQIAAi6IC0AAIAAC6gAG+A9IAAiyIFCAAIAAhaICPAAIAADfIgtAAIAAAtgAUkgxIAAgXICWAAIAAAXg");
        var mask_5_graphics_337 = new cjs.Graphics().p("APPHhIAAhaIlDAAIAAi0IGkAAIAAAtIAtAAIAADhgAT7DxIAAgWICWAAIAAAWgAgVDTIAAi7ICyAAIAAC7gAZ5CQIAAhpIDwAAIAABpgAG6B5IAAhhIDSAAIAABhgAWvAQIAAg6ICsAAIAAA6gAD/gqIAAhpIDKAAIAABpgARkhPIAAg8ICPAAIAAA8gAZbiTIAAhwIC8AAIAABwg");
        var mask_5_graphics_338 = new cjs.Graphics().p("ALTGDIAAg7ICPAAIAAA7gAA4FIIAAhxIC7AAIAABxgAUVFAIAAhpIDwAAIAABpgAP4DXIAAhaIlDAAIAAiyIGkAAIAAAtIAtAAIAADfgAabC5IAAg8ICsAAIAAA8gAUcAjIAAgWICWAAIAAAWgAG2AjIAAhnIDLAAIAABngAALAFIAAi5IC0AAIAAC5gAHchTIAAhhIDSAAIAABhg");
        var mask_5_graphics_339 = new cjs.Graphics().p("As0HHIAAqwMAtNAAAIAAKwgAIBGDICPAAIAAg7IiPAAgAiYFIIC5AAIAAhxIi5AAgARDFAIDwAAIAAhpIjwAAgAHjB9IFDAAIAABaICOAAIAAjfIgtAAIAAgtImkAAgAXJC5ICsAAIAAg8IisAAgARKAjICWAAIAAgWIiWAAgADkAjIDLAAIAAhnIjLAAgAjFAFIC0AAIAAi5Ii0AAgAEKhTIDSAAIAAhhIjSAAg");
        var mask_5_graphics_340 = new cjs.Graphics().p("A2xHHIAAqhMA8rAAAIAAKhg");
        var mask_5_graphics_344 = new cjs.Graphics().p("APPHhIAAhaIlDAAIAAi0IGkAAIAAAtIAtAAIAADhgAT7DxIAAgWICWAAIAAAWgAgVDTIAAi7ICyAAIAAC7gAZ5CQIAAhpIDwAAIAABpgAG6B5IAAhhIDSAAIAABhgAWvAQIAAg6ICsAAIAAA6gAD/gqIAAhpIDKAAIAABpgARkhPIAAg8ICPAAIAAA8gAZbiTIAAhwIC8AAIAABwg");
        var mask_5_graphics_345 = new cjs.Graphics().p("As0HHIAAqwMAtNAAAIAAKwgAIBGDICPAAIAAg7IiPAAgAiYFIIC5AAIAAhxIi5AAgARDFAIDwAAIAAhpIjwAAgAHjB9IFDAAIAABaICOAAIAAjfIgtAAIAAgtImkAAgAXJC5ICsAAIAAg8IisAAgARKAjICWAAIAAgWIiWAAgADkAjIDLAAIAAhnIjLAAgAjFAFIC0AAIAAi5Ii0AAgAEKhTIDSAAIAAhhIjSAAg");
        var mask_5_graphics_346 = new cjs.Graphics().p("ALIG8IAAhaIlCAAIAAi0IGkAAIAAAtIAtAAIAADhgAP0EXIAAgXICWAAIAAAXgAkcD5IAAi8IC0AAIAAC8gAVzC1IAAhpIDvAAIAABpgAC0CfIAAhiIDSAAIAABigANeBMIAAg8ICOAAIAAA8gASoA2IAAg6ICsAAIAAA6gAgGgEIAAhpIDIAAIAABpgAU+giIAAhxIC8AAIAABxg");
        var mask_5_graphics_347 = new cjs.Graphics().p("A+VFRIAAqhMA8rAAAIAAKhg");

        this.timeline.addTween(cjs.Tween.get(mask_5).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(335).to({graphics: mask_5_graphics_335, x: 191.3, y: 42.2}).wait(1).to({
            graphics: mask_5_graphics_336,
            x: 185.6,
            y: 42.9
        }).wait(1).to({graphics: mask_5_graphics_337, x: 189.8, y: 48.2}).wait(1).to({
            graphics: mask_5_graphics_338,
            x: 186.4,
            y: 38.8
        }).wait(1).to({graphics: mask_5_graphics_339, x: 207.4, y: 45.6}).wait(1).to({
            graphics: mask_5_graphics_340,
            x: 242.6,
            y: 45.6
        }).wait(4).to({graphics: mask_5_graphics_344, x: 189.8, y: 48.2}).wait(1).to({
            graphics: mask_5_graphics_345,
            x: 207.4,
            y: 45.6
        }).wait(1).to({graphics: mask_5_graphics_346, x: 163.5, y: 44.4}).wait(1).to({
            graphics: mask_5_graphics_347,
            x: 291,
            y: 57.4
        }).wait(13));

        // logo
        this.instance_12 = new lib.logo();
        this.instance_12.setTransform(206.2, 56, 0.6, 0.6, 0, 0, 0, 132, 30);

        this.instance_12.mask = mask_5;

        this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off: true}, 40).wait(295).to({
            _off: false,
            scaleX: 1.2,
            scaleY: 1.2
        }, 0).to({scaleX: 0.6, scaleY: 0.6}, 4).wait(21));

        // logo_X.png
        this.instance_13 = new lib.logoX();
        this.instance_13.setTransform(46.3, 116.5, 1, 1, 0, 0, 0, 29, 26.5);
        this.instance_13.alpha = 0;
        this.instance_13._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(245).to({_off: false}, 0).wait(1).to({alpha: 0.041}, 0).wait(1).to({alpha: 0.165}, 0).wait(1).to({alpha: 0.353}, 0).wait(1).to({alpha: 0.566}, 0).wait(1).to({alpha: 0.755}, 0).wait(1).to({alpha: 0.894}, 0).wait(1).to({alpha: 0.975}, 0).wait(1).to({alpha: 1}, 0).wait(36).to({alpha: 0}, 8).to({_off: true}, 1).wait(62));

        // logo_C.png
        this.instance_14 = new lib.logoC();
        this.instance_14.setTransform(94.3, 120, 1, 1, 0, 0, 0, 28, 24);
        this.instance_14.alpha = 0;
        this.instance_14._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(251).to({_off: false}, 0).wait(1).to({alpha: 0.041}, 0).wait(1).to({alpha: 0.165}, 0).wait(1).to({alpha: 0.353}, 0).wait(1).to({alpha: 0.566}, 0).wait(1).to({alpha: 0.755}, 0).wait(1).to({alpha: 0.894}, 0).wait(1).to({alpha: 0.975}, 0).wait(1).to({alpha: 1}, 0).wait(30).to({alpha: 0}, 8).to({_off: true}, 1).wait(62));

        // logo_O.png
        this.instance_15 = new lib.logoO();
        this.instance_15.setTransform(147.3, 120, 1, 1, 0, 0, 0, 29, 24);
        this.instance_15.alpha = 0;
        this.instance_15._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(256).to({_off: false}, 0).wait(1).to({alpha: 0.041}, 0).wait(1).to({alpha: 0.165}, 0).wait(1).to({alpha: 0.353}, 0).wait(1).to({alpha: 0.566}, 0).wait(1).to({alpha: 0.755}, 0).wait(1).to({alpha: 0.894}, 0).wait(1).to({alpha: 0.975}, 0).wait(1).to({alpha: 1}, 0).wait(25).to({alpha: 0}, 8).to({_off: true}, 1).wait(62));

        // logo_M.png
        this.instance_16 = new lib.logoM();
        this.instance_16.setTransform(205.3, 118.5, 1, 1, 0, 0, 0, 30, 25.5);
        this.instance_16.alpha = 0;
        this.instance_16._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(259).to({_off: false}, 0).wait(1).to({alpha: 0.041}, 0).wait(1).to({alpha: 0.165}, 0).wait(1).to({alpha: 0.353}, 0).wait(1).to({alpha: 0.566}, 0).wait(1).to({alpha: 0.755}, 0).wait(1).to({alpha: 0.894}, 0).wait(1).to({alpha: 0.975}, 0).wait(1).to({alpha: 1}, 0).wait(22).to({alpha: 0}, 8).to({_off: true}, 1).wait(62));

        // logo_2.png
        this.instance_17 = new lib.logo2();
        this.instance_17.setTransform(258.3, 120, 1, 1, 0, 0, 0, 23, 30);
        this.instance_17.alpha = 0;
        this.instance_17._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(263).to({_off: false}, 0).wait(1).to({alpha: 0.041}, 0).wait(1).to({alpha: 0.165}, 0).wait(1).to({alpha: 0.353}, 0).wait(1).to({alpha: 0.566}, 0).wait(1).to({alpha: 0.755}, 0).wait(1).to({alpha: 0.894}, 0).wait(1).to({alpha: 0.975}, 0).wait(1).to({alpha: 1}, 0).wait(18).to({alpha: 0}, 8).to({_off: true}, 1).wait(62));

        // mask1 (mask)
        var mask_6 = new cjs.Shape();
        mask_6._off = true;
        var mask_6_graphics_339 = new cjs.Graphics().p("AjaNYIAAh+IDxAAIAAB+gAPILjIAAhIIDPAAIAABIgAVmJKIAAiHIDhAAIAACHgAjaFyIAAhaIH2AAIAABag");
        var mask_6_graphics_340 = new cjs.Graphics().p("AUjNhIAAiHIDhAAIAACHgACRL+IAAh1ID8AAIAAB1gAlKLaIAAh+IDzAAIAAB+gALILRIAAhIICrAAIAABIgARUJcIAAhIIDPAAIAABIgAqXILIAAjhIDYAAIAADhgAiWGoIAAjYIGBAAIAAhsICrAAIAAEOIg2AAIAAA2gAN8EhIAAgbIC0AAIAAAbg");
        var mask_6_graphics_341 = new cjs.Graphics().p("AHiOgIAAhsImDAAIAAjYIH4AAIAAA2IA2AAIAAEOgANKKAIAAgbIC0AAIAAAbgArJJcIAAjhIDYAAIAADhgAUVILIAAh+IEgAAIAAB+gAibHwIAAh1ID6AAIAAB1gAQiFyIAAhIIDPAAIAABIgAl8EqIAAh+IDzAAIAAB+gAKWD9IAAhIICrAAIAABIgATxCsIAAiHIDhAAIAACHg");
        var mask_6_graphics_342 = new cjs.Graphics().p("AC1MwIAAhIICrAAIAABIgApqLoIAAiHIDhAAIAACHgANqLfIAAh+IEgAAIAAB+gAIUJhIAAhsImDAAIAAjYIH4AAIAAA2IA2AAIAAEOgAU+I9IAAhIIDPAAIAABIgANzGJIAAgbIC0AAIAAAbgAifGJIAAh+IDxAAIAAB+gAqgFlIAAjhIDYAAIAADhgAhyD5IAAh1ID6AAIAAB1g");
        var mask_6_graphics_343 = new cjs.Graphics().p("A6HOBIAAs8MA2QAAAIAAM8gAhFMwICpAAIAAhIIipAAgAtmLoIDhAAIAAiHIjhAAgAJuLfIEgAAIAAh+IkgAAgAhpH1IGBAAIAABsICrAAIAAkOIg2AAIAAg2In2AAgARCI9IDPAAIAAhIIjPAAgAJ3GJIC0AAIAAgbIi0AAgAmbGJIDzAAIAAh+IjzAAgAucFlIDYAAIAAjhIjYAAgAluD5ID8AAIAAh1Ij8AAg");
        var mask_6_graphics_344 = new cjs.Graphics().p("EgkZAOBIAAsqMBIzAAAIAAMqg");
        var mask_6_graphics_349 = new cjs.Graphics().p("AHiOgIAAhsImDAAIAAjYIH4AAIAAA2IA2AAIAAEOgANKKAIAAgbIC0AAIAAAbgArJJcIAAjhIDYAAIAADhgAUVILIAAh+IEgAAIAAB+gAibHwIAAh1ID6AAIAAB1gAQiFyIAAhIIDPAAIAABIgAl8EqIAAh+IDzAAIAAB+gAKWD9IAAhIICrAAIAABIgATxCsIAAiHIDhAAIAACHg");
        var mask_6_graphics_350 = new cjs.Graphics().p("A6HOBIAAs8MA2QAAAIAAM8gAhFMwICpAAIAAhIIipAAgAtmLoIDhAAIAAiHIjhAAgAJuLfIEgAAIAAh+IkgAAgAhpH1IGBAAIAABsICrAAIAAkOIg2AAIAAg2In2AAgARCI9IDPAAIAAhIIjPAAgAJ3GJIC0AAIAAgbIi0AAgAmbGJIDzAAIAAh+IjzAAgAucFlIDYAAIAAjhIjYAAgAluD5ID8AAIAAh1Ij8AAg");
        var mask_6_graphics_351 = new cjs.Graphics().p("EgkZAOBIAAsqMBIzAAAIAAMqg");
        var mask_6_graphics_352 = new cjs.Graphics().p("ACnNzIAAhsImBAAIAAjYIH2AAIAAA2IA2AAIAAEOgAIPKtIAAgbIC0AAIAAAbgAwDKJIAAjhIDYAAIAADhgAPaI4IAAh+IEgAAIAAB+gAnWIdIAAh1ID8AAIAAB1gAFbG6IAAhIICrAAIAABIgALnGfIAAhIIDPAAIAABIgAq3FXIAAh+IDzAAIAAB+gAObEzIAAiHIDhAAIAACHg");
        var mask_6_graphics_353 = new cjs.Graphics().p("A6HOBIAAs8MA2QAAAIAAM8gAhFMwICpAAIAAhIIipAAgAtmLoIDhAAIAAiHIjhAAgAJuLfIEgAAIAAh+IkgAAgAhpH1IGBAAIAABsICrAAIAAkOIg2AAIAAg2In2AAgARCI9IDPAAIAAhIIjPAAgAJ3GJIC0AAIAAgbIi0AAgAmbGJIDzAAIAAh+IjzAAgAucFlIDYAAIAAjhIjYAAgAluD5ID8AAIAAh1Ij8AAg");
        var mask_6_graphics_354 = new cjs.Graphics().p("EgkZAOBIAAsqMBIzAAAIAAMqg");

        this.timeline.addTween(cjs.Tween.get(mask_6).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(339).to({graphics: mask_6_graphics_339, x: 160.8, y: 85.7}).wait(1).to({
            graphics: mask_6_graphics_340,
            x: 154,
            y: 86.6
        }).wait(1).to({graphics: mask_6_graphics_341, x: 159, y: 92.9}).wait(1).to({
            graphics: mask_6_graphics_342,
            x: 154.9,
            y: 81.6
        }).wait(1).to({graphics: mask_6_graphics_343, x: 180.1, y: 89.7}).wait(1).to({
            graphics: mask_6_graphics_344,
            x: 211.8,
            y: 89.7
        }).wait(5).to({graphics: mask_6_graphics_349, x: 159, y: 92.9}).wait(1).to({
            graphics: mask_6_graphics_350,
            x: 180.1,
            y: 89.7
        }).wait(1).to({graphics: mask_6_graphics_351, x: 211.8, y: 89.7}).wait(1).to({
            graphics: mask_6_graphics_352,
            x: 127.5,
            y: 88.4
        }).wait(1).to({graphics: mask_6_graphics_353, x: 180.1, y: 89.7}).wait(1).to({
            graphics: mask_6_graphics_354,
            x: 211.8,
            y: 89.7
        }).wait(6));

        // ef_txt1.png
        this.instance_18 = new lib.ef_txt();
        this.instance_18.setTransform(214.1, 116.9, 1.8, 1.8, 0, 0, 0, 69, 20.5);
        this.instance_18._off = true;

        this.instance_18.mask = mask_6;

        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(339).to({_off: false}, 0).to({
            scaleX: 1,
            scaleY: 1,
            x: 214,
            y: 115.5
        }, 4).wait(17));

        // ef_txt1.png
        this.instance_19 = new lib.ef_txt();
        this.instance_19.setTransform(214, 125.5, 1, 1, 0, 0, 0, 69, 20.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off: true}, 40).wait(320));

        // black_ball
        this.instance_20 = new lib.black_ball();
        this.instance_20.setTransform(259.6, 119.3, 0.2, 0.272, 0, 0, 0, 355.3, 339);
        this.instance_20._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(245).to({_off: false}, 0).wait(17).to({alpha: 0}, 5).to({_off: true}, 1).wait(92));

        // black_ball
        this.instance_21 = new lib.black_ball();
        this.instance_21.setTransform(202.4, 119.3, 0.2, 0.272, 0, 0, 0, 355.3, 339);
        this.instance_21._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(245).to({_off: false}, 0).wait(13).to({alpha: 0}, 5).to({_off: true}, 1).wait(96));

        // black_ball
        this.instance_22 = new lib.black_ball();
        this.instance_22.setTransform(149.1, 119.3, 0.2, 0.272, 0, 0, 0, 355.3, 339);
        this.instance_22._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(245).to({_off: false}, 0).wait(10).to({alpha: 0}, 5).to({_off: true}, 1).wait(99));

        // black_ball
        this.instance_23 = new lib.black_ball();
        this.instance_23.setTransform(101, 119.3, 0.2, 0.272, 0, 0, 0, 355.3, 339);
        this.instance_23._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(245).to({_off: false}, 0).wait(5).to({alpha: 0}, 5).to({_off: true}, 1).wait(104));

        // black_ball
        this.instance_24 = new lib.black_ball();
        this.instance_24.setTransform(57.5, 119.7, 0.2, 0.272, 0, 0, 0, 355.3, 339);
        this.instance_24._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(245).to({_off: false}, 0).to({alpha: 0}, 5).to({_off: true}, 1).wait(109));

        // black_fade2
        this.instance_25 = new lib.black_fade2();
        this.instance_25.setTransform(543, 241.6, 1, 1, 0, 90, -90, 727.5, 45);
        this.instance_25._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(245).to({_off: false}, 0).wait(11).to({
            regX: 1048,
            regY: 437.1,
            x: 150.9,
            y: -79.3
        }, 0).wait(1).to({y: -80.2}, 0).wait(1).to({y: -81.8}, 0).wait(1).to({y: -84}, 0).wait(1).to({y: -86.9}, 0).wait(1).to({y: -90.4}, 0).wait(1).to({y: -94.6}, 0).wait(1).to({y: -99.6}, 0).wait(1).to({y: -105.3}, 0).wait(1).to({y: -112}, 0).wait(1).to({y: -119.8}, 0).wait(1).to({y: -128.7}, 0).wait(1).to({y: -139.1}, 0).wait(1).to({y: -151.2}, 0).wait(1).to({y: -165.7}, 0).wait(1).to({y: -183.4}, 0).wait(1).to({y: -206.3}, 0).wait(1).to({
            regX: 727.5,
            regY: 45,
            x: 543,
            y: 80.6
        }, 0).wait(87));

        // black_fade2
        this.instance_26 = new lib.black_fade2();
        this.instance_26.setTransform(541.3, -1, 1, 1, 90, 0, 0, 727.5, 45);
        this.instance_26._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(245).to({_off: false}, 0).wait(11).to({
            regX: 1048,
            regY: 437.1,
            x: 149.2,
            y: 319.9
        }, 0).wait(1).to({y: 321}, 0).wait(1).to({y: 322.6}, 0).wait(1).to({y: 325}, 0).wait(1).to({y: 328}, 0).wait(1).to({y: 331.7}, 0).wait(1).to({y: 336.2}, 0).wait(1).to({y: 341.5}, 0).wait(1).to({y: 347.6}, 0).wait(1).to({y: 354.7}, 0).wait(1).to({y: 363}, 0).wait(1).to({y: 372.5}, 0).wait(1).to({y: 383.5}, 0).wait(1).to({y: 396.4}, 0).wait(1).to({y: 411.7}, 0).wait(1).to({y: 430.6}, 0).wait(1).to({y: 454.9}, 0).wait(1).to({
            regX: 727.5,
            regY: 45,
            x: 541.3,
            y: 170
        }, 0).wait(87));

        // bg2
        this.instance_27 = new lib.big_skulls();
        this.instance_27.setTransform(754.5, -54.5, 1, 1, 0, 0, 0, 512.5, 186.5);
        this.instance_27._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(245).to({_off: false}, 0).wait(54).to({
            regX: -3.5,
            regY: 327.4,
            scaleX: 1,
            scaleY: 1,
            x: 238.2,
            y: 86.5
        }, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, x: 237.3, y: 86.6}, 0).wait(1).to({
            scaleX: 0.98,
            scaleY: 0.98,
            x: 235.7,
            y: 86.8
        }, 0).wait(1).to({scaleX: 0.97, scaleY: 0.97, x: 233.5, y: 87.1}, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            x: 230.9,
            y: 87.4
        }, 0).wait(1).to({scaleX: 0.93, scaleY: 0.93, x: 227.6, y: 87.9}, 0).wait(1).to({
            scaleX: 0.9,
            scaleY: 0.9,
            x: 223.7,
            y: 88.4
        }, 0).wait(1).to({scaleX: 0.87, scaleY: 0.87, x: 219.4, y: 88.9}, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            x: 214.6,
            y: 89.5
        }, 0).wait(1).to({scaleX: 0.81, scaleY: 0.81, x: 209.3, y: 90.2}, 0).wait(1).to({
            scaleX: 0.77,
            scaleY: 0.77,
            x: 203.6,
            y: 90.9
        }, 0).wait(1).to({scaleX: 0.73, scaleY: 0.73, x: 197.6, y: 91.7}, 0).wait(1).to({
            scaleX: 0.68,
            scaleY: 0.68,
            x: 191.2,
            y: 92.5
        }, 0).wait(1).to({scaleX: 0.64, scaleY: 0.64, x: 184.5, y: 93.3}, 0).wait(1).to({
            scaleX: 0.59,
            scaleY: 0.59,
            x: 177.6,
            y: 94.2
        }, 0).wait(1).to({scaleX: 0.55, scaleY: 0.55, x: 170.4, y: 95.1}, 0).wait(1).to({
            scaleX: 0.5,
            scaleY: 0.5,
            x: 163.2,
            y: 96.1
        }, 0).wait(1).to({scaleX: 0.45, scaleY: 0.45, x: 155.9, y: 97}, 0).wait(1).to({
            scaleX: 0.4,
            scaleY: 0.4,
            x: 148.6,
            y: 98
        }, 0).wait(1).to({
            regX: 512.3,
            regY: 186.6,
            scaleX: 0.35,
            scaleY: 0.35,
            x: 321.9,
            y: 49.5
        }, 0).to({_off: true}, 1).wait(41));

        // bg3_728.jpg
        this.bg3 = new lib.bg3();
        this.bg3.setTransform(364, 45, 1, 1, 0, 0, 0, 364, 45);

        this.timeline.addTween(cjs.Tween.get(this.bg3).wait(40).to({regX: 364.1, x: 718.1}, 0).wait(279).to({
            regX: 364,
            scaleX: 2,
            scaleY: 2,
            x: 727,
            y: -15
        }, 0).wait(1).to({
            regX: 223,
            regY: 115.5,
            scaleX: 1.92,
            scaleY: 1.92,
            x: 428.2,
            y: 125.3
        }, 0).wait(1).to({scaleX: 1.85, scaleY: 1.85, x: 411.4, y: 124.4}, 0).wait(1).to({
            scaleX: 1.77,
            scaleY: 1.77,
            x: 394.7,
            y: 123.7
        }, 0).wait(1).to({scaleX: 1.7, scaleY: 1.7, x: 378.5, y: 122.9}, 0).wait(1).to({
            scaleX: 1.63,
            scaleY: 1.63,
            x: 362.6,
            y: 122.1
        }, 0).wait(1).to({scaleX: 1.56, scaleY: 1.56, x: 347.3, y: 121.4}, 0).wait(1).to({
            scaleX: 1.49,
            scaleY: 1.49,
            x: 332.6,
            y: 120.7
        }, 0).wait(1).to({scaleX: 1.43, scaleY: 1.43, x: 318.5, y: 120}, 0).wait(1).to({
            scaleX: 1.37,
            scaleY: 1.37,
            x: 305.1,
            y: 119.4
        }, 0).wait(1).to({scaleX: 1.31, scaleY: 1.31, x: 292.5, y: 118.8}, 0).wait(1).to({
            scaleX: 1.26,
            scaleY: 1.26,
            x: 280.7,
            y: 118.3
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, x: 269.7, y: 117.8}, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            x: 259.7,
            y: 117.3
        }, 0).wait(1).to({scaleX: 1.13, scaleY: 1.13, x: 250.7, y: 116.9}, 0).wait(1).to({
            scaleX: 1.09,
            scaleY: 1.09,
            x: 242.8,
            y: 116.5
        }, 0).wait(1).to({scaleX: 1.06, scaleY: 1.06, x: 236.1, y: 116.1}, 0).wait(1).to({
            scaleX: 1.03,
            scaleY: 1.03,
            x: 230.6,
            y: 115.9
        }, 0).wait(1).to({scaleX: 1.02, scaleY: 1.02, x: 226.5, y: 115.7}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 223.9,
            y: 115.6
        }, 0).wait(1).to({regX: 364, regY: 45, scaleX: 1, scaleY: 1, x: 364, y: 45}, 0).wait(21));

        // bg1
        this.instance_28 = new lib.bg1_new();
        this.instance_28.setTransform(15.5, 90, 1, 1, 0, 0, 0, 612.5, 90);
        this.instance_28._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(129).to({_off: false}, 0).to({
            x: 177.5,
            y: -27,
            alpha: 0
        }, 68).to({_off: true}, 1).wait(162));

        // bg2
        this.instance_29 = new lib.bg2_new();
        this.instance_29.setTransform(191.5, 62.5, 1, 1, 0, 0, 0, 487.5, 62.5);
        this.instance_29._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(129).to({_off: false}, 0).to({
            x: 353.5,
            y: -54.5
        }, 68).to({_off: true}, 1).wait(162));

        // bg1
        this.instance_30 = new lib.bg1_new();
        this.instance_30.setTransform(15.5, 90, 1, 1, 0, 0, 0, 612.5, 90);
        this.instance_30._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(40).to({_off: false}, 0).to({
            x: 184.6,
            y: -29.9
        }, 46).to({_off: true}, 1).wait(273));

        // black bg
        this.instance_31 = new lib.black_bg3();
        this.instance_31.setTransform(364, 45, 1, 1, 0, 0, 0, 364, 45);
        this.instance_31._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(40).to({_off: false}, 0).wait(320));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(149, 119.5, 720.5, 290);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;