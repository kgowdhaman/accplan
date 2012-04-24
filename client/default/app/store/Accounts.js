Ext.define('AccPlan.store.Accounts', {
    extend: 'Ext.data.Store',
	config: {
		model: 'AccPlan.model.Account',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/accounts.json'
        }
		
    },
	filters: [
        {
            property: 'accName'
        }
    ]
});
