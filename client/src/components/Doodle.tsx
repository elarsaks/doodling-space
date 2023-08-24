import React from "react";
import CanvasDraw from "react-canvas-draw";

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

  containerRef: React.RefObject<HTMLDivElement> =
    React.createRef<HTMLDivElement>();

  state = {
    isDragging: false,
    startX: 0,
    startY: 0,
    xTranslate: 0,
    yTranslate: 0,
  };

  handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.setState({
      isDragging: true,
      startX: e.clientX - this.state.xTranslate,
      startY: e.clientY - this.state.yTranslate,
    });
  };

  handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!this.state.isDragging) return;
    e.preventDefault();

    const xTranslate = e.clientX - this.state.startX;
    const yTranslate = e.clientY - this.state.startY;

    const container = this.containerRef.current;
    if (container) {
      container.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`;
    }
  };

  handleMouseUpOrLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.setState({ isDragging: false });
  };

  render() {
    return (
      <div
        ref={this.containerRef}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUpOrLeave}
        onMouseLeave={this.handleMouseUpOrLeave}
      >
        <CanvasDraw {...this.props} />
      </div>
    );
  }
}

export default DoodleComponent;
