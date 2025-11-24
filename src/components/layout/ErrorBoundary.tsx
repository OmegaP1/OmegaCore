'use client';

import React, { ReactNode, ReactElement } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactElement;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component to catch and handle errors in child components
 * Prevents entire app from crashing if a component fails
 */
class ErrorBoundary extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error) {
    console.error('Error caught by boundary:', error);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-dark">
            <div className="text-center px-4">
              <h1 className="text-4xl font-bold text-accent mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-white/80 text-lg mb-8">
                We apologize for the inconvenience. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg transition-all"
              >
                Refresh Page
              </button>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-white/60 hover:text-white">
                    Error Details (Development Only)
                  </summary>
                  <pre className="mt-4 p-4 bg-medium rounded text-white/80 overflow-auto text-sm">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
