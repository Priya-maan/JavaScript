class Animal {
    constructor(color='yellow', energy = 100);
    isActive(){
        if(this.energy> 0){
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy);
        }else if(energy == 0){
            sleep();
        }else{
            console.log(energy);
        }
    };
    sleep(){
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy);

    };
    getColor(){
        console.log(this.color);
    };
    
}

class Cat extends Animal{
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy);
    makeSound(){
        console.log(sound);
    }
}

class Bird extends Animal{
    constructor(sound ='chirp', canFly = true, color, energy);
    makeSound(){
        console.log(sound);
    }
}

class HouseCat extends Cat{
    constructor(houseCatSound ='meow', color, energy);

    makeSound(option){
        if(option){
          super.makeSound();
          console.log(this.houseCatSound);  
        }else{
            console.log(this.houseCatSound);  
        }
        
    }
    }
 class Tiger extends Cat{
    constructor(tigerSound ='Roar!', color, energy);
    makeSound(option){
        if(option){
            super.makeSound();
            console.log(tigerSound);
        }
    }
 }

 class Parrot extends Bird{
    constructor(canTalk =false, color, energy);
    makeSound(option){
        if(option){
            super.makeSound()
        }else if(canTalk){
            console.log("talking!");
        }

    }
 }

 var polly = new Parrot(true);
 var fiji = new Parrot(false);

polly.makeSound();
fiji.makeSound();

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird("shriek", false, "black and white", 200);
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();

var leo = new HouseCat();

leo.makeSound(false);
leo.makeSound(true);

var cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true);































