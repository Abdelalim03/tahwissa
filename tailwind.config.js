/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "mainColor":"#42a7c3",
        "mainGray":"#F0F0F073",
        "secondColor":"#4475F2  "
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily:{
      'logo': ['Roboto'],
      'body': ['"Poppins"'],
      'display':["Lato"]
    },
    container:{
      center:true,
      padding:"2rem"
    }
  },
  plugins: [],
}
