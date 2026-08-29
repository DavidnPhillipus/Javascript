/**
 * Composition vs Inheritance:
 *
 * - Composition:
 *   Composition is a design principle where objects are composed of other objects
 *   to achieve functionality. Instead of relying on a rigid class hierarchy,
 *   composition allows you to build flexible and reusable components by combining
 *   smaller, independent pieces of functionality. This approach promotes code
 *   reuse, modularity, and easier testing.
 *
 *   Example: A Car object can be composed of Engine, Wheels, and Transmission objects.
 *   Each of these components can be reused in other contexts, such as a Truck or a Motorcycle.
 *
 * - Inheritance:
 *   Inheritance is a mechanism where a class (child) derives properties and behaviors
 *   from another class (parent). It establishes an "is-a" relationship between classes.
 *   While inheritance can simplify code by reusing parent class functionality, it can
 *   lead to tightly coupled code and a rigid hierarchy, making it harder to adapt to
 *   changes or extend functionality.
 *
 *   Example: A Dog class inherits from an Animal class, gaining its properties and methods.
 *   However, if the hierarchy becomes too deep or complex, it can lead to maintenance challenges.
 *
 * - Key Differences:
 *   1. Composition favors "has-a" relationships, while inheritance favors "is-a" relationships.
 *   2. Composition promotes flexibility and reusability, while inheritance can lead to rigid structures.
 *   3. Composition allows for dynamic behavior changes at runtime, whereas inheritance is static.
 *
 * - Recommendation:
 *   Prefer composition over inheritance when designing systems, as it leads to more maintainable
 *   and adaptable code. Use inheritance sparingly, primarily when there is a clear "is-a" relationship.
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`)
    }

    sleep() {
        console.log(`${this.name} is sleeping`)
    }

}

class Bear extends Animal {
    walk() {
        console.log(`${this.name} walked`);
    }
}


class Shark extends Animal {
    swim() {
        console.log(`${this.name} swam`);
    }
}

class Bird extends Animal {
    fly() {
        console.log(`${this.name} flew`);
    }
}



const bear = new Bear("Bear");
bear.attack(); // Bear attacked
bear.sleep(); // Bear is sleeping
bear.walk(); // Bear walked

const shark = new Shark("Shark");
shark.attack(); // Shark attacked
shark.sleep(); // Shark is sleeping
shark.swim(); // Shark swam

const bird = new Bird("Bird");
bird.attack(); // Bird attacked
bird.sleep(); // Bird is sleeping
bird.fly(); // Bird flew

// Composition example
// In this example, we can create a more flexible and reusable design using composition.'
// Composition defines things on what they do rather than what they are.
// This allows us to create more flexible and reusable designs.
// For example, we can create a `Flyable` mixin that can be added to any object that needs to fly.
// This way, we can easily add flying behavior to any object without creating a complex inheritance hierarchy.
// This is a more flexible and reusable design that allows us to easily add flying behavior to any object.
// It also allows us to create more complex objects by combining different behaviors.
// For example, we can create a `FlyingBear` object that has both flying and walking behavior.




const  walker = ({name}) => ({
        walk() {
            console.log(`${this.name} walked`);
        },
    
})


const flyer = ({name}) => ({
        fly() {
            console.log(`${this.name} flew`);
        },
    
})


const swimmer = ({name}) => ({
        swim() {
            console.log(`${this.name} swam`);
        },
    
})


const attacker = ({name}) => ({
        attack() {
            console.log(`${this.name} attacked`)
        },
    
})



const sleeper = ({name}) => ({
        sleep() {
            console.log(`${this.name} is sleeping`)
        },
    
})



function createBear(name) {
    const bear = {name}
    return {
        ...bear,
        ...attacker(bear),
        ...sleeper(bear),
        ...walker(bear)
    }
}


function createShark(name) {
    const shark = {name}
    return {
        ...shark,
        ...attacker(shark),
        ...sleeper(shark),
        ...swimmer(shark)
    }
}

function createBird(name) {
    const bird = {name}
    return {
        ...bird,
        ...attacker(bird),
        ...sleeper(bird),
        ...flyer(bird)
    }
}



// Combining Mixins with Inheritance
// While composition is often preferred, there are cases where you might combine mixins with inheritance
// to achieve a balance between flexibility and structure. Below is an example:

class AnimalWithMixins {
    constructor(name) {
        this.name = name;
    }
}

// Mixin functions
const walkerMixin = {
    walk() {
        console.log(`${this.name} walked`);
    }
};

const flyerMixin = {
    fly() {
        console.log(`${this.name} flew`);
    }
};

const swimmerMixin = {
    swim() {
        console.log(`${this.name} swam`);
    }
};

// Extending the base class and applying mixins
class BearWithMixins extends AnimalWithMixins {}
Object.assign(BearWithMixins.prototype, walkerMixin);

class SharkWithMixins extends AnimalWithMixins {}
Object.assign(SharkWithMixins.prototype, swimmerMixin);

class BirdWithMixins extends AnimalWithMixins {}
Object.assign(BirdWithMixins.prototype, flyerMixin);

// Using the classes with mixins
const bearWithMixins = new BearWithMixins("Bear");
bearWithMixins.walk(); // Bear walked

const sharkWithMixins = new SharkWithMixins("Shark");
sharkWithMixins.swim(); // Shark swam

const birdWithMixins = new BirdWithMixins("Bird");
birdWithMixins.fly(); // Bird flew

// Explanation:
// - The base class `AnimalWithMixins` provides a common structure for all animals.
// - Mixins (`walkerMixin`, `flyerMixin`, `swimmerMixin`) are used to add specific behaviors.
// - `Object.assign` is used to dynamically add mixin methods to the prototype of the child classes.
// - This approach allows for a combination of inheritance (shared structure) and composition (flexible behaviors).


//This is a bit different to how Kyle went about it so I would recomment you rewatch the video
// Inheritance is greate when you have sort of a constant structer that isnever gonna change
// Composition is however much more flexible and applied where you want to have a more dynamic structure
// and you want to be able to add or remove functionality at runtime.
