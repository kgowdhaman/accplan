Ext.define('AccPlan.model.AccountItem', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
			//{name: 'accItemId',  type: 'int'},
			//{name: 'accId',  type: 'int'},
            {name: 'accItemName',  type: 'string'}
        ]//,
		//associations: [
			//{type: 'belongsTo', model: 'AccPlan.model.Account'}
		//]
    }
    
});