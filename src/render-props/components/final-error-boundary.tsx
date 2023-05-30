import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  render?: (error?: Error | null) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class FinalErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, error });
  }

  render() {
    const { hasError, error } = this.state;
    const { children, render } = this.props;

    if (hasError && !render) {
      return (
        <div>
          <p>An expected error has ocurrred.</p>
        </div>
      );
    }

    if (hasError && render) {
      return render(error);
    }

    return children;
  }
}
