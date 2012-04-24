Ext.application({
    name: 'AccPlan',
    views: ['Main'],
	models: [
        'Account',
        'AccountItem'
    ],
	stores: [
        'Accounts',
        'AccountItems'
    ],
	controllers: ['AccPlanC'],
	launch: function() {
        Ext.create('AccPlan.view.Main');
    }
});

