/*
 *
 *  Session.js
 * 
 *  by Yannick Abouem (AntaresMKII)
 * 
 * Date created: 30/01/2021
 */

class Session{
    constructor(){
        this.breaks = 0;
        this.lines = 0;
        this.uptime;
        this.isActive = false;
    }

    //changes the state from active to inactive
    switchState = () => {
        if(this.isActive){
            this.isActive = false;
            this.breaks++;
        }
        else{
            this.isActive = true;
            this.uptime = new Date();
            //call the looping function
        }
    }

    //updates the number of lines and the timer
    update = (numLines) => {
        this.lines += numLines;
        this.uptime.update();
    }

    //resets the current session
    reset = () => {
        this.breaks = 0;
        this.lines = 0;
    }  

    //prints to the console the current session
    print = () => {
        this.uptime.print();
        console.log("Number of brakes taken: " + this.breaks);
        console.log("Number of lines written today: " + this.lines);
    }

    loop = () => {
        for(let i = 0; i < 1000; i++){
            this.update();
        }
    }
}