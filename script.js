'use strict';

// task 2
const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
        }
    }
};

const game = {
    settings,
    player,

    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();

            const direction = this.getDirection();

            if (direction === -1) return alert('До свидания!');

            if (this.limitationOfMovements(direction) === false) {
                alert('Сейчас сюда двигаться нелься!\nВыберте другое направление движения!');
                continue;
            }

            this.player.move(direction);
        }
    },

    limitationOfMovements(direction) {
        if (this.player.x === 0 && direction === 4) {
            return false;
        }
        else if (this.player.x === this.settings.rowCount - 1 && direction === 6) {
            return false;
        }
        else if (this.player.y === this.settings.colCount - 1 && direction === 2) {
            return false;
        }
        else if (this.player.y === 0 && direction === 8) {
            return false;
        }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += '0 ';
                } else {
                    map += 'X ';
                }
            }
            map += '\n';
        }
        console.clear();
        console.log(map);
    },

    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8];

        while (true) {
            const direction = parseInt(prompt('Введите число куда хотите переместиться или -1 для выхода.'));

            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            return direction;
        }
    }
}

game.run();

// task 1
function decomposition() {
    let decomposedNumber = {};
    let numberName = ['единицы', 'десятки', 'сотни'];


    while (true) {
        let usersNumber = parseInt(prompt('Введите число цифрой от 0 до 999:'));


        if (usersNumber >= 0 && usersNumber <= 999) {
            for (let i of numberName) {
                usersNumber /= 10;
                decomposedNumber[i] = parseInt((usersNumber - Math.floor(usersNumber)) * 10);
                usersNumber = Math.floor(usersNumber);
                if (usersNumber === 0) {
                    break;
                }
            }

            return console.log(decomposedNumber);
        }
        else {
            alert('Ошибка ввода! Требуется ввести число цифрой от 0 до 999!');
            return console.log(decomposedNumber);
        }
    }


}

decomposition();


// task 3
const Basket = {
    goods: [
        {
            id_product: 123,
            product_name: "Ноутбук",
            price: 40000,
            quantity: 2
        },
        {
            id_product: 456,
            product_name: "Мышка",
            price: 1000,
            quantity: 4
        }
    ],

    // Не совсем понял, что нужно было сделать в этом задании, поэтому переписал функцию с reduce, так чтобы мне было понятно, как она работает и доработал её, чтобы считала и кол-во товаров. 
    countBasketPrice() {
        let totalPrice = (beforeTotalPrice, nextTotalPrice) => (beforeTotalPrice.price * beforeTotalPrice.quantity) + (nextTotalPrice.price * nextTotalPrice.quantity);
        return this.goods.reduce(totalPrice);
    }
};

console.log('Общая стоимость корзины: ' + Basket.countBasketPrice());

