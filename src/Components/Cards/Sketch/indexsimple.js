import React from "react";
import ReactDOM from "react-dom";
import DeckGL from "deck.gl";
import {
    EditableGeoJsonLayer,
    DrawLineStringMode,
    DrawPolygonMode,
    TransformMode
} from "nebula.gl";
import { StaticMap } from "react-map-gl";
import './index.less'

const MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiZ2Vvcmdpb3MtdWJlciIsImEiOiJjanZidTZzczAwajMxNGVwOGZrd2E5NG90In0.gdsRu_UeU_uPi9IulBruXA";

const initialViewState = {
    latitude:  54.420188471271466,
    longitude:   -3.2191588046293003,
    zoom: 12
};

function GeometryEditor() {
    const [features, setFeatures] = React.useState({
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -3.2191588046293003,
                                54.420188471271466
                            ],
                            [
                                -2.872946083689777,
                                54.420188471271466
                            ],
                            [
                                -2.872946083689777,
                                54.62113306288732
                            ],
                            [
                                -3.2191588046293003,
                                54.62113306288732
                            ],
                            [
                                -3.2191588046293003,
                                54.420188471271466
                            ]
                        ]
                    ]
                },
                "properties": {}
            }
        ]
    });
    const [selectedFeatureIndexes] = React.useState([0]);

    const layer = new EditableGeoJsonLayer({
        // id: "geojson-layer",
        data: features,
        mode : TransformMode,
        selectedFeatureIndexes,

        onEdit: ({ updatedData }) => {
            setFeatures(updatedData);
        }
    });

    return (
        <div className="sketch-card">
            <DeckGL
                initialViewState={initialViewState}
                controller={{
                    doubleClickZoom: false
                }}
                layers={[layer]}

            >
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
            </DeckGL>

        </div>
    );
}

export default GeometryEditor;
