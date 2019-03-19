// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import Icon from '../Icon/Icon';

const RankingItemsWrapper = styled('div')`
    display: block;
    background: #ffffff;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 2px 17px 31px -24px rgba(0, 0, 0, 0.3);
    display: flex;
`

const RankingItemsLeft = styled('div')`
    flex-basis: 60%;
    display: flex;
    align-items: center;
    padding: 20px;
`

const RankingItemsRight = styled('div')`
    flex-basis: 40%;
    display: flex;
    align-items: center;
    border-left: 1px solid #cccccc;
    padding: 20px;
    justify-content: space-around;
`

const NumberGroup = styled('span')`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background: #000000;
    border-radius: 100%;
    position: relative;
    color: #ffffff;
    z-index: 2;
    width: 30px;
    height: 30px;
    svg {
        position: absolute;
        z-index: -1;
        width: 36px;
        height: 36px;
    }
`

const InfoWrapperLeft = styled('div')``

const InfoWrapperRight = styled('div')`
    text-align: center;
`

const InfoTitle = styled('div')`
    font-size: 14px;
    letter-spacing: .01em;
`

const InfoDescription = styled('div')`
    text-transform: uppercase;
    color: #8C97A8;
    font-size: 10px;
`

const IconWrapper = styled('div')``

const RankingItems = ({ number, title, descriptionOne, value, descriptionTwo, iconClick }) => (
    <RankingItemsWrapper>
        <RankingItemsLeft>
            <NumberGroup>
                <Icon tag="svg" />
                {number}
            </NumberGroup>
            <InfoWrapperLeft>
                <InfoTitle>
                    {title}
                </InfoTitle>
                <InfoDescription>
                    {descriptionOne}
                </InfoDescription>
            </InfoWrapperLeft>
        </RankingItemsLeft>
        <RankingItemsRight>
            <InfoWrapperRight>
                <InfoTitle>
                    R$ {value}
                </InfoTitle>
                <InfoDescription>
                    {descriptionTwo}
                </InfoDescription>
            </InfoWrapperRight>
            <IconWrapper>
                <Icon tag={iconClick} />
            </IconWrapper>
        </RankingItemsRight>
    </RankingItemsWrapper>
)

export default RankingItems;