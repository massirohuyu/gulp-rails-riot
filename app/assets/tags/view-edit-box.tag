<view-edit-box>
   
    <p class={ hidden: editMode } onclick={ editModeStart }>{ opts.surface }</p>
    <form if={ editMode } onsubmit={ parent.submit } onkeypress={ parent.keypress }>
        <yield/>
    </form>
    
    <script>
      
        this.editMode = false;
      
        editModeStart(editModeName) {
            this.editMode = true;
            this.one('updated', function(){
                this.root.getElementsByClassName('edit-mode')[0].focus();
            });
        }
      
        editModeEnd(e) {
            this.editMode = false;
        }
  
    </script>
    
</view-edit-box>