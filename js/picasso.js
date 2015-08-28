(function() {
    $(function() {

    /**
     * Globals
     * */
    var $window =                  $(window),
        $body =                    $('body'),
        wrappers =                 [],
        currentWrapper =           null,
        bodyHeight =               0,
        windowHeight =             0,
        windowWidth =              0,
        prevKeyframesDurations =   0,
        scrollTop =                0,
        relativeScrollTop =        0,
        currentKeyframe =          0;

    var intro = {
        'wrapper' : '#intro',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.name',
                'translateY'  : -140,
                'opacity'     : 0
            } , {
                'selector'    : '.byline',
                'translateY'  : -110,
                'opacity'     : 0
            }
        ]
    };
    
    var theBeginning = {
        'wrapper' : '#the-beginning',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.name',
                'translateY'  : -80,
                'opacity'     : 0
            }
        ]
    };

    var firstTimeStarbuck1 = {
        'wrapper' : '#first-time-starbuck',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.starbuck-first-line',
                'translateY'  : '-7%'
            } , {
                'selector'    : '.starbuck-second-line',
                'translateY'  : '-5%'
            } , {
                'selector'    : '#starbuck',
                'translateY'  : '-10%'
            }
        ]
    };

    var firstTimeStarbuck2 = {
        'wrapper' : '#first-time-starbuck',
        'duration' : '10%',
        'animations' :  []
    };
    
    var firstTimeStarbuck3 = {
        'wrapper' : '#first-time-starbuck',
        'duration' : '70%',
        'animations' :  [
            {
                'selector'    : '.starbuck-first-line',
                'translateY'  : ['-7%', '-14%'],
                'opacity'     : 0
            } , {
                'selector'    : '.starbuck-second-line',
                 'translateY'  : ['-5%', '-10%'],
                 'opacity'     : 0
            } , {
                'selector'    : '#starbuck',
                'translateY'  : ['-10%', '-3%'],
                'opacity'     : 0
            } 
        ]
    };

    var firstTimeStarbuck4 = {
        'wrapper' : '#first-time-starbuck',
        'duration' : '20%',
        'animations' :  []
    };

    var firstTimeImpression = {
        'wrapper' : '#first-time-impression',
        'duration' : '100%',
        'animations' :  [
            {
                'selector'    : '.impression-small-name',
                'translateY'  : -130,
                'opacity'     : 0
            } , {
                'selector'    : '.impression-big-name',
                'translateY'  : -100,
                'opacity'     : 0
            }
        ]
    };

    var timePassed1 = {
        'wrapper' : '#time-passed',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.time-passed-small-name',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75]
            } , {
                'selector'    : '.time-passed-big-name',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75]
            } , {
               'selector'    : '#domExplosionList',
               'translateY'  : '-70%',
               'opacity'     : [0, 1] // hack to accelrate opacity speed
           }
        ]
    }
   
    var timePassed2 = {
       'wrapper' : '#time-passed',
       'duration' : '150%',
       'animations' :  [
           {
               'selector'    : '.dei-1',
               'translateY'  : '-15%',
               'translateX'  : '-10%',
               'opacity'     : [1, 0],
               'scale'       : 2
           } , {
               'selector'    : '.dei-2',
               'translateY'  : '-5%',
               'translateX'  : '-4%',
               'opacity'     : [1, 0] // hack to decelrate opacity speed
           } , {
               'selector'    : '.dei-3',
               'translateY'  : '-9%',
               'translateX'  : '2%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 1.2
           } , {
               'selector'    : '.dei-4',
               'translateY'  : '-17%',
               'translateX'  : '8%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 1.5
           } , {
               'selector'    : '.dei-5',
               'translateY'  : '-2%',
               'translateX'  : '-15%',
               'opacity'     : [1, 0],
               'scale'       : 2
           } , {
               'selector'    : '.dei-6',
               'translateY'  : '-1%',
               'translateX'  : '-7%',
               'opacity'     : [1, 0], // hack to decelrate opacity speed
               'scale'       : 1.2
           } , {
               'selector'    : '.dei-7',
               'translateY'  : '-4%',
               'translateX'  : '2%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 1.1
           } , {
               'selector'    : '.dei-8',
               'translateY'  : '-3%',
               'translateX'  : '12%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 1.8
           } , {
               'selector'    : '.dei-9',
               'translateY'  : '3%',
               'translateX'  : '-12%',
               'opacity'     : [1, 0],
               'scale'       : 1.5
           } , {
               'selector'    : '.dei-10',
               'translateY'  : '5%',
               'translateX'  : '-4%',
               'opacity'     : [1, 0] // hack to decelrate opacity speed
           } , {
               'selector'    : '.dei-11',
               'translateY'  : '8%',
               'translateX'  : '6%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 1.4
           } , {
               'selector'    : '.dei-12',
               'translateY'  : '1%',
               'translateX'  : '20%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 1.9
           } , {
               'selector'    : '.dei-13',
               'translateY'  : '8%',
               'translateX'  : '-12%',
               'opacity'     : [1, 0],
               'scale'       : 1.8
           } , {
               'selector'    : '.dei-14',
               'translateY'  : '4%',
               'translateX'  : '-3%',
               'opacity'     : [1, 0], // hack to decelrate opacity speed
               'scale'       : 1.3
           } , {
               'selector'    : '.dei-15',
               'translateY'  : '14%',
               'translateX'  : '5%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 1.7
           } , {
               'selector'    : '.dei-16',
               'translateY'  : '6%',
               'translateX'  : '9%',
               'opacity'     : [1, 0], // hack to accelrate opacity speed
               'scale'       : 2
           }
       ]
    };
    
    var timePassed3 = {
       'wrapper' : '#time-passed',
       'duration' : '100%',
       'animations' :  [
            {
                'selector'    : '.time-passed-small-name',
                'translateY'  : ['-25%', '-40%'],
                'opacity'     : [1, 0]
            } , {
                'selector'    : '.time-passed-big-name',
                'translateY'  : ['-25%', '-40%'],
                'opacity'     : [1, 0]
            }
       ]
    };

    var closerDresden1 = {
        'wrapper' : '#closer-dresden',
        'background': 'dresden-background',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.closer-dresden-big-name',
                'translateY'  : -140,
                'opacity'     : [1.75, 0]
            } , {
                'selector'    : '.closer-dresden-small-name',
                'translateY'  : -100,
                'opacity'     : [1.75, 0]
            }
        ]
    };
    var closerDresden2 = {
        'wrapper' : '#closer-dresden',
        'background': 'dresden-background',
        'duration' : '50%',
        'animations' :  []
    };

    var inloveDresden1 = {
        'wrapper' : '#inlove-dresden',
        'background': 'dresden-background',
        'duration' : '100%',
        'animations' :  [
            {
                'selector'    : '.inlove-blur-rose1',
                'translateY'  : -10
            } , {
                'selector'    : '.inlove-blur-rose2',
                'translateY'  : -5
            } , {
                'selector'    : '.inlove-blur-rose3',
                'translateY'  : -2
            } , {
                'selector'    : '.inlove-blur-rose4',
                'translateY'  : -10
            } , {
                'selector'    : '.inlove-blur-rose5',
                'translateY'  : -8
            } , {
                'selector'    : '.inlove-clear-rose1',
                'translateY'  : -5,
                'translateX'  : -4
            } , {
                'selector'    : '.inlove-clear-rose2',
                'translateY'  : -2,
                'translateX'  : 1
            } , {
                'selector'    : '.inlove-clear-rose3',
                'translateY'  : -2,
                'translateX'  : 4
            } , {
                'selector'    : '.inlove-clear-rose4',
                'translateY'  : -2,
                'translateX'  : -3
            } , {
                'selector'    : '.inlove-clear-rose5',
                'translateY'  : -3,
                'translateX'  : -2
            } , {
                'selector'    : '.inlove-clear-rose6',
                'translateY'  : -4,
                'translateX'  : -6
            } , {
                'selector'    : '.inlove-clear-rose7',
                'translateY'  : -1,
                'translateX'  : -3
            } , {
                'selector'    : '.inlove-clear-rose8',
                'translateY'  : -2,
                'translateX'  : -5
            }  
        ]
    };

    var inloveDresden2 = {
        'wrapper' : '#inlove-dresden',
        'background': 'dresden-background',
        'duration' : '100%',
        'animations' :  [
           {
                'selector'    : '.inlove-blur-rose1',
                'translateY'  : [-10, -15]
            } , {
                'selector'    : '.inlove-blur-rose2',
                'translateY'  : [-5, -7]
            } , {
                'selector'    : '.inlove-blur-rose3',
                'translateY'  : [-2, -5]
            } , {
                'selector'    : '.inlove-blur-rose4',
                'translateY'  : [-10, -15]
            } , {
                'selector'    : '.inlove-blur-rose5',
                'translateY'  : [-8, -15]
            } , {
                'selector'    : '.inlove-clear-rose1',
                'translateY'  : [-5, -7],
                'translateX'  : [-4, -6]
            } , {
                'selector'    : '.inlove-clear-rose2',
                'translateY'  : [-2, -6],
                'translateX'  : [1, 3]
            } , {
                'selector'    : '.inlove-clear-rose3',
                'translateY'  : [-2, -5],
                'translateX'  : [4, 6]
            } , {
                'selector'    : '.inlove-clear-rose4',
                'translateY'  : [-2, -3],
                'translateX'  : [-3, -5]
            } , {
                'selector'    : '.inlove-clear-rose5',
                'translateY'  : [-3, -4],
                'translateX'  : [-2, -5]
            } , {
                'selector'    : '.inlove-clear-rose6',
                'translateY'  : [-4, -6],
                'translateX'  : [-6, -8]
            } , {
                'selector'    : '.inlove-clear-rose7',
                'translateY'  : [-1, -3],
                'translateX'  : [-3, -4]
            } , {
                'selector'    : '.inlove-clear-rose8',
                'translateY'  : [-2, -5],
                'translateX'  : [-5, -6]
            }  
        ]
    };
    
    var frindtopartner = {
        'wrapper' : '#frindtopartner',
        'background': 'dresden-background',
        'duration' : '100%',
        'animations' :  [
            {
                'selector'    : '.frindtopartner-small-name',
                'translateY'  : '-25%',
                'opacity'     : 0
            }
        ]
    };

    var images1 = {
        'wrapper' : '#images',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.images-byline',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
            } , {
                'selector'    : '#mediumHomepage',
                'translateY'  : '-90%'
            } , {
                'selector'    : '.iphone',
                'translateY'  : '-66%'
            }
        ]
    };

    var images2 = {
        'wrapper' : '#images',
        'duration' : '75%',
        'animations' :  []
    };

    var images3 = {
        'wrapper' : '#images',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.images-byline',
                'translateY'  : ['-25%', '-25%'],
                'scale'       : 0.7,
                'opacity'     : [1.75, -0.75] // hack to accelrate opacity speed
            } , {
                'selector'    : '.images-byline-2',
                'opacity'     : [0, 1],
                'translateY'  : '-15%'
            } , {
                'selector'    : '#mediumHomepage',
                'translateY'  : ['-90%', '-90%'],
                'scale'       : 0.8,
                'opacity'     : -0.75
            } , {
                'selector'    : '.iphone',
                'translateY'  : ['-66%', '-90%'],
                'translateX'  : '-2%',
                'rotate'      : -90,
                'scale'       : 1.3
            } , {
                'selector'    : '#medium-profile-iphone',
                'scale'       : 0.9,
                'translateX'  : '20%'
            } , {
                'selector'    : '#davegamache-dot-com',
                'scale'       : [0.5, 1]
            } , {
                'selector'    : '#video',
                'scale'       : [0.5, 1],
                'rotate'      : 90
            }
        ]
    };

    var images4 = {
        'wrapper' : '#images',
        'duration' : '40%',
        'animations' :  []
    };

    var images5 = {
        'wrapper' : '#images',
        'duration' : '150%',
        'animations' :  [
            {
                'selector'    : '.images-byline-2',
                'opacity'     : [1, 0.5],
                'translateY'  : ['-15%', '50%'],
                'opacity'     : [1, -2]
            } , {
                'selector'    : '.iphone',
                'translateY'  : ['-90%', '5%'],
                'translateX'  : ['-2%', '-2%'],
                'rotate'      : [-90, -90],
                'scale'       : [1.3, 1.3]
            } , {
                'selector'    : '#medium-profile-iphone',
                'translateX'  : ['20%', '20%']
            } , {
                'selector'    : '#davegamache-dot-com',
                'scale'       : [1, 1]
            } , {
                'selector'    : '#video',
                'scale'       : [1, 1],
                'rotate'      : 90
            }
        ]
    };

    var keyframes = [
        intro,
        theBeginning,
        firstTimeStarbuck1,
        firstTimeStarbuck2,
        firstTimeStarbuck3,
        firstTimeStarbuck4,
        firstTimeImpression,
        timePassed1,
        timePassed2,
        timePassed3,
        closerDresden1,
        closerDresden2,
        inloveDresden1,
        inloveDresden2,
        frindtopartner,
        images1,
        images2,
        images3,
        images4,
        images5
    ];

    /**
     * Construction
     * */
    init = function() {
        scrollIntervalID = setInterval(updatePage, 10);
        setupValues();
        $window.resize(throwError);
        if(isTouchDevice) {
            $window.resize(throwError);
        }
    };

    setupValues = function() {
        scrollTop = $window.scrollTop();
        windowHeight = $window.height();
        windowWidth = $window.width();
        convertAllPropsToPx();
        buildPage();
    };

    buildPage = function() {
        var i, j, k;
        for(i=0;i<keyframes.length;i++) { // loop keyframes
            var keyframe = keyframes[i];
            bodyHeight += keyframe.duration;
            if($.inArray(keyframe.wrapper, wrappers) === -1) {
                wrappers.push(keyframe.wrapper);
            }
            for(j=0;j<keyframe.animations.length;j++) { // loop animations
                Object.keys(keyframe.animations[j]).forEach(function(key) { // loop properties
                    var value = keyframes[i].animations[j][key];
                    if(key !== 'selector' && value instanceof Array === false) {
                        var valueSet = [];
                        valueSet.push(getDefaultPropertyValue(key), value);
                        value = valueSet;
                    }
                    keyframes[i].animations[j][key] = value;
                });
            }
        }
        $body.height(bodyHeight);
        $window.scroll(0);
        currentWrapper = wrappers[0];
        $(currentWrapper).show();
    };

    convertAllPropsToPx = function() {
        var i, j, k;
        for(i=0;i<keyframes.length;i++) { // loop keyframes
            keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
            for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
                Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
                    value = keyframes[i].animations[j][key];
                    if(key !== 'selector') {
                        if(value instanceof Array) { // if its an array
                            for(k=0;k<value.length;k++) { // if value in array is %
                                if(typeof value[k] === 'string') {
                                    if(key === 'translateY') {
                                      value[k] = convertPercentToPx(value[k], 'y');
                                    } else {
                                      value[k] = convertPercentToPx(value[k], 'x');
                                    }
                                }
                            }
                        } else {
                            if(typeof value === 'string') { // if single value is a %
                                if(key === 'translateY') {
                                    value = convertPercentToPx(value, 'y');
                                } else {
                                    value = convertPercentToPx(value, 'x');
                                }
                            }
                      }
                      keyframes[i].animations[j][key] = value;
                    }
                });
            }
        }
    };

    getDefaultPropertyValue = function(property) {
        switch (property) {
            case 'translateX':
                return 0;
            case 'translateY':
                return 0;
            case 'scale':
                return 1;
            case 'rotate':
                return 0;
            case 'opacity':
                return 1;
            default:
                return null;
        }
    };

    /**
     * Animation/Scrolling
     * */
    updatePage = function() {
        window.requestAnimationFrame(function() {
            setScrollTops();
            if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
                animateElements();
                setKeyframe();
            }
        });
    };

    setScrollTops = function() {
        scrollTop = $window.scrollTop();
        relativeScrollTop = scrollTop - prevKeyframesDurations;
    };

    animateElements = function() {
        var animation, translateY, translateX, scale, rotate, opacity;
        for(var i=0;i<keyframes[currentKeyframe].animations.length;i++) {
            animation   = keyframes[currentKeyframe].animations[i];
            translateY  = calcPropValue(animation, 'translateY');
            translateX  = calcPropValue(animation, 'translateX');
            scale       = calcPropValue(animation, 'scale');
            rotate      = calcPropValue(animation, 'rotate');
            opacity     = calcPropValue(animation, 'opacity');

        $(animation.selector).css({
            'transform': 'translate3d(' + translateX +'px, ' + translateY + 'px, 0) scale('+ scale +') rotate('+ rotate +'deg)',
            'opacity' : opacity
        });
      }
    };

    calcPropValue = function(animation, property) {
        var value = animation[property];
        if(value) {
            value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
        } else {
            value = getDefaultPropertyValue(property);
        }
        return value;
    };

    easeInOutQuad = function (t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    setKeyframe = function() {
        if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
            prevKeyframesDurations += keyframes[currentKeyframe].duration;
            currentKeyframe++;
            showCurrentWrappers();
        } else if(scrollTop < prevKeyframesDurations) {
            currentKeyframe--;
            prevKeyframesDurations -= keyframes[currentKeyframe].duration;
            showCurrentWrappers();
        }
    };

    showCurrentWrappers = function() {
        var i;
        var keyframe = keyframes[currentKeyframe];
        if(keyframe.wrapper !== currentWrapper) {
            $(currentWrapper).hide();
            $(keyframe.wrapper).show();
            currentWrapper = keyframe.wrapper;
            if (typeof keyframe.background !== 'undefined') {
                $('#fullscreen-background').removeClass().addClass(keyframe.background);
            } else {
                $('#fullscreen-background').removeClass().addClass('berlin-background');
            }
        }
    };

    /**
     * Helpers
     * */
    convertPercentToPx = function(value, axis) {
        if(typeof value === 'string' && value.match(/%/g)) {
            if(axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
            if(axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
        }
        return value;
    };

    throwError = function() {
        $body.addClass('page-error')
    };

    isTouchDevice = function() {
        return 'ontouchstart' in window // works on most browsers
        || 'onmsgesturechange' in window; // works on ie10
    };

    init();
  })
}).call(this);