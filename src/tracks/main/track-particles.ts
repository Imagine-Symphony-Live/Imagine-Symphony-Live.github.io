import { ParticleCue } from "../../types/particle-cue";
import bloom from "../../../assets/images/bloom-128x128.png";

import { hslToRgb } from "../../color-utils";
import violinsPolyArea from '../../../assets/images/instrumentsection.svg?path=g#violins path&svg-path-as-poly';
import { boundingCenter } from "../../poly-utils";

const violinCenter = boundingCenter(violinsPolyArea);

function m2b(measure: number, beat: number): number {
  return (measure - 1) * 6 + (beat - 1)
}

import { song, Note } from './song-export';
import { EmitterConfig, OldEmitterConfig } from "pixi-particles";

const stepToColor = (step: number | null) => {
  if(step === null) {
    return '#aaaaaa';
  }
  const h = (((step % 12) + 12) % 12) / 12; // 0 to 1
  const l = Math.atan(step / 10) / Math.PI + 0.5; // 0 to 1
  return hslToRgb(h, l, 0.25);
};

const stepToDirection = (step: number | null) => {
  if(step === null) {
    return Math.random()*360;
  }

  return 360 * (step % 12) / 12;
}

const mapsNotes = (config: (step: number | null) => EmitterConfig | OldEmitterConfig) => (notes: Note[]) => notes.map<[number, [string, EmitterConfig | OldEmitterConfig]]>(([n,step]) => [n, [bloom, config(step)]]);

const soooManyParticles = song.parts.map(({ notes, name }) => {
  const isBb = /Bb/.test(name);
  if(isBb) {
    // Transpose Bb instruments
    notes = notes.map(([n,s]) => {
      if(s === null) return [n, null];
      return ([n,s-2]);
    });
  }
  const baseConfig = {
    "alpha": {
      "start": 1,
      "end": 0
    },
    "scale": {
      "start": Math.random() * 2 + 0.01,
      "end": Math.random() + 0.1,
      "minimumScaleMultiplier": 0.7
    },
    "speed": {
      "start": 200 * Math.random() + 50,
      "end": 20,
      "minimumSpeedMultiplier": 1
    },
    "acceleration": {
      "x": 0,//-50 + Math.random() * 100,
      "y": 0,//-50 + Math.random() * 100
    },
    "maxSpeed": 0,
    "noRotation": false,
    "rotationSpeed": {
      "min": 0,//Math.random() * 5,
      "max": 0,//5 + Math.random() * 5
    },
    "lifetime": {
      "min": 2 + Math.random(),
      "max": 3 + Math.random() * 2
    },
    "blendMode": "add",
    "frequency": 0.01,
    "emitterLifetime": 0.3,
    "maxParticles": 1,
    "pos": {
      "x": (Math.random()) * (window.innerWidth / 2) - 200,
      "y": (Math.random() - 0.5) * (window.innerHeight - 300)
    },
    "addAtBack": false,
    "spawnType": "point",
    //particlesPerWave: 1,
    //particleSpacing: 4.5
  };
  return mapsNotes((step) => {
    if(step === null) {
      return     ({
        ...baseConfig,
        "color": {
          "start": stepToColor(step),
          "end": stepToColor(step)
        },
        "speed": {
          "start": 20,
          "end": 20,
          "minimumSpeedMultiplier":1
        },
        angleStart: 0,
        "maxParticles": 10,
        "spawnType": "burst",
        particlesPerWave: 10,
        particleSpacing: 36
      });
    }
    return     ({
      ...baseConfig,
      "color": {
        "start": stepToColor(step),
        "end": stepToColor(step)
      },
      "startRotation": {
        "min": 0,//stepToDirection(step),
        "max": 0,//stepToDirection(step)
      },
      "pos": {
        "x": baseConfig.pos.x,
        "y": (Math.atan(-step / 7) / Math.PI + 0.5) * (window.innerHeight - 200) - 300
      },
      //angleStart: stepToDirection(step),
    });
  })(notes)
}).reduce<Array<[number, ParticleCue]>>((a, v) => [...a, ...v], []);

export const particles: Array<[number, ParticleCue]> = [
  ...soooManyParticles
  // ...pianoCues.map((n) => [n, [bloom, {
  //   "alpha": {
  //     "start": 1,
  //     "end": 0
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
  //     "minimumSpeedMultiplier": 0.3
  //   },
  //   "acceleration": {
  //     "x": 0,
  //     "y": 50
  //   },
  //   "maxSpeed": 0,
  //   "startRotation": {
  //     "min": -45,
  //     "max": -135
  //   },
  //   "noRotation": false,
  //   "rotationSpeed": {
  //     "min": 0,
  //     "max": 0
  //   },
  //   "lifetime": {
  //     "min": 2,
  //     "max": 2
  //   },
  //   "blendMode": "normal",
  //   "frequency": 0.5,
  //   "emitterLifetime": 1,
  //   "maxParticles": 1000,
  //   "pos": {
  //     "x": 0,
  //     "y": 0
  //   },
  //   "addAtBack": false,
  //   "spawnType": "burst",
  //   particlesPerWave: 5,
  //   angleStart: 180+45,
  //   particleSpacing: 4.5

  // }]]),
  // ...fluteCues.map((n) => [n, [bloom, {
  //   "alpha": {
  //     "start": 1,
  //     "end": 0
  //   },
  //   "scale": {
  //     "start": 0.3,
  //     "end": 0.1,
  //     "minimumScaleMultiplier": 0.7
  //   },
  //   "color": {
  //     "start": "#ffffff",
  //     "end": "#ffffff"
  //   },
  //   "speed": {
  //     "start": 10,
  //     "end": 5,
  //     "minimumSpeedMultiplier": 0.3
  //   },
  //   "acceleration": {
  //     "x": 0,
  //     "y": -10
  //   },
  //   "maxSpeed": 0,
  //   "startRotation": {
  //     "min": -45,
  //     "max": -135
  //   },
  //   "noRotation": false,
  //   "rotationSpeed": {
  //     "min": 0,
  //     "max": 0
  //   },
  //   "lifetime": {
  //     "min": 2,
  //     "max": 2
  //   },
  //   "blendMode": "normal",
  //   "frequency": 0.1,
  //   "emitterLifetime": 0.3,
  //   "maxParticles": 1,
  //   "pos": {
  //     "x": 200,
  //     "y": 0
  //   },
  //   "addAtBack": false,
  //   "spawnType": "burst",
  //   particlesPerWave: 5,
  //   angleStart: 180+45,
  //   particleSpacing: 4.5

  // }]]),
  // [
  //   0, [bloom, {
  //     "alpha": {
  //       "start": 0.62,
  //       "end": 0
  //     },
  //     "scale": {
  //       "start": 0.025,
  //       "end": 0.075,
  //       "minimumScaleMultiplier": 1
  //     },
  //     "color": {
  //       "start": "#ffffff",
  //       "end": "#ffffff"
  //     },
  //     "speed": {
  //       "start": 10,
  //       "end": 1,
  //       "minimumSpeedMultiplier": 0.8
  //     },
  //     "acceleration": {
  //       "x": 0,
  //       "y": 0
  //     },
  //     "maxSpeed": 0,
  //     "startRotation": {
  //       "min": 265,
  //       "max": 275
  //     },
  //     "noRotation": false,
  //     "rotationSpeed": {
  //       "min": 50,
  //       "max": 50
  //     },
  //     "lifetime": {
  //       "min": 0.1,
  //       "max": 0.75
  //     },
  //     "blendMode": "normal",
  //     "frequency": 0.001,
  //     "emitterLifetime": m2b(3, 1),
  //     "maxParticles": 1000,
  //     "pos": {
  //       "x": 0,
  //       "y": 0
  //     },
  //     "addAtBack": false,
  //     spawnType: "polygonalChain",
  //     spawnPolygon: violinsPolyArea.map(([x,y]) => ({x, y}))
  //   }]
  // ],
  // [m2b(3, 1), [bloom, {
  //   "alpha": {
  //     "start": 1,
  //     "end": 0
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
  //     "minimumSpeedMultiplier": 0.3
  //   },
  //   "acceleration": {
  //     "x": 0,
  //     "y": 50
  //   },
  //   "maxSpeed": 0,
  //   "startRotation": {
  //     "min": -45,
  //     "max": -135
  //   },
  //   "noRotation": false,
  //   "rotationSpeed": {
  //     "min": 0,
  //     "max": 0
  //   },
  //   "lifetime": {
  //     "min": 2,
  //     "max": 2
  //   },
  //   "blendMode": "normal",
  //   "frequency": 0.5,
  //   "emitterLifetime": 3,
  //   "maxParticles": 1000,
  //   "pos": {
  //     "x": violinCenter[0],
  //     "y": violinCenter[1]
  //   },
  //   "addAtBack": false,
  //   "spawnType": "burst",
  //   particlesPerWave: 20,
  //   angleStart: 180+45,
  //   particleSpacing: 4.5

  // }]],


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