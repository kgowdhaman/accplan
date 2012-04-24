Ext.define('AccPlan.store.AccountItems', {
    extend: 'Ext.data.Store',
	config: {
		model: 'AccPlan.model.AccountItem',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'data/accountItems.json'
        }
    },
	filters: [
        {
            property: 'accItemName'
        }
    ]
});
