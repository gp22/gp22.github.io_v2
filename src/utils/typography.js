import Typography from 'typography'
import irvingTheme from 'typography-theme-irving'

irvingTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'body': {
    backgroundImage: 'linear-gradient(#223545, #1f4662)',
  },
  'a': {
    backgroundColor: 'rgba(187,239,253,0.3)',
    borderBottom: '2px solid rgba(187,239,253,0.3)',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '1rem',
    textDecoration: 'none',
    textIndent: '0',
    transition: 'all .1s',
  },
  'a:hover': {
    backgroundColor: 'rgba(187,239,253,0.4)',
    borderBottom: '2px solid rgba(187,239,253,0.4)',
    color: '#fff',
    cursor: 'pointer',
  }
})

const typography = new Typography(irvingTheme)

export default typography
