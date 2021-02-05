import React, {useState, useEffect} from 'react'
import './index.less'
import {Mutation} from "react-apollo";
import Create from './../../Create'
import gql from "graphql-tag";

const SAVE_SLIDE = gql`

mutation( $slide_id : Int,  $text : String){
                update_slides(where: {id: {_eq: $slide_id}}, _set: {text: $text}) {
                    returning {
                                id
                              }
                    }
                }
`;

export default ({card, slide, refetch}) => {

    const [edit, setEdit] = useState(false);

    return <div className={'slide'} >

        {!edit && slide.text}

        {edit && <Mutation onError={() => alert('Could not save title')} mutation={SAVE_SLIDE} >

            {(updateSlide, {loading, error}) => {

                return <div contentEditable={edit} suppressContentEditableWarning={true} onBlur={(e) => updateSlide({
                    variables: {
                        text: e.currentTarget.textContent,
                        slide_id: slide.id
                    }
                })}
                           contentEditable suppressContentEditableWarning={true}>{slide.text}</div>

            } }

        </Mutation> }

        <br/>
        <br/>

        <button onClick={() => setEdit(true)}>Edit</button>
        <Create card={card} refetch={refetch}/>
    </div>

}
