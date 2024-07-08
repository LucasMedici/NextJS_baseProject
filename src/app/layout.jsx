
"use client"
import Head from 'next/head'

import '../styles/globals.css'
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from '@/functions/check-is-public-route';
import PrivateRoute from '@/components/PrivateRoute';


export default function RootLayout({children})
{

  // lógica para verificar se a rota é pública
  const pathnameRoute = usePathname();
  const isPublicRoute = checkIsPublicRoute(pathnameRoute)


  return (
    <html> 
      <Head>Next teste</Head>
      <body style={{background:'#D9D9D9', margin: 0, padding: 0}}>

        {/* se a rota é publica exibo o children, se não, exibo meu componente de PrivateRoute, que automaticamente vai tirar tudo e mandar pra Home */}
        {isPublicRoute && children} 
        {!isPublicRoute && <PrivateRoute>{children}</PrivateRoute>}
        
      </body>
    </html>
  );
}