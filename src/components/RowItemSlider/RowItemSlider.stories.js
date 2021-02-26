import React from 'react';
import RowItemSlider, {imageProps} from './index';

export default {
  title: 'Components/RowItemSlider',
  component: RowItemSlider
}

const Template = args => <RowItemSlider {...args} />;

export const SimpleSlider = Template.bind({});
SimpleSlider.args = {
  items: imageProps
}