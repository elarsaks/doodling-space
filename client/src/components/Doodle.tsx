import React from 'react';
import CanvasDraw from 'react-canvas-draw';

class DoodleComponent extends React.Component {
  static defaultProps = {
    onChange: null,
    loadTimeOffset: 5,
    lazyRadius: 1,
    brushRadius: 3,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    hideGrid: false,
    canvasWidth: 3000,
    canvasHeight: 1500,
    disabled: false,
    imgSrc: "",
    saveData: null,
    immediateLoading: false,
    hideInterface: false,
    gridSizeX: 25,
    gridSizeY: 25,
    gridLineWidth: 0.5,
    hideGridX: false,
    hideGridY: false,
    enablePanAndZoom: true,
    mouseZoomFactor: 0.01,
    zoomExtents: { min: 0.33, max: 3 },
  };

  render() {
    return <CanvasDraw {...this.props} />;
  }
}

export default DoodleComponent;
