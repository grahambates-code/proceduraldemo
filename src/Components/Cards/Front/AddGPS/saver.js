import React, {Fragment} from 'react'
import {Mutation} from "react-apollo";
import gql from "graphql-tag";

const SAVE_TRIP_GEOJSON = gql`

mutation MyMutation($id : Int, $geojson : jsonb) {

  update_trip(where: {id: {_eq: $id}}, _set: {geojson: $geojson}) {
    returning {
      id
    }
  }
}
`;

export default ({trip, children}) => <Mutation
    onError={() => alert('Could not save trip')}
    mutation={SAVE_TRIP_GEOJSON}
    //onCompleted={() => refetch()}
>

    {(updateLandscape, {loading, error}) => {

        return <Fragment>
            {children(updateLandscape, loading, error)}
        </Fragment>
    }}
</Mutation>
