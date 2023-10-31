import type { Preview } from "@storybook/react";
import { reactRouterParameters, withRouter } from "storybook-addon-react-router-v6";
// import { withReactContext } from 'storybook-react-context';
// import { ThemeContext } from '../src/context/theme.context';


const preview: Preview = {
  decorators: [
    // withReactContext({
    //   Context: ThemeContext,
    //   initialState: { authenticated: false },
    // }),
    withRouter
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: '42' },
      },
      routing: { path: '/users/:userId' },
    }),
  },
};

export default preview;
