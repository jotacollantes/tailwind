/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {

  // screens:{
  //   sm:"400px",
  //   md:"600px",
  //   lg:"900px"
  // },

  extend: {},
};
export const plugins = [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms')
];
export const presets=[require('./presets/mypreset')]
//export const darkMode='class' //Modo manual usando el tag <html lang="en" class="dark">
export const darkMode='media' //COnfigurado automaticamente con el modo dark del sistema operativo configurado
