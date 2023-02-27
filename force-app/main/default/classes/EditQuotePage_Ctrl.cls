public with sharing class EditQuotePage_Ctrl {
    

    @AuraEnabled
    public static QuoteDto getQuote(String quoteId){
        try {
            Quote__c quote  = getQuoteFromDb(quoteId);
            QuoteDto qDto = new QuoteDto(quote);
            return qDto;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    private static Quote__c getQuoteFromDb(String quoteId){

        Quote__c[] quotes = [Select Id, Name, start_date__c, EndDate__c from Quote__c where Id= :quoteId];
        if(quotes.size()> 0){
            return quotes[0];
        }else {
            return null;
        }
    }
}