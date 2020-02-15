import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>

        <Head>
        
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		
		<link rel="shortcut icon" href="img/fav.png"/>
		
		<meta name="author" content="colorlib"/>
		
		<meta name="description" content=""/>
		
		<meta name="keywords" content=""/>
		
		<meta charset="UTF-8"/>
		
		<title>Resume</title>

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet" /> 
			
			<link rel="stylesheet" href="css/linearicons.css" />
			<link rel="stylesheet" href="css/font-awesome.min.css"/>
			<link rel="stylesheet" href="css/bootstrap.css"/>
			<link rel="stylesheet" href="css/magnific-popup.css"/>
			<link rel="stylesheet" href="css/owl.carousel.css"/>
			<link rel="stylesheet" href="css/main.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="js/vendor/jquery-2.2.4.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
			<script src="js/vendor/bootstrap.min.js"></script>
			<script src="js/jquery.ajaxchimp.min.js"></script>
			<script src="js/jquery.magnific-popup.min.js"></script>
			<script src="js/parallax.min.js"></script>			
			<script src="js/owl.carousel.min.js"></script>			
			<script src="js/jquery.sticky.js"></script>

			<script src="js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument