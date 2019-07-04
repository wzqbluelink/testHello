import { LightningElement, track } from 'lwc';

export default class TestHello extends LightningElement {
    @track greetname = 'wzq';
    changeHandel(event)
    {
     this.greetname = event.target.value;
    }
}