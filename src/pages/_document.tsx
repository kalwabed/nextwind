import Document, { NextScript, Html, DocumentContext, Main, Head } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="font-inter">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
