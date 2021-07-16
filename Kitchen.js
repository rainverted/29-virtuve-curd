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
            const pakeistasZodis = this.upperCase(availableProduct.item);

            console.log(`${i + 1}) ${pakeistasZodis}: ${availableProduct.quantity}`);
            //console.log(`${i + 1}) ${availableProduct.item[0].toUpperCase() + slice(1)}: ${availableProduct.quantity}`);
        }
    }

    upperCase(text) {
        let capitalize = text[0].toUpperCase() + text.slice(1);
        return capitalize;
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