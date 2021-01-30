/* 
 *  Timer.js
 *
 *  by Yannick Abouem (AntaresMKII)
 *  
 *  Created on: 30/01/2021
 */

class Timer{
    constructor(){
        this.startDate = new Date().getTime();
        this.time;
    }

    update = () => {
        let currentDate  = new Date().getTime();
        this.time = currentDate - this.startDate;
    }

    print = () =>{
        let hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((this.time % (1000 * 60)) / 1000);

        console.log(hours + ":" + min + ":" + sec);
    }
}