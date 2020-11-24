import Card from 'models/components/signs/products/Card';


export default class ProductsSign {

    constructor() {
        this._cards = [];
    }

    get cardCount() {
        return (Array.isArray(this._cards)) ? this._cards.length : 0;
    }

    get cards() {
        return this._cards;
    }

    toJSON() {
        return {
            cards: this._cards.map((c) => c.toJSON())
        }
    }

    static fromJSON(json) {
        if (!json || !('cards' in json) || !Array.isArray(json['cards'])) {
            throw new Error('[ProductsSign] Invalid JSON');
        }

        let obj = new ProductsSign();

        obj._cards = json['cards'].map((c) => Card.fromJSON(c));

        return obj;
    }
}