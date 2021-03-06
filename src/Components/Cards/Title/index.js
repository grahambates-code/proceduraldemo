import React, {useState, useEffect, Fragment} from 'react'
import './index.less'
import Frame from "../Front/Frame";
import TextareaAutosize from 'react-textarea-autosize';
import {Mutation} from "react-apollo";
import gql from "graphql-tag";
import {annotate} from "rough-notation"
const SAVE_TITLE = gql`

mutation( $card_id : Int,  $title : String){
                update_cards(where: {id: {_eq: $card_id}}, _set: {title: $title}) {
                    returning {
                                id
                              }
                    }
                }
`;

const SAVE_TEXT = gql`

mutation( $card_id : Int,  $text : String){
                update_cards(where: {id: {_eq: $card_id}}, _set: {text: $text}) {
                    returning {
                                id
                              }
                    }
                }
`;


export default ({card, i}) => {

    const [seconds, setSeconds] = useState(170);

    return <div className={'Title'}>

         <Frame width={350}  height={seconds} >

                     <Mutation onError={() => alert('Could not save title')} mutation={SAVE_TITLE} >

                         {(updateTitle, {loading, error}) => {

                             return <h1 onBlur={(e) => updateTitle({
                                 variables: {
                                     title: e.currentTarget.textContent,
                                     card_id: card.id
                                 }
                             })}
                                 contentEditable suppressContentEditableWarning={true}>
                                 {card.title}
                             </h1>

                         } }

                     </Mutation>

                    </Frame>

    </div>

}
