function setCanvasMetaData() {
    this.render = function() {
        let canvas = document.getElementById(this.idName);
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.width

        this.width = canvas.width;
        this.height = canvas.height;

        this.offsetX = GetOffsetX(this.idName);
        this.offsetY = GetOffsetY(this.idName);
        this.centX = this.width / 2;
        this.centY = this.height / 2;

        this.offsetCentX = this.width / 2 + this.offsetX;
        this.offsetCentY = this.height / 2 + this.offsetY;
    };

    this.setIdName = function(name) {
        this.idName = name;
    }
}
