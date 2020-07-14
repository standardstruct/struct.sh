import App, { AppProps } from 'next/app';
import { ThemeProvider, ColorModeProvider, theme as t } from '@chakra-ui/core';
import ReactGA from 'react-ga';

import theme from '../../components/theme';

const StructApp = ({Component, pageProps}: AppProps) => {
    return (
        <ThemeProvider theme={t}>
            <ColorModeProvider>
                <Component {...pageProps}/>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default StructApp;