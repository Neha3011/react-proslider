# react-proslider
A slider component in react

### Installation

```sh
npm install react-proslider
```

### Usage

```sh
import React from 'react';
import ReactDOM from 'react-dom';

import Slider from 'react-proslider';
    
ReactDOM.render(
  <Slider
    thumbClass="slider__thumb--small"
  />, document.querySelector('#container')
);
```

### Properties

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| sliderConfig | object  | `{'value': 20, 'max': 50, 'min': 1, 'thumbSize': 15 }` | contains the value of the range |
| onSlide | Function | | returns the current value of the slider | 
| onChangeSlider | Function | | `onChangeSlider` will be triggered on `onMouseUp` |
| thumbClass | string | | Give class `slider__thumb--small`, `slider__thumb--grey` & `slider__thumb--large` to give appropriate styles to range thumb. You can pass your custom class and specify your styles |
| rangeClass | string | | Give class `slider--grey` & `slider--large` for appropriate styles. You can pass your custom class and specify your styles |
| showLeftBar | boolean | `false` | set `true` to show grey bar on the left side of thumb. Incase of `false` the entire range will have same styles |