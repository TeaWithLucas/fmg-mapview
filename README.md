# fmg-mapview

A simple template to render a xyz tilemap using only local html, css and javascript.
An example of this running can be found at: https://fmg-view.azurewebsites.net/

# Generating a tileset from Fantasy Map Generator

Using @Azgaar's [Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator/) you can export a .osm file which can be used to render a tileset.

## Requrements for tutorial
* [Fantasy Map Generator osm branch](https://fmg.azurewebsites.net/)
* [Maperitive](http://maperitive.net/)
* Downloaded copy of this template, excluding the example 'tiles' folder

## Load your map
* Download a .osm file from the Fantasy Map Generator
* Open Maperitive
* (Optional) Delete the current layer which shows the world
* Load your .osm file previously you downloaded
* Run the command `generate-tiles minzoom [min_value] maxzoom [max_value]` where min_value and max_value are the minumum and maximum zoom levels to render respectively. Keep in mind [Performance And Storage Considerations](http://maperitive.net/docs/Commands/GenerateTiles.html#Performance%20And%20Storage%20Considerations), the example uses maxzoom 17.
* copy the folder generated to the location of the index.html and rename it tiles.
* Open up tiles and it should show your map.

## Troubleshooting
* If your page is completely blank when opened or there is no grid, you probibily have a script problem, open your browsers command line and see what the error is.
* If you see the interface, grid but not your map, try zooming out or looking around, your map maybe elsewhere you cant see
