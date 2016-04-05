riot.tag2('view-edit-box', '<p class="{hidden: editMode}" onclick="{editModeStart}">{opts.surface}</p> <form if="{editMode}" onsubmit="{parent.submit}" onkeypress="{parent.keypress}"> <yield></yield> </form>', '', '', function(opts) {

        this.editMode = false;

        this.editModeStart = function(editModeName) {
            this.editMode = true;
            this.one('updated', function(){
                this.root.getElementsByClassName('edit-mode')[0].focus();
            });
        }.bind(this)

        this.editModeEnd = function(e) {
            this.editMode = false;
        }.bind(this)

});