import { LightningElement ,track,api, wire} from 'lwc';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
export default class BoatSearchResults extends LightningElement {
 boatTypeId =''
 isLoding  = false;
 @track boats;
 
 @api
 searchBoats(boatTypeId){
     console.log('boatTypeId on baot search result'+boatTypeId);
     this.boatTypeId = boatTypeId;
     this.isLoding = true;
     this.notifyLoading(this.isLoading);
  }
  
  @wire(getBoats,{boatTypeId : '$boatTypeId'})
  wiredBoats(result){
    console.log('==::data===', result);
    if(result.data){
      this.boats = result.data; 
    }else if(result.error){
      this.boats = undefined; 
      this.error = error;
    }
    this.isLoading = false;
    this.notifyLoading(this.isLoading);
  }

  notifyLoading(isLoading) {
    if (isLoading) {
        this.dispatchEvent(new CustomEvent('loading'));
    } else {
        this.dispatchEvent(CustomEvent('doneloading'));
    }
}

}