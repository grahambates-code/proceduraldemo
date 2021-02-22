import React, { Fragment, useRef, useEffect, useState } from 'react';

import { Query } from "react-apollo";

import gql from "graphql-tag";

const GETMEDIA = gql`
               {
               
                media {
                  id
                  data
                  geo
                }
  
              }
`

const App = () => {

    return (
        <div>

                <Query query={GETMEDIA}  >
                    {({ loading, error, data, refetch  }) => {

                        if (loading || !data) return null

                        return <Fragment>
                                    <ul>
                                        {data.media.map(m => <li><img style={{width: '200px', height : 'auto'}} src={m.data.url}/></li>)}
                                    </ul>
                                </Fragment>

                    }}

                </Query>

        </div>
    );
}

export default App;
