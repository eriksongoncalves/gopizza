export default {
  fonts: {
    family: {
      dmSans: {
        regular: 'DMSans_400Regular' // TEXT
      },
      dmSerifDisplay: {
        regular: 'DMSerifDisplay_400Regular' // TITLE
      }
    }
  },
  colors: {
    background: '#F7F7F7',

    primary_900: '#B83341',
    primary_800: '#E03F50',
    primary_100: '#D16470',
    primary_50: '#FFABB3',

    secondary_900: '#572D31',
    secondary_500: '#7A6769',
    secondary_400: '#93797B',

    success_900: '#528F33',
    success_50: '#F7FFF9',

    alert_900: '#B27F00',
    alert_800: '#C5941A',
    alert_50: '#F3EFE5',

    shape: '#DCDCDC',
    title: '#FFFFFF',

    gradient: ['#B83341', '#E03F50']
  }
} as const;
