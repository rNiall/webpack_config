require('./styles.scss');

class Car {
    manufacturer(car) {
        document.write(`I have a beautiful ${car}`)
    }
}

const bentley = new Car;

bentley.manufacturer('bentley');