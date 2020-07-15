toast("start");
setScreenMetrics(1080,2160);

const keyMap = {
        "A1":[700,200],
        "A2":[900,200],
        "A3":[1100,200],
        "A4":[1300,200],
        "A5":[1500,200],
        "A6":[700,400],
        "A7":[900,400],
        "B1":[1100,400],
        "B2":[1300,400],
        "B3":[1500,400],
        "B4":[700,600],
        "B5":[900,600],
        "B6":[1100,600],
        "B7":[1300,600],
        "C1":[1500,600],
        "0":[0,0]
    }; // 琴键位置映射坐标

function pressKeys(keys, duration){ // 按压琴键
    console.log("play", keys);
    
    if(keys.length===1){
        var site =keyMap[keys[0]];
        press(site[0],site[1],duration);
        }
    else if(keys.length===2){
        gestures(
            [0,duration,keyMap[keys[0]],keyMap[keys[0]]],
            [0,duration,keyMap[keys[1]],keyMap[keys[1]]]
            );
        }
    else{
        gestures(
            [0,duration,keyMap[keys[0]],keyMap[keys[0]]],
            [0,duration,keyMap[keys[1]],keyMap[keys[1]]],
            [0,duration,keyMap[keys[2]],keyMap[keys[2]]]
            );
        }
    }
    
function play(sheets){
    var beats = sheets.split(",");
    for(var i=0;i<beats.length;i++){
        var beat = beats[i];
        var keys = beat.split(" ");
        console.log(beat);
        var duration = keys[0].search('-') == -1 ? 500 : parseFloat(keys[0].split('-')[1]) * 1000;
        keys = keys.map(k => k.split('-')[0]);
        pressKeys(keys,duration);
        }
    }


var xihuani = "A3,A4,A1 A5,0,\
A5 B1,A7,A3,A1 A5,A7,A3 B1,A6,0,\
A2 A6,A7,B1,0,\
A3,A3,A1 A4 B1,0,A6,A7,A1 A5 B1,0,\
A5,B1,B2,A1 A4 B3,0,A6,B3,B1,A5 B2,0,\
A3 A7,B1,B2,0,A5 B2,A5,0,A5,B2,A4 B1,0,\
A1 A7,A4 B1,A3,0,A2 B1,A7,B1,A5 B2,0,\
A1 A5,B1,B2,A6 B4,B3,A5 B2,A6 B4,A5 B3,B2,B1 B3,0,\
B1 B3,A5 B2,B1,A4 B3,B6,A5 B2,B1,B2,0,\
A1 A7,B1,B2,B2,A4 B5,B4,B3,A5 B2,B1,0,\
A1 A6,A1 A7,B1,A3,A1 A7,B1,A5 B2,A5 B3,B2,A1 B1,A2 A7,A4 B1,B2,A2 B1";


const dayu = "B5-0.1,B1-0.1,B2-0.1,B3-0.1,B5-0.6,0-1,0-1,0-1,|B5-0.1,B6-0.1,B7-0.1,B1-0.1,B2-0.6,0-1,0-1,0-1,|\
B5-0.1,B6-0.1,B7-0.1,C1-0.1,B3-0.1,C1-0.5,B7-0.5,B6-0.75,C1-1.25,|C1-1,0-1,0-1,0-1,|B3-0.5,B2-0.5,B3-0.5,B6-0.5,B3-0.5,B2-0.5,B3-0.5,B7-0.5,|B3-0.5,B2-0.5,B3-0.5,C1-0.5,B7-1,B5-1,|\
B3-0.5,B2-0.5,B3-0.5,B6-0.5,B3-0.5,B2-0.5,B3-0.5,B7-0.5,|B5-1,B2-1,A7-1,0-1,|\
B3-0.5,B2-0.5,B3-0.5,B6-0.5,B3-0.5,B2-0.5,B3-0.5,B7-0.5,|B3-0.5,B2-0.5,B3-0.5,C1-0.5,B7-1,B5-1,|\
B1-0.1,B2-0.4,B3-0.5,A6-1,B1-0.1,B2-0.4,B3-0.5,A6-0.5,A5-0.5,|A6-1,B1-1,A7-1,0-1,|\
A6-0.5,B1-0.5,B1-0.5,B2-0.5,B2-0.5,B3-0.5,B3-0.5,B5-0.25,B6-0.25,|B5-0.75,B3-0.25,B2-1,0-1,|\
A6-0.5,B1-0.5,B1-0.5,B2-0.5,B2-0.5,B3-0.5,B3-1,|A6-1,A5-1,0-1,0-1,|\
A6-0.5,B1-0.5,B1-0.5,B2-0.5,B2-0.5,B3-0.5,B3-0.5,B5-0.25,B6-0.25,|B5-0.75,B3-0.25,B2-0.5,0-1,|\
B2-0.5,B3-0.5,A6-1,B2-0.5,B3-0.5,A6-0.5,A5-0.5,|\
A6-1,0-1,0-1,A6-0.5,B1-0.5,|B2-0.75,B1-0.25,A6-1,A6-0.5,B1-0.5,|\
B2-0.75,B1-0.25,B3-1,B3-0.5,B5-0.5,|B6-1,B6-0.5,B5-0.5,B3-0.5,B2-0.5,B1-1,|\
B2-1,B3-1,0-1,A6-0.5,B1-0.5,|B2-0.75,B1-0.25,A6-1,A6-0.5,B1-0.5,|B2-1,B1-1,B2-0.2,B3-0.8,0-1,|\
B2-0.5,B3-0.5,A6-1,B2-0.5,B3-0.5,A6-0.5,A5-0.5,|A6-1,0-1,0-1,B3-0.5,B5-0.5,|\
C1-0.75,B7-0.25,B3-1,B3-0.5,B2-0.5,|B1-1,B1-0.5,B2-0.5,B3-1,B3-0.5,B2-0.5,|B1-1,B6-0.5,C1-0.5,B7-0.5,B6-0.5,B5-0.5,B2-0.5,|\
B3-1,0-1,0-1,B3-0.5,B5-0.5,|C1-0.75,B7-0.25,B3-1,B3-0.5,B2-0.5,|B1-1,B1-0.5,B2-0.5,B3-1,0-1,|\
B2-0.5,B3-0.5,A6-1,B2-0.5,B3-0.5,A6-0.5,A5-0.5,|A6-1,0-1,0-1,0-1|".split('|').join('');


const yanhuayileng = "A3,A3,A5,0,A6,A5,A6,B1,0,A7,A6,A5,A6,A3,0,\
A3,A3,A5,0,A6,A5,A6,B1,0,A7,A6,A6,A3,A2,0,\
A6,B2,A6,B2,0,A6,B2,A6,A7,A3,0,\
A2,A3,A2,A5,0,A2,A5,A6,A7,B1,A7,A6,A7,0,0,0,0,0,\
A3,A3,A5,0,A6,A5,A6,B1,0,A7,A6,A5,A6,A3,0,\
A3,A3,A5,0,A6,A5,A6,B1,0,A7,A6,A6,A5,B3,0,\
A6,B2,A6,B2,0,B3,A7,A6,A7,B1,A7,0,\
A6,B2,A7,A3,0,A6,B2,A7,A3,A6,A5,A6,0,0,0,0,0,0,0,0,\
B5,B3,B2,0,B2,B2,B3,B1,B2,B3,0,\
B5,B3,B2,0,B2,B2,A5,B3,B4,B3,B2,B3,0,\
B3,B3,B7,B3,B2,0,B1,A7,B1,B2,B3,B6,0,\
A6,B1,B3,B2,A6,B1,A7,A5,A6,0,\
B5,B3,B2,0,B2,B2,B3,B1,B2,B3,0,\
B5,B3,B2,0,B2,B2,A5,B3,B4,B3,B2,B3,0,\
B3,B3,B7,B3,B2,0,B1,A7,B1,B2,B3,B6,0,\
A6,B1,B3,B2,A6,B1,A7,A5,A6";



const xiaoqingge = "B1,A7,B1,A7,0,B1,A7,A5,A3,0,A5,A7,B1,0,0,\
B1,A7,B1,A7,0,B1,A7,B1,B3,0,B3,0,\
A6,B1,A6,0,0,B1,B3,B2,0,\
A5,A7,A5,0,0,A7,B2,B1,0,\
B3,B2,B1,0,B2,B1,A6,A5,0,0,0,0,0,\
B1,A7,B1,A7,0,B1,A7,A5,A3,0,A5,A7,B1,0,\
B1,A7,B1,A7,0,B1,A7,B1,B3,0,B5,C1,B7,B6,B5,0,\
B5,B4,B3,B4,0,B5,B3,B2,0,\
B4,B3,B2,B3,0,B2,B1,0,\
B3,B2,B3,B4,B3,B1,B2,0,0,0,0,0,\
A5,A6,B1,B3,B3,B2,B1,B3,B2,B1,B3,B2,B1,B1,0,\
B1,A6,B1,B2,B3,B3,0,\
A5,A6,B1,B1,A6,B1,B2,B3,B3,B5,0,\
A5,A6,B1,B1,A6,B1,B2,B3,B3,B2,B1,B2,0,\
B3,B3,B2,B1,B3,B2,B1,B3,B2,B1,B1,0,\
B1,A6,B1,B2,B3,B3,0,\
A5,A6,B1,B1,A6,B1,B2,B3,B3,A5,0,\
A5,A6,B1,B1,A6,B1,B2,B3,B3,B2,B1,B2,B1";


toast("弹奏大鱼");
play(dayu);
sleep(3000);
toast("弹奏烟花易冷");
play(yanhuayileng);
sleep(3000);
toast("弹奏小情歌");
play(xiaoqingge);
sleep(3000);
toast("弹奏喜欢你");
play(xihuani);


toast("stop");
