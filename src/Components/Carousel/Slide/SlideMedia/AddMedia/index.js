import React, {Fragment} from 'react';
import {Mutation} from "react-apollo";
import gql from "graphql-tag";
import {WebMercatorViewport} from '@deck.gl/core';
import * as turf from '@turf/turf'

const ADD = gql`

mutation ($slide_id : Int, $type : String, $json : jsonb) {
  insert_slide_media(objects: {json: $json, slide_id: $slide_id, type: $type}) {
    returning {
      id
    }
  }
}

`;

const geoj= {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-3.0360031127929688,54.426320563641035],[-2.9781532287597656,54.426320563641035],[-2.9781532287597656,54.45167814495863],[-3.0360031127929688,54.45167814495863],[-3.0360031127929688,54.426320563641035]]]},"properties":{}}]};

export default ({viewState,  slide, refetch}) => {

    const test = (add) => {

        const viewport  = new WebMercatorViewport(viewState);
        //const center    = viewport.unproject([viewport.width/2,viewport.height/2])
        const tl    = viewport.unproject([0,0])
        const br    = viewport.unproject([viewport.width,viewport.width]) // make a square

        var pointA = turf.point(tl);
        var pointB = turf.point(br);
//create a bbox that extends to include all the features
        var bbx = turf.bbox(turf.featureCollection([pointA, pointB]));
        var pgn = turf.bboxPolygon(bbx);  //convert it to Polygon featu

        //code for making a square around center
        add({variables  : {slide_id : slide.id, type : 'Photo', json :
                    { "type": "FeatureCollection", "features": [ pgn]}}});
    }

    return <div>

        <Mutation
            onError={() => alert('Could not add slide photo')}
            onCompleted={() => refetch && refetch() }
            mutation={ADD}
        >

            {(add, {loading, error}) => {

                return <button onClick={ () => test(add) }>
                  Add slide photo ({slide.media.length})
                </button>
            }}
        </Mutation>
    </div>
}
