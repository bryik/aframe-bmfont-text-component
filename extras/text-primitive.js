/* global AFRAME */

/* Experimental text primitive.
 * Issues: color not changing, removeAttribute() not working, mixing primitive with regular entities fails
 * Color issue relates to: https://github.com/donmccurdy/aframe-extras/blob/master/src/primitives/a-ocean.js#L44
 */

var extendDeep = AFRAME.utils.extendDeep;
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-text', extendDeep({}, meshMixin, {
  defaultComponents: {
    'bmfont-text': {}
  },
  mappings: {
    text: 'bmfont-text.text',
    width: 'bmfont-text.width',
    align: 'bmfont-text.align',
    letterSpacing: 'bmfont-text.letterSpacing',
    lineHeight: 'bmfont-text.lineHeight',
    fnt: 'bmfont-text.fnt',
    fntImage: 'bmfont-text.fntImage',
    mode: 'bmfont-text.mode',
    color: 'bmfont-text.color',
    opacity: 'bmfont-text.opacity'
  }
}));
