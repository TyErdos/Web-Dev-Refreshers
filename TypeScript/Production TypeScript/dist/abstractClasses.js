"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calcuation
        return 8;
    }
}
//cannot create objects directly from abstract classes
//they are like a blueprint, it is the responsibility of
//the class that extends the abstract class to do so
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        //have to use super, and pass in the required values
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const te = new Instagram("test", "test", 3);
te.getReelTime();
