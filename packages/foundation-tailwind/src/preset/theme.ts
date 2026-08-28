import type { Config as TTailwindConfig } from 'tailwindcss';

import { SCREEN } from './constants/screen';
import {
  BACKGROUND_COLOR,
  FOREGROUND_COLOR,
  STROKE_COLOR,
} from './constants/color';
import { RADIUS } from './constants/radius';
import { EASE } from './constants/ease';
import { GROW } from './constants/grow';
import { TEXT_ALIGN } from './constants/text-align';
import { ASPECT } from './constants/aspect';
import { DURATION } from './constants/duration';
import { GAP } from './constants/gap';
import { PADDING } from './constants/padding';
import { MARGIN } from './constants/margin';
import { SIZE } from './constants/size';
import { VERTICAL_ALIGN } from './constants/vertical-align';
import { STROKE } from './constants/stroke';

type TTailwindCustomThemeConfig = TTailwindConfig['theme'];

export default {
  /* Override screen based on Builder */
  screens: SCREEN,

  /* Color Overrides */
  colors: FOREGROUND_COLOR,
  backgroundColor: BACKGROUND_COLOR,
  borderColor: STROKE_COLOR,

  borderRadius: RADIUS,
  transitionTimingFunction: EASE,

  flexGrow: GROW,

  textAlign: TEXT_ALIGN,
  verticalAlign: VERTICAL_ALIGN,

  borderWidth: STROKE,

  extend: {
    // Adds 1:1, 16:9, 2:1, 4:3, 4:5, and 5:4
    aspectRatio: ASPECT,

    transitionDuration: DURATION,

    gap: GAP,
    padding: PADDING,
    margin: MARGIN,

    width: SIZE,
    height: SIZE,
    minWidth: SIZE,
    maxWidth: SIZE,
    minHeight: SIZE,
    maxHeight: SIZE,
  },
} as TTailwindCustomThemeConfig;
