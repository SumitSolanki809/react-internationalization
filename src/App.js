import React, { Suspense } from 'react';
import HelloWorld from './components/HelloWorld'
import MyName from './components/MyName'
import ChangeLnguage from './components/ChangeLanguage'

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HelloWorld />
      <MyName />
      <ChangeLnguage />
    </Suspense>
  );
}
