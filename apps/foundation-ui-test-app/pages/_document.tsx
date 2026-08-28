import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class TestAppDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/* Gets rid of the pesky 8px margin that browsers add for some reason */}
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
