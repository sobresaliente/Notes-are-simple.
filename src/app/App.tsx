import './styles/index.scss';

import classNames from 'shared/lib/classNames';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

import Sidebar from 'widgets/Sidebar/ui/Sidebar';
import { Suspense } from 'react';
import { ErrorBoundary } from './providers/ErrorBoundary';

function App() {
  const { theme } = useTheme();

  return (
    <Suspense fallback="loading">
      <ErrorBoundary>
        <div className={classNames('app', {}, [theme])}>
          <Navbar />
          <div className="main-content">
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
}
export default App;
