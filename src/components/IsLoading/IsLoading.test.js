// Modules
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/themes'; 

// Component
import IsLoading from './IsLoading';

describe('IsLoading', () => {
    const wrapper = mount(<IsLoading />);

    test('It exist', () => {
        expect(wrapper).toExist();
    })

    test('Have props', () => {
        expect(wrapper).toHaveProp('centerIcon');
        expect(wrapper).toHaveProp('isLoading');
        expect(wrapper).toHaveProp('color');
    })

    it('Check props', () => {
        expect(wrapper.props().isLoading).toEqual(false);
        expect(wrapper.props().centerIcon).toEqual(true);
        expect(wrapper.props().color).toEqual('primary');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <IsLoading
                    isLoading={true}
                    centerIcon={false}
                    color="primary"
                />
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })


})