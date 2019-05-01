/**
 * @constructor
 * @extends {module:ol/control/Control~Control}
 * @param {Object=} opt_options Control options.
 */
var RotateNorthControl = (function (Control) {
  function RotateNorthControl(opt_options) {
    var options = opt_options || {};

    var button = document.createElement('button');
    button.innerHTML = 'N';

    var element = document.createElement('div');
    element.className = 'rotate-north ol-unselectable ol-control';
    element.appendChild(button);

    Control.call(this, {
      element: element,
      target: options.target
    });

    button.addEventListener('click', this.handleRotateNorth.bind(this), false);
  }

  if ( Control ) RotateNorthControl.__proto__ = Control;
  RotateNorthControl.prototype = Object.create( Control && Control.prototype );
  RotateNorthControl.prototype.constructor = RotateNorthControl;

  RotateNorthControl.prototype.handleRotateNorth = function handleRotateNorth () {
    this.getMap().getView().setRotation(0);
  };

  return RotateNorthControl;
}(ol.control.Control));

/**
 * @constructor
 * @extends {module:ol/control/Control~Control}
 * @param {Object=} opt_options Control options.
 */
var LayersControl = (function (Control) {
  function LayersControl(opt_options) {
    var options = opt_options || {};

    this.container = document.createElement('div');
    this.container.className = 'layers-control ol-unselectable ol-control';
    this.container.id = 'ol-layerswitch'

    this.div_header = document.createElement('div');
    this.div_header.className = 'ol-control-header';
    this.div_header.innerHTML = '<span>Layers</span>';

    this.div_checkboxes = document.createElement('div');
    this.div_checkboxes.className = ' ckbx-container';

    this.container.appendChild(this.div_header);
    this.container.appendChild(this.div_checkboxes);   

    Control.call(this, {
      element: this.container,
      target: options.target
    });
  }

  function changeLayers() {
    var container = this.div_checkboxes;
    container.innerHTML = '';
    var map = this.getMap();
    var layers = map.getLayers();
    layers.forEach(
      function addLayer(ele, ind, arr) {
        let props = ele.getProperties();
        var div = document.createElement('div');
        div.className = 'ckbx-layer';
        container.appendChild(div);
        var label = document.createElement('label');
        label.className = 'ckbx-label';
        label.innerHTML = props.name;
        div.appendChild(label);
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'ckbx-box';
        checkbox.checked = true;
        div.appendChild(checkbox);
        checkbox.addEventListener('change', function(){
          console.log(map);
          console.log(ele);
          if (this.checked) {
            // Checkbox is checked..
            layers.insertAt(ind, ele)
          } else {
            // Checkbox is not checked..
            map.removeLayer(ele);
          }
        });
      });
  }

  if (Control) LayersControl.__proto__ = Control;
  LayersControl.prototype = Object.create(Control && Control.prototype);
  LayersControl.prototype.constructor = LayersControl;
  
  LayersControl.prototype.changeLayers = changeLayers;

  return LayersControl;
}(ol.control.Control));

export { RotateNorthControl, LayersControl};