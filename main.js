Webcam.set({
width: 350,
height: 300,
img_format: 'png',
png_quality: 90
});

camera = document.getElementById("webcam");

Webcam.attach('#webcam');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log('ml5 version : ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GA0gaOtOm/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function identifySnapshot(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
if (error){
    console.error(error);
} else {
    console.log(results);
    document.getElementById("object").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}