require('./assets/stylesheets/styles.scss');

class Car {
    manufacturer(car) {
        document.write(`I have such a beautiful ${car}. Yeap!`)
    }
}

const bentley = new Car;

bentley.manufacturer('bentley');