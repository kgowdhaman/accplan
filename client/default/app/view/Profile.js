Ext.define('AccPlan.view.Profile', {
    extend: 'Ext.Container',
    xtype : 'profile',
    config: {
		layout: 'fit',
        items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'STATE FARM INSURANCE',
				ui: 'light',
				items: [
					{
						//iconCls: 'add',
						//iconMask: true,
						align: 'right',
						text: 'PRINT2PDF'
					},
					{
						//iconCls: 'home',
						//iconMask: true,
						align: 'right',
						text: 'EMAIL'
					},
					{
						//iconCls: 'home',
						//iconMask: true,
						align: 'right',
						text: 'EDIT ACCOUNT'
					}
				]
			},
			{
                id: 'launchscreen',
                cls : 'card',
                scrollable: true,
                html: '<div><div class="feature main"><img src="resources/images/State_Farm_Logo.png" width="52" height="52"/><p>Account Owner: Todd Kagel</p><p>Total VMware Investment ($k): 9,200,000</p><p>Previous VMware Investment ($k): 8,000,000</p><p>Goal - Current Palnning Period ($k): 5,000,000</p></div><h2>Account Summary:</h2><div class="feature"><p>State Farms mission statement is to "help people manage the risks of everyday life, recover from the unexpected, and realize their dreams". The leading US personal lines property/casualty company (by premiums), State Farm Mutual Automobile Insurance company is the #1 provider of auto insurance. It also is the leading home insurer and offers nonmedical health and life insurance through its subsidiary companies. Its products are marketed via some 17,000 agents in the US and Canada.</p><br><p>Competition has increased with the fall barriers between the banking, securities and insurance industries. State Farms effort to diversify include a federal savings bank charter (State Farm Bank) that offers comsumer and business loans through its agents and by phone, mail, and the Internet.</p></div><h2>VMWare Goal / Mission:</h2><div class="feature"><p>Provide the future foundation for state Farms massive IT delivery and IT services model.</p></div></div>'
			}
			//{
              //  xtype: 'list',
				//itemTpl: '<div>{accName}</div>',
                //store: 'Accounts'
            //}
		]	
    }
});
