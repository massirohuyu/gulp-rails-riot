<balance-table-child>
    
    <div class="th">
        <p class="{ hidden: this.editMode }" onclick={ editModeStart }>{ opts.date }</p>
        <form onsubmit={ patch } if={ this.editMode }>
            <input type="date" class="edit-input {edit-mode: this.editMode}" name="date" value={ opts.date } onblur={ editModeEnd }>
        </form>
    </div>
    <div each={ name, value in this.record } class="td { 'record-' + name }" if={ name !== 'id'}>
        <p class={hidden: this.editMode}  onclick={ parent.editModeStart }>{ value.surface }</p>
        <form onsubmit={ parent.patch } if={ this.editMode }>
            <input type="number" class="edit-input {edit-mode: this.editMode}" name={ name } if={ name === 'amount'} value={ value.value } onblur={ parent.editModeEnd }>
            <input type="number" class="edit-input {edit-mode: this.editMode}" name={ name } if={ name === 'section'} value={ value.id } onblur={ parent.editModeEnd }>
            <input type="number" class="edit-input {edit-mode: this.editMode}" name={ name } if={ name === 'subsection'} value={ value.id } onblur={ parent.editModeEnd }>
        </form>
    </div>
    
    <script>
      
        this.editMode = false;
        
        editModeStart(e) {
            if(e.item) e.item.editMode = true;
            else this.editMode = true;
            this.one('updated', function(){
                this.root.getElementsByClassName('edit-mode')[0].focus();
            });
        }
      
        editModeEnd(e) {
            if(e.item) e.item.editMode = false;
            else this.editMode = false;
        }
      
        patch(e) {
            var param = ajax.serialize(e.target);
            this.parent.records.trigger('patch', this.record.id, param)
        }
      
        var self = this;
      
        self.on('updated', function(){
            
        });
      
    </script>
    
</balance-table-child>