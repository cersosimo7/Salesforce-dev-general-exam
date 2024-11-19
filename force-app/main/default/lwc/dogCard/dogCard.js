import { LightningElement, api } from 'lwc';

export default class DogCard extends LightningElement {
    @api imgPath;
    @api breed;
}