<balance-table-child>
    
    <div class="th">
        <view-edit-box surface={ this.record.date } >
            <input name="date" type="date" class="edit-input {edit-mode: this.editMode}" value={ this.record.date } onblur={ editModeEnd }>
        </view-edit-box>
    </div>
    
    <div class="td record-section">
        <view-edit-box surface={ this.record.section.surface } >
            <select name="section" class="edit-input {edit-mode: this.editMode}" onblur={ editModeEnd }>
                <option each={ parent.sections.models } value={ this.id } selected={ this.id === this.record.section.id }>
                    { this.title }
                </option>
            </select>
        </view-edit-box>
    </div>
    <div class="td record-subsection">
        <view-edit-box surface={ this.record.subsection.surface } >
            <select name="subsection" class="edit-input {edit-mode: this.editMode}" onblur={ editModeEnd }>
                <option each={ parent.subsections.models } value={ this.id } selected={ this.id === this.record.subsection.id }>
                    { this.title }
                </option>
            </select>
        </view-edit-box>
    </div>
    <div class="td record-amount">
        <view-edit-box surface={ this.record.amount.surface } >
            <input name="amount" type="number" class="edit-input {edit-mode: this.editMode}" value={ this.record.amount.value } onblur={ editModeEnd }>
        </view-edit-box>
    </div>
    
    <script>
      
        
        // properties -------------------------------
      
        
        // methods ----------------------------------
      
        keypress(e) {
            if( e.keyCode === 13 ) {
              e.target.blur();
              this.trigger('patch', e.target.parentElement);
            }
            else return true;
        }
      
        submit(e) {
            this.parent.changedId = this.record.id;
            this.trigger('patch', e.target)
        }
        
        puts(obj){
          console.log(obj);
        }
      
        // events ------------------------------------
      
        var self = this;
      
        self.on('patch', function(form){
            var param = ajax.serialize(form);
            console.log(self.parent.parent);
            self.parent.parent.changedId = self.record.id;
            riot.collections.records.trigger('patch', self.record.id, param);
            
        });
        
        self.on('update', function(){
            
        });
      
        self.on('updated', function(){
            
        });
      
    </script>
    
</balance-table-child>