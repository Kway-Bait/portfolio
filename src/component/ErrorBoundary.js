import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in error boundary:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-[2%] h-screen bg-bgclr-0 text-txtclr-muted text-xl font-semibold">
                    <h1 className="text-2xl font-bold text-txtclr">An error occurred</h1>
                    <p>{this.state.error?.message}</p>
                    {process.env.NODE_ENV === 'development' && (
                        <details>
                            <summary>Stack Trace</summary>
                            <pre>{this.state.errorInfo?.componentStack}</pre>
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

