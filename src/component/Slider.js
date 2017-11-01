import React from 'react';
import classNames from 'classnames';
import getSize from 'get-size';

class Slider extends React.Component {

  state = {
    'rangeLength': 200
  };

  componentDidMount() {
    const rangeLength = this.getElementWidth(document.querySelector('.js-sliderRange'));
    this.setState({
      rangeLength
    });
  }

 getElementWidth = (el) => {
    return el ? getSize(el).width : 0;
  };

  onSlide = (min, max, limitType, e) => {
    const value = Number(e.target.value);
    this.props.onSlide({ value });
  };

  getSliderConfiguration = () => {
    const sliderConfig = this.props.sliderConfig;
    const value = sliderConfig.value;
    const min = sliderConfig.min;
    const max = sliderConfig.max;

    const thumbSize = sliderConfig.thumbSize;
    const rangeLength = this.state.rangeLength;

    const diff = (max - min) > 0 ? (max - min) : 1;
    const leftPosition = parseFloat((value - min) / diff).toFixed(1) * (rangeLength - thumbSize);
    const leftWidth = (rangeLength - thumbSize) - leftPosition + 1; // Add 1px to avoid showing original range width
    return {
      leftPosition,
      leftWidth
    };
  };

  render() {
    const action = this.props.action;
    const sliderConfig = this.props.sliderConfig;
    const value = sliderConfig.value;
    const min = sliderConfig.min;
    const max = sliderConfig.max;
    const {leftPosition, leftWidth} = this.getSliderConfiguration();

    return (
        <div className="slider hv-center">
          {(() => {
            if (this.props.showLeftBar) {
              return (
                  <div className="slider__leftbar"
                       style={{'width': leftWidth}}
                  >
                  </div>
              );
            }
          })()}
          <div className={classNames('slider__thumb', this.props.thumbClass)}
               style={{'left': leftPosition}}
          >
          </div>
          <input
              className={classNames('slider__range js-sliderRange', this.props.rangeClass, {
                'focus': !this.props.showLeftBar
              })}
              type="range"
              value={value}
              min={min}
              max={max}
              step="1"
              onInput={this.onSlide.bind(this, min, max)}
              onMouseUp={this.props.onChangeSlider}
          />
        </div>
    );
  }
}

export default Slider;
