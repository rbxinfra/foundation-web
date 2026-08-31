import type { Preview } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import {
  Title,
  Subtitle,
  Description,
  Controls,
  Stories,
  Primary,
} from '@storybook/addon-docs/blocks';

import { useFoundationTheme } from '@rbx/foundation-ui';

import './preview.css';

type ThemeMode = 'light' | 'dark' | 'system';

const ThemeRoot = ({
  theme,
  children,
}: {
  theme: ThemeMode;
  children: ReactNode;
}) => {
  useFoundationTheme(theme, document.documentElement);

  return <div className='storybook-theme-root'>{children}</div>;
};

const preview = {
  globalTypes: {
    theme: {
      description: 'Foundation theme mode',
      defaultValue: 'system',
      toolbar: {
        icon: 'paintbrush',
        items: ['light', 'dark', 'system'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeRoot theme={context.globals.theme}>
        <Story />
      </ThemeRoot>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      codePanel: true,

      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
} satisfies Preview;

export default preview;
