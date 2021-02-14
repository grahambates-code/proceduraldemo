import React, {useState, useEffect, Fragment} from 'react';
import gql from "graphql-tag";
import {Mutation} from "react-apollo";

const INSERT_SLIDE = gql`
    mutation MyMutation($card_id : Int) {
    
      insert_slides(objects: {card_id: $card_id}) {
        returning {
          id
        }
      }
    }
`;

export default function ({card, refetch, slideIndex, setSlideIndex}) {



    return (

        <div>

            <Mutation
                onError={() => alert('Could not add slide')}
                onCompleted={()=> {refetch(); setSlideIndex(slideIndex + 1) }}
                mutation={INSERT_SLIDE}
            >

                {(add, {loading, error}) => {

                    return <Fragment>
                        <button onClick={() => {add({variables : {card_id : card.id}})}}>New slide</button>
                    </Fragment>

                }}
            </Mutation>


        </div>

    );
}
