abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calcuation
        return 8
    }
}



//cannot create objects directly from abstract classes
//they are like a blueprint, it is the responsibility of
//the class that extends the abstract class to do so

class Instagram extends TakePhoto
{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
        ){
            //have to use super, and pass in the required values
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia")
        }
}

const te = new Instagram("test", "test", 3)

te.getReelTime()