import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html lang="fr">
        <Head>
          <title>ASTech - L'incubateur des affaires sociales</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/etalab/template.data.gouv.fr/master/src/main.css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
