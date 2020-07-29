import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Banner, Gallery, Page } from '../../common';
import NavigationBar from '../../navigation-bar';
import theme from '../../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <NavigationBar>
          <NavigationBar.Item>
            Item 1
          </NavigationBar.Item>
          <NavigationBar.Item>
            Item 2
          </NavigationBar.Item>
        </NavigationBar>
        <Banner/>
        <Gallery>
          <Gallery.Item>Test</Gallery.Item>
          <Gallery.Item>Test</Gallery.Item>
          <Gallery.Item>Test</Gallery.Item>
        </Gallery>
      </Page>
    </ThemeProvider>
  );
}

export default App;
