Ext.define('AccPlan.view.SubList', {
    extend: 'Ext.Panel',
    xtype : 'sublist',
    id: 'sublist',
    config: {
        layout: 'fit',
		docked: 'left',
		width : 300,
		items: [
			{
                xtype: 'list',
				ui: 'round',
				itemTpl: '<div>{accItemName}</div>',
                store: 'AccountItems',
				onItemDisclosure: true,
				id: 'subsearchlist',
				title: 'My Accounts',
				items: [
					{
						xtype: 'toolbar',
						docked: 'top',

						items: [
							{ xtype: 'spacer' },
							{
								xtype: 'searchfield',
								placeHolder: 'Search...',
								listeners: {
									//scope: this,
									clearicontap: function() {
										//call the clearFilter method on the store instance
										Ext.getStore('AccountItems').clearFilter();
									},
									keyup: function(field) {
										//get the store and the value of the field
										var value = field.getValue(),
											store = Ext.getStore('AccountItems');

										//first clear any current filters on thes tore
										store.clearFilter();

										//check if a value is set first, as if it isnt we dont have to do anything
										if (value) {
											//the user could have entered spaces, so we must split them so we can loop through them all
											var searches = value.split(' '),
												regexps = [],
												i;

											//loop them all
											for (i = 0; i < searches.length; i++) {
												//if it is nothing, continue
												if (!searches[i]) continue;

												//if found, create a new regular expression which is case insenstive
												regexps.push(new RegExp(searches[i], 'i'));
											}

											//now filter the store by passing a method
											//the passed method will be called for each record in the store
											store.filter(function(record) {
												var matched = [];

												//loop through each of the regular expressions
												for (i = 0; i < regexps.length; i++) {
													var search = regexps[i],
														didMatch = record.get('accItemName').match(search);

													//if it matched the first or last name, push it into the matches array
													matched.push(didMatch);
												}

												//if nothing was found, return false (dont so in the store)
												if (regexps.length > 1 && matched.indexOf(false) != -1) {
													return false;
												} else {
													//else true true (show in the store)
													return matched[0];
												}
											});
										}
									}
								}
							},
							{ xtype: 'spacer' }
						]
					}
				]
            }
        ]
    }
});
