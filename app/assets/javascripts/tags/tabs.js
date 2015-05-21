riot.tag('tabs', '<h2>Tabs</h2> <ul> <li each="{ tab, i in tabs }" class="tabItem { is-active: parent.isActiveTab(tab.ref) }" onclick="{ parent.toggleTab }">{tab.title}</li> </ul> <div class="tabContent"> <div each="{ tab, i in tabs }" class="tabContent__item { hidden: !parent.isActiveTab(tab.ref) }">{tab.content}</div> </div>', function(opts) {
        this.tabs = [
            {
                title: 'Tab 1',
                ref: 'tab1',
                content: "(1) Lorem ipsum dolor"
            },
            {
                title: 'Tab 2',
                ref: 'tab2',
                content: "(2) Lorem ipsum dolor"
            },
            {
                title: 'Tab 3',
                ref: 'tab3',
                content: "(3) Lorem ipsum dolor"
            }
      ]

        this.activeTab = 'tab1'

        this.isActiveTab = function(tab) {
            return this.activeTab === tab
        }.bind(this);

        this.toggleTab = function(e) {
            this.activeTab = e.item.tab.ref
            return true
        }.bind(this);

});
