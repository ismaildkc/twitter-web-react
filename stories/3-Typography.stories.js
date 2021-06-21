import React from 'react';

import TitleText from "../components/text-title"

export default {
  title: 'Typography',
};


export const Title = () => (
  <div>
    <TitleText>Hellow World!</TitleText>
    <TitleText bold = {false} >Hellow World!</TitleText>
  </div>
);