import plugin from 'tailwindcss/plugin';
import type { TTailwindPluginAPI } from './utilities/types';

import { contentUtilities } from './utilities/content';
import { easeUtilities } from './utilities/ease';
import { flexUtilties } from './utilities/flex';
import { heightUtilities } from './utilities/height';
import { marginUtilities } from './utilities/margin';
import { outlineUtilities } from './utilities/outline';
import { overflowUtilities } from './utilities/overflow';
import { paddingUtilities } from './utilities/padding';
import { radiusUtilities } from './utilities/radius';
import { strokeUtilities } from './utilities/stroke';
import { textAlignUtilities } from './utilities/text-align';
import { textWrapUtilities } from './utilities/text-wrap';
import { transitionUtilties } from './utilities/transition';
import { widthUtilities } from './utilities/width';

/**
 * This plugin adds a set of utility classes to Tailwind CSS for various CSS properties such as
 * content, ease, flex, height, margin, outline, overflow, padding, radius, stroke, text alignment,
 *  text wrapping, transition, and width. It uses the Tailwind plugin API to register these utilities.
 */
export const utilitiesPlugin = plugin((api: TTailwindPluginAPI) => {
  contentUtilities(api);
  easeUtilities(api);
  flexUtilties(api);
  heightUtilities(api);
  marginUtilities(api);
  outlineUtilities(api);
  overflowUtilities(api);
  paddingUtilities(api);
  radiusUtilities(api);
  strokeUtilities(api);
  textAlignUtilities(api);
  textWrapUtilities(api);
  transitionUtilties(api);
  widthUtilities(api);
});
