import React, { Suspense, useCallback, useMemo, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppInnerContainer, AppOuterContainer } from './styled';
import { AppHeader } from './Components/Header';
import { EntryScreen } from './Components/EntryScreen';
import { MainScreenBottomBar } from './Components/MainScreenBottomBar';
import { DesktopLayout } from './Components/Layouts/DesktopLayout';

function App() {
  return (
    <AppOuterContainer className="app">
      <div className='animation'>
        <Suspense fallback={<div>Loading</div>}>
          <DesktopLayout />
        </Suspense>
      </div>
    </AppOuterContainer>
  );
}

export default App;
