import Document , { Html , Head, NextScript, Main} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"/>
                 
                    {/* COLOCAR FONTS */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@500;600;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript>
                      
                    </NextScript>
                </body>
            </Html>
        )
    }
}