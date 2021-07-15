class Kitchen {
    constructor(companyName) {
        this.list = [];
        this.companyName = companyName;

    }

    intro() {
        console.log(`Sveiki atvyke i ${this.companyName} virtuve!`);
    }

    nupirkta(item, quantity) {
        let product = { item, quantity }
        this.list.push(product);
    }

    turimiProduktai() {
        console.log(`===========`);
        console.log(`Donato turimi produktai:`);

        for (let i = 0; i < this.list.length; i++) {
            const availableProduct = this.list[i];

            console.log(`${i + 1}) ${availableProduct.item.up}: ${availableProduct.quantity}`);
        }
    }

    upperCase() {
        let up = '';
        up = charAt[0].toUpperCase() + availableProduct.item.slice(1);
    }

    sunaudota(itemName, usedQuantity) {
        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];
            //console.log(itemName, product);

            if (itemName === product.item) {
                product.quantity -= usedQuantity;
                break;
            }
        }
    }

    sugedesProduktas(item) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].item !== item) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;
    }
}

module.exports = Kitchen;