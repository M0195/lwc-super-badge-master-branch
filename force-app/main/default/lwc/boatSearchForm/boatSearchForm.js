import { LightningElement ,track, wire} from 'lwc';
import getBoatTypes from "@salesforce/apex/BoatDataService.getBoatTypes";
export default class BoatSearchForm extends LightningElement {
  @track selectedBoatTypeId = '';
  @track error = undefined;
  @track searchOptions;
  selectedBoatId = '';
  @wire(getBoatTypes)
    boatType({error,data}){
      if(data){
        this.searchOptions = data.map((type)=>{
          return{
            label:type.Name,
            value :type.Id
          }
        });  
        this.searchOptions.unshift({label:"All Type",value:""});
      }else if(error){
         this.searchOptions = undefined;
         this.error = error;
      }
  }
  handleSearchOptionChange(event){
    event.preventDefault();
    this.selectedBoatTypeId = event.detail.value;
    const searchEvent = new CustomEvent("search",{
      detail :{boatTypeId:this.selectedBoatTypeId}
    });
    this.dispatchEvent(searchEvent);
  }
}