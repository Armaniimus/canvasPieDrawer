class setCanvasMetaData {

    constructor(idName) {
        this.idName = idName
        this.ctx = document.getElementById(idName).getContext("2d")
        this.render()
    }

    render() {
        this.setHeight()

        this.offsetX = GetOffsetX(this.idName);
        this.offsetY = GetOffsetY(this.idName);
        this.centX = this.width / 2;
        this.centY = this.height / 2;

        this.offsetCentX = this.width / 2 + this.offsetX;
        this.offsetCentY = this.height / 2 + this.offsetY;
    };

    setHeight() {
        const el = document.getElementById(this.idName)
        el.width = el.offsetWidth;
        el.height = el.width

        this.width = el.width
        this.height = el.height
    }
}
