/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

var createText = require('three-bmfont-text');
var loadFont = require('load-bmfont');
var SDFShader = require('./lib/shaders/sdf');

/**
 * bmfont text component for A-Frame.
 */
AFRAME.registerComponent('bmfont-text', {
  schema: {
    text: {
      type: 'string'
    },
    width: {
      type: 'number',
      default: 1000
    },
    align: {
      type: 'string',
      default: 'left'
    },
    letterSpacing: {
      type: 'number',
      default: 0
    },
    fnt: {
      type: 'string',
      default: '../fonts/DejaVu-sdf.fnt'
    },
    fntImage: {
      type: 'string',
      default: '../fonts/DejaVu-sdf.png'
    },
    mode: {
      type: 'string',
      default: 'normal'
    }
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    // Entity data
    var el = this.el;
    var object3D = el.object3D;
    var data = this.data;

    // Use fontLoader utility to load 'fnt' and texture
    fontLoader({
      font: data.fnt,
      image: data.fntImage
    }, start);

    function start (font, texture) {
      // Setup texture, should set anisotropy to user maximum...
      texture.needsUpdate = true;
      texture.anisotropy = 16;

      var options = {
        font: font, // the bitmap font definition
        text: data.text, // the string to render
        width: data.width,
        align: data.left,
        letterSpacing: data.letterSpacing,
        mode: data.mode
      };

      // Create text geometry
      var geometry = createText(options);

      // Use './lib/shaders/sdf' to help build a shader material
      var material = new THREE.RawShaderMaterial(SDFShader({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        color: 'rgb(230, 230, 230)'
      }));

      var text = new THREE.Mesh(geometry, material);

      // Rotate so text faces the camera
      text.rotation.y = Math.PI;

      // Scale text down
      text.scale.multiplyScalar(-0.005);

      object3D.add(text);
    }
  }
});

/**
 * A utility to load a font with bmfont-load
 * and a texture with Three.TextureLoader()
 */
function fontLoader (opt, cb) {
  loadFont(opt.font, function (err, font) {
    if (err) {
      throw err;
    }

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load(opt.image, function (texture) {
      cb(font, texture);
    });
  });
}
