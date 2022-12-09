prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

var classifier = "https://teachablemachine.withgoogle.com/models/g_QtP8yVY/modelLoaded"

function modelLoaded() {
    console.log(' Modle Loaded!');
}

function check() {
   classify(ml5,gotResult())
}


function gotResult(error, results) {
    if(error) {
        console.error(error)
    }else {
        console.log(results)
    }
    
}
