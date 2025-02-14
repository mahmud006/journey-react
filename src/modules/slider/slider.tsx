import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import the styles for rc-slider
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function SliderComp() {
  const [range, setRange] = useState([0, 1.5]); // Initial slider values
  const minValue = 0;
  const maxValue = 1.5;

  return (
    <div style={{ width: '500px', margin: '50px auto' }}>
      <h2>RC Slider Test</h2>

      <div>
        <label>
          <b>Lower Value:</b> {range[0]}
        </label>
        <br />
        <label>
          <b>Higher Value:</b> {range[1]}
        </label>
      </div>

      <Slider
        range={{
          draggableTrack: true,
        }}
        step={0.01} // Ensures fractional movement
        min={minValue}
        max={maxValue}
        value={range}
        // pushable={0.01}
        // classNames={{
        //   handle: 'handle',
        // }}
        handleRender={(node, props) => {
          const { value } = props;
          return (
            <Tooltip overlay={value} placement="top" key={props.index}>
              {node}
            </Tooltip>
            // <Tippy
            //   content={value}
            //   key={props.index}
            //   placement="top-end"
            //   animation="scale"
            //   arrow={true}
            // >
            //   {node}
            // </Tippy>
          );
        }}
        onChange={(value) => {
          if (Array.isArray(value)) {
            setRange(value);
          }
        }}
        styles={{
          rail: {
            backgroundColor: '#ddd',
            height: '8px',
          },
          track: {
            backgroundColor: '#007bff',
            height: '8px',
          },
          handle: {
            width: '20px',
            height: '20px',
            marginTop: '-6px',
            backgroundColor: '#007bff',
            border: '2px solid #0056b3',
            borderRadius: '50%',
          },
        }}
      />
    </div>
  );
}

export default SliderComp;
