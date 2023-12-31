import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import IngredientsMeasures from '../Meals/IngredientsMeasures';

const Accordeon = ({info}) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='quicksand fw-bold text-success'>
            Ingrédients et mesures
        </Accordion.Header>
        <Accordion.Body>
            <IngredientsMeasures info={info}></IngredientsMeasures>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='quicksand'> Les instructions</Accordion.Header>
        <Accordion.Body className='quicksand'>
            {info.strInstructions}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Accordeon