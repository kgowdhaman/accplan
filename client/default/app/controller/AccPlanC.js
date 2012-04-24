Ext.define('AccPlan.controller.AccPlanC', {
    extend: 'Ext.app.Controller',

    config: {
		control: {
            searchList: {
				itemtap: 'onItemDisclosure'
            },
			//subSearchList: {
				//itemtap: 'onSubSearchListTap'
            //},
			searchBar : {
				push: 'onPush'
			}
        },
        refs: {
            searchList: '#searchList',
            subList: 'sublist',
			searchBar: 'searchbar',
			profile: 'profile',
			subSearchList: '#subsearchlist',
			mainView: 'mainview'
        }
    },

    onItemDisclosure: function(list, index, node, record) {
        if (!this.subList) {
            this.subList = Ext.create('AccPlan.view.SubList');
        }
        // Push the show contact view into the navigation view
        this.getSearchBar().push(this.subList);
		//this.getSubList().show();
    },
	
	onSubSearchListTap: function(list, index, node, record) {
        if (!this.profile) {
            this.profile = Ext.create('AccPlan.view.Profile');
        }
        // Push the show contact view into the navigation view
        this.getMainView().push(this.profile);
		//this.getSubList().show();
    },
	
	onPush: function(view, item) {
		//view.getNavigationBar().hide();
	}
    
});
