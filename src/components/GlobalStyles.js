import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
:root {
--main: #8f39ff;
scrollbar-color: #4949495f #27272760;
scrollbar-width: thin;
}
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    &::-webkit-scrollbar {
        width:0.6rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color:#4949495f;
        border-radius:5px;
    }
    &::-webkit-scrollbar-track {
        background: #27272760;
    }
    @media(max-width:1024px) {
            font-size:75%;
        }
    
}


body {
    width:100%;
    background: #000000;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    
}



::selection {
    background:transparent;
    color:var(--main);
}

button, input {
    border:none;
   
}
button {
    outline:none;
    &:focus {
        outline:none;
    }
}

a {
    text-decoration:none;
    color:white;
    &:hover {
        color:var(--main);
        transition: 350ms ease;
    }
}

i{
    &:hover {
        color: var(--main);
        transition: 350ms ease;
    }
}

li {
    list-style-type:none;
}

`;

export default GlobalStyles;
