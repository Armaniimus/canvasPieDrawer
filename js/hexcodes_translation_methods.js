class convertHexCodes {
    constructor(hex) {
        this.setHex(hex)
    }

    setHex(hex) {
        this.hex = hex;
        this.tint = this._tint()
        this.hue = this._hue()
        this.tone = this._tone()
        this.shade = this._shade()
    }

    validateHex() {
        let hexcode = this.hex.replace(/#/, '');
        if (hexcode.length !== 3 && hexcode.length !== 6) {
            console.log("incorrect length FilterHex()");
            return false;

        } else if (hexcode.length == 3) {
            let newhex = '';

            for (var i = 0; i < 3; i++) {
                newHex += hexcode[i] + hexcode[i]
            }
            hexcode = newHex;
        }

        let a = hexcode.match(/[a-fA-F0-9]{6}/)
        if (null !== (hexcode.match(/[a-fA-F0-9]{6}/) ) ) {
            hexcode = "#" + hexcode;
            return hexcode;

        } else {
            console.log("invalid hex character FilterHex()");
            return false;
        }
    }

    translateHextoRgbArray(hexcode) {
        // remove the #
        hexcode = hexcode.replace(/#/, '');

        // convert hexcode string into an array
        hexcode = hexcode.split("");

        // convert a-f and A-F to numbers
        for (var i = 0; i < 6; i++) {
            switch (hexcode[i]) {
                case 'A':
                case 'a':
                    hexcode[i] = 10;
                    break;

                case 'B':
                case 'b':
                    hexcode[i] = 11;
                    break;

                case 'C':
                case 'c':
                    hexcode[i] = 12;
                    break;

                case 'D':
                case 'd':
                    hexcode[i] = 13;
                    break;

                case 'E':
                case 'e':
                    hexcode[i] = 14;
                    break;

                case 'F':
                case 'f':
                    hexcode[i] = 15;
                    break;
            }
        }

        // create red rgb code from hexcode array
        let red = parseInt(hexcode[0]) * 16;
        red += parseInt(hexcode[1]);

        // create green rgb code from hexcode array
        let green = parseInt(hexcode[2]) * 16;
        green += parseInt(hexcode[3]);

        // create blue rgb code from hexcode array
        let blue = parseInt(hexcode[4]) * 16;
        blue += parseInt(hexcode[5]);

        return [red, green, blue];
    }

    averageRgbArray(input_rgbArray, mix_rgbArray) {
        let output_rgbArray = [];
        for (var i = 0; i < input_rgbArray.length; i++) {
            let combinedRgb = input_rgbArray[i] + mix_rgbArray[i];
            output_rgbArray[i] = Math.round(combinedRgb/2);
        }
        return output_rgbArray;
    }

    translateRgbArraytoHex(rgbArray) {
        let hexcode = "";
        for (let i = 0; i < rgbArray.length; i++) {
            let digit = [];
            digit[0] = rgbArray[i] % 16;
            digit[1] = (rgbArray[i] - digit[0]) / 16;

            for (let ii = digit.length-1; ii > -1 ; ii--) {
                switch (digit[ii]) {
                    case 10:
                        hexcode += 'A'
                        break;

                    case 11:
                        hexcode += 'B'
                        break;

                    case 12:
                        hexcode += 'C'
                        break;

                    case 13:
                        hexcode += 'D'
                        break;

                    case 14:
                        hexcode += 'E'
                        break;

                    case 15:
                        hexcode += 'F'
                        break;

                    default:
                        hexcode += digit[ii];
                        break;
                }
            }
        }
        hexcode = "#" + hexcode;
        return hexcode;
    }
    _mixer(mixerHex) {
        // validate Input
        const inputHex = this.validateHex();

        // convert Both to rpgArrays;
        const input_rgbArray = this.translateHextoRgbArray(inputHex);
        const mix_rgbArray = this.translateHextoRgbArray(mixerHex);

        // average both
        const output_rgbArray = this.averageRgbArray(input_rgbArray, mix_rgbArray);

        // convert back to hex
        const outputHex = this.translateRgbArraytoHex(output_rgbArray);

        return outputHex;
    }

    _tint() {
        const mixerHex = "#ffffff";
        return this._mixer(mixerHex)
    }

    _hue() {
        return this.hex;
    }

    _tone() {
        const mixerHex = "#808080";
        return this._mixer(mixerHex)
    }

    _shade() {
        const mixerHex = "#000000";
        return this._mixer(mixerHex)
    }
}
