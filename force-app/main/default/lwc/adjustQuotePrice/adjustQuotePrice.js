/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement } from "lwc";

export default class AdjustQuotePrice extends LightningElement {
  adjustedAmountLabel = "Adjusted Amount";
  adjustedAmount = 0;

  updatedQuote;
  handleSave(){

    this.getDataFromCLient();
  }

  getDataFromCLient(){
    var inp=this.template.querySelectorAll("lightning-input");
    inp.forEach(function(element){
        if(element.name=="startDate")
            this.updatedQuote.startdate =element.value;

        else if(element.name=="endDate")
        this.updatedQuote.endDate=element.value;
    },this);

    const event = new CustomEvent('save', {detail: this.updatedQuote });
           this.dispatchEvent(event);
    
  }
}
