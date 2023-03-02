import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const DIAGRAMS_NAME = [
  'Class Diagram',
  'Component Diagram',
  'Use Case Diagram',
  'Communication Diagram',
];

const links = [
  "/dashboard/class-diagram", 
  "/dashboard/component-diagram", 
  "/dashboard/use-case-diagram", 
  "/dashboard/communication-diagram"
];

const Diagrams = [...Array(4)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/diagram_${setIndex}.png`,
    name: DIAGRAMS_NAME[index],
    link: links[index]
  };
});

export default Diagrams;
