Ext.define('AccPlan.model.Account', {
    extend: 'Ext.data.Model',
	
    config: {
        fields: [
			//{name: 'accId',  type: 'int'},
            {name: 'accName',  type: 'string'}
        ]//,
		//associations: [
			//{type: 'hasMany', model: 'AccPlan.model.AccountItem', name: 'accountItems'}
		//]
    }
    
});