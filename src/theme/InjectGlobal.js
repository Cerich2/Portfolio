import { createGlobalStyle } from 'styled-components';

const Normalizer = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap');

    *, html, body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        background: #182747;
    }
`;

export default Normalizer;
