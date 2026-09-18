var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_stream_outlets_1 = new ol.format.GeoJSON();
var features_stream_outlets_1 = format_stream_outlets_1.readFeatures(json_stream_outlets_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stream_outlets_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stream_outlets_1.addFeatures(features_stream_outlets_1);
var lyr_stream_outlets_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stream_outlets_1, 
                style: style_stream_outlets_1,
                popuplayertitle: 'stream_outlets',
                interactive: true,
    title: 'stream_outlets<br />\
    <img src="styles/legend/stream_outlets_1_0.png" /> Ephemeral<br />\
    <img src="styles/legend/stream_outlets_1_1.png" /> Intermittent<br />\
    <img src="styles/legend/stream_outlets_1_2.png" /> Perennial<br />' });
var format_RiversandCreeks_2 = new ol.format.GeoJSON();
var features_RiversandCreeks_2 = format_RiversandCreeks_2.readFeatures(json_RiversandCreeks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversandCreeks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversandCreeks_2.addFeatures(features_RiversandCreeks_2);
var lyr_RiversandCreeks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversandCreeks_2, 
                style: style_RiversandCreeks_2,
                popuplayertitle: 'Rivers and Creeks',
                interactive: true,
    title: 'Rivers and Creeks<br />\
    <img src="styles/legend/RiversandCreeks_2_0.png" /> Creek/stream<br />\
    <img src="styles/legend/RiversandCreeks_2_1.png" /> Major river<br />\
    <img src="styles/legend/RiversandCreeks_2_2.png" /> <br />' });
var format_Culverts_3 = new ol.format.GeoJSON();
var features_Culverts_3 = format_Culverts_3.readFeatures(json_Culverts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culverts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culverts_3.addFeatures(features_Culverts_3);
var lyr_Culverts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Culverts_3, 
                style: style_Culverts_3,
                popuplayertitle: 'Culverts',
                interactive: true,
    title: 'Culverts<br />\
    <img src="styles/legend/Culverts_3_0.png" /> Barely Functional<br />\
    <img src="styles/legend/Culverts_3_1.png" /> Deteriorated<br />\
    <img src="styles/legend/Culverts_3_2.png" /> Functional<br />\
    <img src="styles/legend/Culverts_3_3.png" /> Unclassified<br />' });
var format_RoadGradientandSlope_4 = new ol.format.GeoJSON();
var features_RoadGradientandSlope_4 = format_RoadGradientandSlope_4.readFeatures(json_RoadGradientandSlope_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadGradientandSlope_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadGradientandSlope_4.addFeatures(features_RoadGradientandSlope_4);
var lyr_RoadGradientandSlope_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadGradientandSlope_4, 
                style: style_RoadGradientandSlope_4,
                popuplayertitle: 'Road Gradient and Slope',
                interactive: true,
    title: 'Road Gradient and Slope<br />\
    <img src="styles/legend/RoadGradientandSlope_4_0.png" /> Flat<br />\
    <img src="styles/legend/RoadGradientandSlope_4_1.png" /> Rolling<br />\
    <img src="styles/legend/RoadGradientandSlope_4_2.png" /> Hilly<br />\
    <img src="styles/legend/RoadGradientandSlope_4_3.png" /> Mountainous<br />\
    <img src="styles/legend/RoadGradientandSlope_4_4.png" /> Unclassified<br />' });
var format_Road_centerline_5 = new ol.format.GeoJSON();
var features_Road_centerline_5 = format_Road_centerline_5.readFeatures(json_Road_centerline_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_centerline_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_centerline_5.addFeatures(features_Road_centerline_5);
var lyr_Road_centerline_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_centerline_5, 
                style: style_Road_centerline_5,
                popuplayertitle: 'Road_centerline',
                interactive: true,
                title: '<img src="styles/legend/Road_centerline_5.png" /> Road_centerline'
            });
var format_InundationRiskZones_6 = new ol.format.GeoJSON();
var features_InundationRiskZones_6 = format_InundationRiskZones_6.readFeatures(json_InundationRiskZones_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InundationRiskZones_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InundationRiskZones_6.addFeatures(features_InundationRiskZones_6);
var lyr_InundationRiskZones_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InundationRiskZones_6, 
                style: style_InundationRiskZones_6,
                popuplayertitle: 'Inundation Risk Zones',
                interactive: true,
    title: 'Inundation Risk Zones<br />\
    <img src="styles/legend/InundationRiskZones_6_0.png" /> 1<br />\
    <img src="styles/legend/InundationRiskZones_6_1.png" /> 2<br />\
    <img src="styles/legend/InundationRiskZones_6_2.png" /> 3<br />\
    <img src="styles/legend/InundationRiskZones_6_3.png" /> 4<br />' });
var format_ChainagePoints_7 = new ol.format.GeoJSON();
var features_ChainagePoints_7 = format_ChainagePoints_7.readFeatures(json_ChainagePoints_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChainagePoints_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChainagePoints_7.addFeatures(features_ChainagePoints_7);
var lyr_ChainagePoints_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChainagePoints_7, 
                style: style_ChainagePoints_7,
                popuplayertitle: 'Chainage Points',
                interactive: true,
                title: '<img src="styles/legend/ChainagePoints_7.png" /> Chainage Points'
            });
var group_02_WEBREADYOUTPUT = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_stream_outlets_1,lyr_RiversandCreeks_2,lyr_Culverts_3,lyr_RoadGradientandSlope_4,lyr_Road_centerline_5,lyr_InundationRiskZones_6,lyr_ChainagePoints_7,],
                                fold: 'open',
                                title: '02_WEB READY OUTPUT'});

lyr_OSMStandard_0.setVisible(true);lyr_stream_outlets_1.setVisible(true);lyr_RiversandCreeks_2.setVisible(true);lyr_Culverts_3.setVisible(true);lyr_RoadGradientandSlope_4.setVisible(true);lyr_Road_centerline_5.setVisible(true);lyr_InundationRiskZones_6.setVisible(true);lyr_ChainagePoints_7.setVisible(false);
var layersList = [group_02_WEBREADYOUTPUT];
lyr_stream_outlets_1.set('fieldAliases', {'fid': 'fid', 'outlet_id': 'Outlet ID', 'waterway_name': 'Waterway', 'flow_status': 'Flow Status', });
lyr_RiversandCreeks_2.set('fieldAliases', {'fid': 'fid', 'waterway_id ': 'Waterway ID', 'waterway_type': 'Waterway Type', });
lyr_Culverts_3.set('fieldAliases', {'fid': 'fid', 'culvert_id': 'Culvert ID', 'structure': 'Culvert Type', 'length_m': 'Culvert Length (m)', 'diameter_m': 'Diameter (m)', 'condition': 'Condition', 'function': 'Function', 'recommendation': 'Recommended Action', 'source_condition': 'source_condition', 'data_note': 'Verification Note', });
lyr_RoadGradientandSlope_4.set('fieldAliases', {'fid': 'fid', 'segment_id': 'Segment ID', 'gradient_pct': 'Gradient (%)', 'terrain_class': 'Terrain Class', 'chainage': 'Chainage', 'segment_length_m': 'Segment Length (m)', 'source_gradient': 'source_gradient', 'source_category': 'source_category', });
lyr_Road_centerline_5.set('fieldAliases', {'fid': 'fid', 'road_id': 'road_id', 'feature_type': 'feature_type', 'length_m': 'length_m', });
lyr_InundationRiskZones_6.set('fieldAliases', {'fid': 'fid', 'risk_zone_id ': 'Risk Zone ID', 'risk_level': 'Inundation Risk', 'risk_rank ': 'risk_rank ', 'source_description': 'source_description', });
lyr_ChainagePoints_7.set('fieldAliases', {'fid': 'fid', 'chainage_id ': 'Chainage ID', 'chainage': 'Chainage', 'elevation_m': 'Elevation (m)', 'easting': 'Easting (m)', 'northing': 'Northing (m)', });
lyr_stream_outlets_1.set('fieldImages', {'fid': 'Hidden', 'outlet_id': 'TextEdit', 'waterway_name': 'TextEdit', 'flow_status': 'TextEdit', });
lyr_RiversandCreeks_2.set('fieldImages', {'fid': 'Hidden', 'waterway_id ': 'TextEdit', 'waterway_type': 'TextEdit', });
lyr_Culverts_3.set('fieldImages', {'fid': 'Hidden', 'culvert_id': 'TextEdit', 'structure': 'TextEdit', 'length_m': 'TextEdit', 'diameter_m': 'TextEdit', 'condition': 'TextEdit', 'function': 'TextEdit', 'recommendation': 'TextEdit', 'source_condition': 'Hidden', 'data_note': 'TextEdit', });
lyr_RoadGradientandSlope_4.set('fieldImages', {'fid': 'Hidden', 'segment_id': 'TextEdit', 'gradient_pct': 'TextEdit', 'terrain_class': 'TextEdit', 'chainage': 'TextEdit', 'segment_length_m': 'TextEdit', 'source_gradient': 'Hidden', 'source_category': 'Hidden', });
lyr_Road_centerline_5.set('fieldImages', {'fid': 'TextEdit', 'road_id': 'TextEdit', 'feature_type': 'TextEdit', 'length_m': 'TextEdit', });
lyr_InundationRiskZones_6.set('fieldImages', {'fid': 'Hidden', 'risk_zone_id ': 'TextEdit', 'risk_level': 'TextEdit', 'risk_rank ': 'Hidden', 'source_description': 'Hidden', });
lyr_ChainagePoints_7.set('fieldImages', {'fid': 'TextEdit', 'chainage_id ': 'TextEdit', 'chainage': 'TextEdit', 'elevation_m': 'TextEdit', 'easting': 'Hidden', 'northing': 'Hidden', });
lyr_stream_outlets_1.set('fieldLabels', {'outlet_id': 'inline label - always visible', 'waterway_name': 'inline label - always visible', 'flow_status': 'inline label - always visible', });
lyr_RiversandCreeks_2.set('fieldLabels', {'waterway_id ': 'inline label - always visible', 'waterway_type': 'inline label - always visible', });
lyr_Culverts_3.set('fieldLabels', {'culvert_id': 'inline label - always visible', 'structure': 'inline label - always visible', 'length_m': 'inline label - always visible', 'diameter_m': 'inline label - always visible', 'condition': 'inline label - always visible', 'function': 'inline label - always visible', 'recommendation': 'inline label - visible with data', 'data_note': 'inline label - visible with data', });
lyr_RoadGradientandSlope_4.set('fieldLabels', {'segment_id': 'inline label - always visible', 'gradient_pct': 'inline label - always visible', 'terrain_class': 'inline label - always visible', 'chainage': 'inline label - always visible', 'segment_length_m': 'inline label - always visible', });
lyr_Road_centerline_5.set('fieldLabels', {'fid': 'hidden field', 'road_id': 'inline label - always visible', 'feature_type': 'inline label - always visible', 'length_m': 'inline label - always visible', });
lyr_InundationRiskZones_6.set('fieldLabels', {'risk_zone_id ': 'inline label - always visible', 'risk_level': 'inline label - always visible', });
lyr_ChainagePoints_7.set('fieldLabels', {'fid': 'hidden field', 'chainage_id ': 'inline label - always visible', 'chainage': 'inline label - always visible', 'elevation_m': 'inline label - always visible', });
lyr_ChainagePoints_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});