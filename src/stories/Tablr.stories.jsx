import {Tablr} from '../Tablr';

export default {
    title : 'Tablr-A customize table',
    component: Tablr,
    argTypes: {
        rows: { control: '' },
        headers: { control: '' }
      },
}
const Template = args =><Tablr {...args}/>

export const Default = Template.bind({});
Default.args = {
    rows: [
      ['(1,1)', '(1,2)', '(1,3)', '(1,4)', '(1,5)'],
      ['(2,1)', '(2,2)', '(2,3)', '(2,4)', '(2,5)'],
      ['(3,1)', '(3,2)', '(3,3)', '(3,4)', '(3,5)'],
      ['(4,1)', '(4,2)', '(4,3)', '(4,4)', '(4,5)'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
  };