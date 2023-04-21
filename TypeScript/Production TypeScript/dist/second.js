"use strict";
// //Example to show why interfaces are important, and how they can be used with classes
// interface TakePhoto
// {
//     cameraMode: string
//     filter: string
//     burstMode: number
// }
// // someone using this example that wants to create a feature, should always be following the interface
// class Instagram implements TakePhoto
// {
//     constructor(
//         public cameraMode:string,
//         public filter: string,
//         public burstMode: number 
//     ){}
// }
// interface Story{
//     createStory(): void
// }
// class Youtube implements TakePhoto, Story
// {
//     constructor(
//         public cameraMode:string,
//         public filter: string,
//         public burstMode: number,
//         // Can add more that required, but cannot do less
//         public YoutubeShort: string 
//     ){}
//     // if youtube would also want to use the story interface, has to use the required method inside
//     createStory(): void {
//         console.log("Story was created")
//     }
// }
