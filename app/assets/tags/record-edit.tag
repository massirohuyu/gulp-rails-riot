<record-edit>

    <form>
        <div class="radio-tabs">
            <label for={ 'isIncome' + opt.suffix }>Income</label>
                <input id={ 'isIncome' + opt.suffix } name="is_income" type="radio" value="1" checked={ record.is_income }>
            <label for={ 'isExpense' + opt.suffix }>Expense</label>
                <input id={ 'isExpense' + opt.suffix } name="is_income" type="radio" value="0" checked={ !record.is_income }>
        </div><div>
            <input name="date" type="date" class="edit-input" value={ record.date }>
        </div><div>
            <select name="section" class="edit-input">
                <option if={ this.id } each={ sections.models } value={ this.id } selected={ this.id === parent.record.section }>
                    { this.title }
                </option>
            </select>
        </div><div>
            <select name="subsection" class="edit-input">
                <option if={ this.id } each={ subsections.models } value={ this.id } selected={ this.id === parent.record.subsection }>
                    { this.title }
                </option>
            </select>
        </div><div>
            <input name="amount" type="number" class="edit-input" value={ record.amount }>
        </div><div>
            <input name="detail" type="text" class="edit-input" value={ record.detail }>
        </div>
        
    </form>
    
    <script>
        
        // properties -------------------------------
        
        this.records = riot.collections.records;
        this.sections = riot.collections.sections;
        this.subsections = riot.collections.subsections;
    
        this.record = {
            is_income: true
        };
        
        
        // methods ----------------------------------
        
        
        
        
        // events ------------------------------------
              
        var self = this;
      
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
                self.record = this.records.models[0].records[0];
                console.log(self.record);
            }
        });
        
    </script>

</record-edit>