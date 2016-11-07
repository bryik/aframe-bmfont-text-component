## aframe-bmfont-text-component

**Works with A-Frame version 0.3.0.**

This component is useful for rendering bitmap and signed distance field font text in [A-Frame](https://aframe.io). Basically, it wraps Matt DesLauriers' [three-bmfont-text](https://github.com/Jam3/three-bmfont-text) and [load-bmfont](https://github.com/Jam3/load-bmfont).

![screenshot](http://i.imgur.com/pDDlzAX.png)

## Properties

|    Property   |          Description         |     Default Value     |
|:-------------:|:----------------------------:|:---------------------:|
|      text     |  the text you want to appear |          None         |
|     width     |     width of the text box    |          None         |
|     align     |   'left', 'center', 'right'  |          left         |
| letterSpacing | the letter spacing in pixels |           0           |
|   lineHeight  |   the line height in pixels  |           38          |
|      fnt      |      path to 'fnt' file      | https://cdn.rawgit... |
|    fntImage   |    path to font image file   | https://cdn.rawgit... |
|      mode     |      'pre' and 'nowrap'      |        'normal'       |
|     color     |     by RGB, hex, or name     |          #000         |
|    opacity    |    Extent of transparency.   |          1.0          |

More details on these properties [here](https://github.com/Jam3/three-bmfont-text#usage).

Explanation of 'mode' property [here](https://github.com/mattdesl/word-wrapper).

## Usage

Write some text:

```html
<a-entity bmfont-text="text: Hello World;"></a-entity>
```

To change the size of the text, use the [scale](https://aframe.io/docs/0.2.0/components/scale.html) component or position the text closer or further away.

Text can be wrapped by specifying width, but I'm not sure what units three-bmfont-text uses. You will have to play around a bit.

## Custom Fonts

A guide for generating SDF fonts can be found [here](https://github.com/libgdx/libgdx/wiki/Distance-field-fonts); here is an example comparing [Arial Black and DejaVu](http://i.imgur.com/iWtXHm5.png). Bitmap fonts also work, but do not look nearly as good.

Different fonts can be specified with the 'fnt' and 'fntImage' properties.

```html
<a-entity bmfont-text="text: Hello World; fnt:../fonts/DejaVu-sdf.fnt; fntImage:../fonts/DejaVu-sdf.png">
</a-entity>
```

Thanks to [RawGit](http://rawgit.com/), these default to hosted "DejaVu-sdf.fnt" and "DejaVu-sdf.png" files.

## Limitations

This component does not make use of all of the features of [three-bmfont-text](https://github.com/Jam3/three-bmfont-text) and its sister modules, if you require more advanced functionality such as tabSize and start and end indices, I recommend forking this component and modifying it. Pull requests are welcome, but please include a test example.

Bitmap font rendering limits you to the characters included in the font (Unicode this is not). SDF font (in particular) tends to smooth sharp edges though [there are ways around this](https://lambdacube3d.wordpress.com/2014/11/12/playing-around-with-font-rendering/).

#### Additional Information

If you are interested in text rendering in WebGL/ThreeJS/A-Frame and want to learn more, I recommend reading the documentation for [three-bmfont-text](https://github.com/Jam3/three-bmfont-text). 

Here are some additional resources:

- ['It’s 2015 and drawing text is still hard (WebGL, ThreeJS)' by Parris Khachi](https://www.eventbrite.com/engineering/its-2015-and-drawing-text-is-still-hard-webgl-threejs/)
- [Valve's original paper](http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf)
- ['Hacking with THREE.js' by Matt DesLauriers](http://slides.com/mattdeslauriers/hacking-with-three-js#/13)

## Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.3.0/aframe.min.js"></script>
  <script src="https://rawgit.com/bryik/aframe-bmfont-text-component/master/dist/aframe-bmfont-text-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity bmfont-text="text: Hello world"></a-entity>
  </a-scene>
</body>
```

#### NPM

Install via NPM:

```bash
npm install aframe-bmfont-text-component
```

Then register and use.

```js
require('aframe');
require('aframe-bmfont-text-component');
```
