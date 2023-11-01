import React from 'react';
import { Background, LoadingText } from './Styles';
import spinner from '../assets/spinner.gif';

export const Loading = () => {
    return (
        <Background>
            <img src={spinner} alt="Loading" width="10%" />
        </Background>
    );
};

export default Loading;
