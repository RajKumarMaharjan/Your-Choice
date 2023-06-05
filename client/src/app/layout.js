"use client"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { persistor, store } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";

 const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your-Choice</title>
      </head>
        <body className={inter.className}>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          {children}
          </PersistGate>
          </Provider>
          </body>
   
      
    </html>
  )
}
