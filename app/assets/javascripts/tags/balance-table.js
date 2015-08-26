riot.tag('balance-table', '<div class="table balance-table"> <div class="thead"> <div class="tr"> <div class="th" each="{ title, i in titles }">{ title }</div> </div> </div> <div class="tbody" each="{ record_groups }"> <balance-table-child each="{ record, i in records }" class="tr { changed: record.id === parent.changedId }"></balance-table-child> </div> <div class="tfoot"> <div class="tr"> <div class="th">total income </div> <div class="td">{ total.income }</div> </div> <div class="tr"> <div class="th">total expense </div> <div class="td">{ total.expense }</div> </div> <div class="tr"> <div class="th">total</div> <div class="td">{ total.all }</div> </div> </div> </div>', function(opts) {
        
        this.records = riot.collections.records;
        this.sections = riot.collections.sections;
        this.subsections = riot.collections.subsections;
      
        this.changedId = false;
      
        this.titles = ['date', 'section', 'subsection', 'amount'];
        this.record_groups = [];
        this.total = {
            income : 0,
            expense : 0,
            all : 0
        }
        
        var self = this;
        
        self.calculate = {
            
            totals: function(){
                var income = 0, expense = 0;
                _.each(self.records.models, function(record_group){
                    _.each(record_group.records, function(record){
                        if( record.is_income ) income += record.amount;
                        else expense += record.amount;
                    });
                });
                self.total.income = income;
                self.total.expense = expense;
                self.total.all = income - expense;
                return self.total;
            },
            
            total_income : function(){
                this.totals();
                return self.total.income;
            },
            
            total_expense : function(){
                this.totals();
                return self.total.expense;
            }
        }
      
        self.records.on('updated', function(){
            self.update();
        });
        
        self.sections.on('updated', function(){
            self.update();
        });
        
        self.subsections.on('updated', function(){
            self.update();
        });
      
        self.on('update', function() {
            if(self.records.isReady() && self.sections.isReady() && self.subsections.isReady()){
                self.record_groups = _.map(self.records.models, function(record_group){
                    var record_group = _.clone(record_group);
                    record_group.records = _.map(record_group.records, function(record){
                        var section = self.sections.models[record.section],
                            subsection = self.subsections.models[record.subsection];
                        return {
                            date : record.date,
                            id : record.id,
                            section :    { id : record.section, surface: section.title },
                            subsection : { id : record.subsection, surface: subsection.title },
                            amount :     { value : record.amount, surface: record.amount }
                        }
                    });
                    return record_group;
                });
                self.calculate.totals();
            }
          
        });
        
    
});