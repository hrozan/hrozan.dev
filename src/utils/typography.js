import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  bodyFontFamily: ["Ubuntu"],
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: [
        '700',
      ],
    },
    {
      name: 'Fira Code',
      styles: [
        '700',
      ],
    },
  ],
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
