import { create } from 'storybook/theming';
import robloxLogo from '../static/media/logo.svg';

export default create({
  base: 'dark',
  brandTitle: 'Roblox Foundation Storybook',
  brandUrl: 'https://foundation.rbxlabs.net',
  brandImage: robloxLogo,
  brandTarget: '_self',
});
