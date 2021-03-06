import {Shape} from "./Shape.js";
import {calculateNormalsForObject} from "../myUtils/calculateNormalsForObject.js";

export class Romb extends Shape {
    constructor() {
        super();
        this.attributes = {
            aColor: {
                size: 4,
                offset: 0,
                bufferData: new Float32Array([
                    Math.random(), Math.random(), Math.random(), 1.0,
                    Math.random(), Math.random(), Math.random(), 1.0,
                    Math.random(), Math.random(), Math.random(), 1.0,
                    Math.random(), Math.random(), Math.random(), 1.0,
                    Math.random(), Math.random(), Math.random(), 1.0,
                    Math.random(), Math.random(), Math.random(), 1.0,
                ]),
            },
            aPosition: {
                size: 4,
                offset: 0,
                bufferData: new Float32Array([
                    -1, 0.0, 1, 1.0,
                    1, 0.0, 1, 1.0,
                    1, 0.0, -1, 1.0,
                    -1, 0.0, -1, 1.0,
                    0.0, 2.0, 0.0, 1.0, // varful up
                    0.0, -2.0, 0.0, 1.0, // varful down
                ]),
            },
            aNormal: {
                size: 4,
                offset: 0,
                bufferData: null,
            }
        };
        this.indices = new Uint8Array([
            0, 4, 3,
            3, 5, 0,
            3, 2, 4,
            2, 5, 3,
            1, 4, 2,
            5, 2, 1,
            4, 1, 0,
            1, 5, 0,
        ]);
        this.state = {
            mm: mat4.create(),
        };
        this.init = function (_this) {
            let indices = _this.indices;
            let vertices = _this.attributes.aPosition.bufferData;
            // get the normals
            let normals = calculateNormalsForObject(indices, vertices)
            _this.attributes.aNormal.bufferData = new Float32Array(normals);
        }(this);
    }
}