window.addEventListener('DOMContentLoaded', function () {
    person1 = {
        name: 'Eren',
        sayHello: function() {
            console.log(`Subjects of Ymir, my name is ${this.name}`)
        }
    }
    person2 = {
        name: 'Armin',
        sayHello: function() {
            console.log(`I want to see the sea, and my name is ${this.name}`)
        }
    }
    person3 = {
        name: 'Mikasa',
        sayHello: function() {
            console.log(`I have a scarf, and my name is ${this.name}`)
        }
    }
    person4 = {
        name: 'Levi',
        sayHello: function() {
            console.log(`Kitanai. My name is ${this.name}`)
        }
    }
    person5 = {
        name: 'Deku',
        sayHello: function() {
            console.log(`Who are you people? My name is ${this.name}`)
        }
    }

    person1.sayHello()
    person2.sayHello()
    person3.sayHello()
    person4.sayHello()
    person5.sayHello()
})