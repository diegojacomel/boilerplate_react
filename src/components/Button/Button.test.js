// Modules
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/themes'; 

// Component
import Button from './Button';

describe('Button', () => {
    const wrapper = shallow(<Button>Click here</Button>);

    test('It exist', () => {
        expect(wrapper.find('#testButton')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testButton');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testButton')).toHaveDisplayName('styled.button');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testButton')).toMatchSelector('#testButton');
    })

    test('Have props', () => {
        expect(wrapper.find('#testButton')).toHaveProp('type');
        expect(wrapper.find('#testButton')).toHaveProp('color');
        expect(wrapper.find('#testButton')).toHaveProp('outline');
        expect(wrapper.find('#testButton')).toHaveProp('size');
        expect(wrapper.find('#testButton')).toHaveProp('rounded');
        expect(wrapper.find('#testButton')).toHaveProp('block');
        expect(wrapper.find('#testButton')).toHaveProp('disabled');
        expect(wrapper.find('#testButton')).toHaveProp('onClick');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Button>
                    Click here
                </Button>
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})