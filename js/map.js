import { RotateNorthControl, LayersControl } from './controls.js'

const View = ol.View;
const Layer = ol.layer;
const FromLonLat = ol.proj.fromLonLat;
const Source = ol.source;
const TileGrid = ol.tilegrid;
const Control = ol.control;

var url_xyz = 'tiles/{z}/{x}/{y}.png';
var url_json = 'tiles/tiles.json';
let map_id = 'my_map';
let lonlat = [18, -18];
let zoom = 5;

let ctrl_layers = new LayersControl();

var controls = Control.defaults().extend([
  new Control.OverviewMap(), new RotateNorthControl(), ctrl_layers
])

var my_map = new ol.Map({
  controls: controls,
  layers: [],
  target: map_id,
  view: new View({
    center: FromLonLat(lonlat),
    zoom: zoom
  })
});


var osmSource = new Source.OSM();



var source_xyz = new Source.XYZ({
  url: url_xyz
});
var layer_xyz = new Layer.Tile({
  source: source_xyz,
  name: "XYZ Tile grid"
});

//var source_json = new Source.TileJSON({
//  url: url_json
//})
//var layer_json = new Layer.Tile({
//  source: source_json
//  name: "JSON Tile Grid"
//});

var source_debug = new Source.TileDebug({
  projection: 'EPSG:3857',
  tileGrid: osmSource.getTileGrid()
})

var layer_debug = new Layer.Tile({
  source: source_debug,
  name: "Tile Debug EPSG:3857"
})


my_map.addLayer(layer_xyz);
my_map.addLayer(layer_debug);

ctrl_layers.changeLayers();

my_map.updateSize();