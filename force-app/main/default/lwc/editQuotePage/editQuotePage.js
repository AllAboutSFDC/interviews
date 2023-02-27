/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";

export default class EditQuotePage extends LightningElement {
  @api recordId;
  updatedQutoes;
  onSave(){

    this.updatedQutoes = event.target.detail;
  }
}
