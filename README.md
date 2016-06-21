## aframe-bmfont-text-component

This component is used for rendering bitmap font text in [A-Frame](https://aframe.io) with specific focus on signed distance field fonts (bitmap fonts that look great regardless of zoom level). 

Basically this wraps [Matt DesLauriers'](https://github.com/mattdesl) [three-bmfont-text](https://github.com/Jam3/three-bmfont-text) and [load-bmfont](https://github.com/Jam3/load-bmfont).

### Properties

|    Property   |           Description          |      Default Value      |
|:-------------:|:------------------------------:|:-----------------------:|
|     text      |   the text you want to appear  |           None          |
|     width     |      width of the text box     |           None          |
|     align     |    'left', 'center', 'right'   |           left          |
| letterSpacing |  the letter spacing in pixels  |            0            |
|      fnt      |       path to 'fnt' file       | ../fonts/DejaVu-sdf.fnt |
|    fntImage   |     path to font image file    | ../fonts/DejaVu-sdf.png |
|      mode     |       'pre' and 'nowrap'       |           None          |

More details [here](https://github.com/Jam3/three-bmfont-text#usage).

Explanation of 'mode' property [here](https://github.com/mattdesl/word-wrapper).

### Fonts and Font Images

More than just a script tag is needed for this component to work. You will also need a 'fnt', font image file, and to pass the paths to these files to the component.

```html
<a-entity bmfont-text="text: Hello World; width: 1000; fnt:../fonts/DejaVu-sdf.fnt; fntImage:../fonts/DejaVu-sdf.png">
</a-entity>
```

Since the path "../fonts/DejaVu-sdf" is set by default, it is possible to avoid declaring these paths explicitly by using the DejaVu font and organizing your project folders to match the defaults.

It should be possible to use different fonts, but I have yet to try. A guide for generating SDF fonts can be found [here](https://github.com/libgdx/libgdx/wiki/Distance-field-fonts).

### Usage

The most basic usage is to write some text:

```html
<a-entity bmfont-text="text: Hello World;"></a-entity>
```

To change the size of the text, add the [scale](https://aframe.io/docs/0.2.0/components/scale.html) component to the entity.

```html
<a-entity bmfont-text="text: Hello World;"
          scale="2 2 2">
</a-entity>
```

Text can be wrapped by specifying width:

```html
<a-entity bmfont-text="text: Hello World; width: 200"></a-entity>
```

To be honest, I'm not sure what units width uses as it is not specified by three-bmfont-text. You will have to play around a bit.

### Advanced Usage

This component does not make use of all of the features of [three-bmfont-text](https://github.com/Jam3/three-bmfont-text) and its sister modules, if you require more advanced functionality such as tabSize and start and end indices, I recommend forking this component and modifying it. Pull requests are welcome, but please include a test example.

### Limitations

Bitmap font rendering limits you to the characters included in the font and font files are much smaller than Unicode. SDF font (in particular) also tends to smooth sharp edges, [there are ways around this](https://lambdacube3d.wordpress.com/2014/11/12/playing-around-with-font-rendering/) but personally I like the smooth look.

### Additional Information

If you are interested in this technique and want to learn more, I recommend reading the documentation for [three-bmfont-text](https://github.com/Jam3/three-bmfont-text). 

Here are some additional resources:

- [Valve's original paper](http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf)
- ['Hacking with THREE.js' by Matt DesLauriers](http://slides.com/mattdeslauriers/hacking-with-three-js#/13)
- ['It’s 2015 and drawing text is still hard (WebGL, ThreeJS)' by Parris Khachi](https://www.eventbrite.com/engineering/its-2015-and-drawing-text-is-still-hard-webgl-threejs/)

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/bryik/aframe-bmfont-text-component/master/dist/aframe-bmfont-text-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity bmfont-text="exampleProp: exampleVal"></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-bmfont-text-component
```

Then register and use.

```js
require('aframe');
require('aframe-bmfont-text-component');
```
