
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const showMessage = (page, title, msg,type ) => {
    const toastEvt = new ShowToastEvent({
                title: title,
                message:msg,
                variant: type
            });
                page.dispatchEvent(toastEvt);
    };
 

export { showMessage };