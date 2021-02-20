public inherited sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccount(){
        return[SELECT Id,Name FROM Account limit 50000];
    }
}
