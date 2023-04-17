import { proxy } from "valtio";

// similaire a react context, toutes les variables definies ici seront accessibles dans tout le projet
const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;