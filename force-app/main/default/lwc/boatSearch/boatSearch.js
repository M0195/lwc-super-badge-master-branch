import { LightningElement ,track} from 'lwc';

export default class BoatSearch extends LightningElement {
  @track isLoading = false;
  handleLoading() {
      this.isLoading = true;
   }

  handleDoneLoading() {
      this.isLoading = false;
   }

  searchBoats(event) { 
        console.log('===::',event.detail.boatTypeId);
        const boatTypeId = event.detail.boatTypeId;
        console.log('boatTypeId=::'+boatTypeId);
        this.template.querySelector("c-boat-search-results").searchBoats(boatTypeId);
        console.log('===:::compoent'+this.template.querySelector("c-boat-search-results").searchBoats(boatTypeId));

  }
  createNewBoat() {

  }

}