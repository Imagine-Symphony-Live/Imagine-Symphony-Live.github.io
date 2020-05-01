import { ParticleCue } from "../../types/particle-cue";
import bloom from "../../../assets/images/bloom-128x128.png";

function m2b(measure: number, beat: number): number {
  return (measure - 1) * 6 + (beat - 1)
}

export const particles: Array<[number, ParticleCue]> = [
  [m2b(6, 4), [bloom, {
    "alpha": {
      "start": 1,
      "end": 1
    },
    "scale": {
      "start": 0.1,
      "end": 0.03,
      "minimumScaleMultiplier": 0.7
    },
    "color": {
      "start": "#ffffff",
      "end": "#ffffff"
    },
    "speed": {
      "start": 100,
      "end": 50,
      "minimumSpeedMultiplier": 1
    },
    "acceleration": {
      "x": 0,
      "y": 0
    },
    "maxSpeed": 0,
    "startRotation": {
      "min": 270,
      "max": 270
    },
    "noRotation": false,
    "rotationSpeed": {
      "min": 0,
      "max": 0
    },
    "lifetime": {
      "min": 1,
      "max": 2
    },
    "blendMode": "normal",
    "frequency": 0.05,
    "emitterLifetime": 12,
    "maxParticles": 1000,
    "pos": {
      "x": 0,
      "y": 0
    },
    "addAtBack": false,
    "spawnType": "circle",
    "spawnCircle": {
      "x": 0,
      "y": 0,
      "r": 32
    }
  }]],


  // [12, [bloom, {
  //   "alpha": {
  //     "start": 1,
  //     "end": 1
  //   },
  //   "scale": {
  //     "start": 0.1,
  //     "end": 0.03,
  //     "minimumScaleMultiplier": 0.7
  //   },
  //   "color": {
  //     "start": "#ffffff",
  //     "end": "#ffffff"
  //   },
  //   "speed": {
  //     "start": 100,
  //     "end": 50,
  //     "minimumSpeedMultiplier": 1
  //   },
  //   "acceleration": {
  //     "x": 0,
  //     "y": 0
  //   },
  //   "maxSpeed": 0,
  //   "startRotation": {
  //     "min": 270,
  //     "max": 270
  //   },
  //   "noRotation": false,
  //   "rotationSpeed": {
  //     "min": 0,
  //     "max": 0
  //   },
  //   "lifetime": {
  //     "min": 1,
  //     "max": 2
  //   },
  //   "blendMode": "normal",
  //   "frequency": 0.05,
  //   "emitterLifetime": 6,
  //   "maxParticles": 1000,
  //   "pos": {
  //     "x": 0,
  //     "y": 0
  //   },
  //   "addAtBack": false,
  //   "spawnType": "circle",
  //   "spawnCircle": {
  //     "x": 0,
  //     "y": 0,
  //     "r": 32
  //   }
  // }]],


  // [21, [bloom, {
  //   "alpha": {
  //     "start": 1,
  //     "end": 1
  //   },
  //   "scale": {
  //     "start": 0.1,
  //     "end": 0.03,
  //     "minimumScaleMultiplier": 0.7
  //   },
  //   "color": {
  //     "start": "#ffffff",
  //     "end": "#ffffff"
  //   },
  //   "speed": {
  //     "start": 100,
  //     "end": 50,
  //     "minimumSpeedMultiplier": 1
  //   },
  //   "acceleration": {
  //     "x": 0,
  //     "y": 0
  //   },
  //   "maxSpeed": 0,
  //   "startRotation": {
  //     "min": 270,
  //     "max": 270
  //   },
  //   "noRotation": false,
  //   "rotationSpeed": {
  //     "min": 0,
  //     "max": 0
  //   },
  //   "lifetime": {
  //     "min": 1,
  //     "max": 2
  //   },
  //   "blendMode": "normal",
  //   "frequency": 0.05,
  //   "emitterLifetime": 6,
  //   "maxParticles": 1000,
  //   "pos": {
  //     "x": 0,
  //     "y": 0
  //   },
  //   "addAtBack": false,
  //   "spawnType": "circle",
  //   "spawnCircle": {
  //     "x": 0,
  //     "y": 0,
  //     "r": 32
  //   }
  // }]]
];