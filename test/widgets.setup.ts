class TestVisRxWidget {
    static t(value: string): string {
        return value;
    }

    render(): null {
        return null;
    }
}

Object.defineProperty(window, 'visRxWidget', { configurable: true, value: TestVisRxWidget });

// jsdom ships no <canvas> implementation, so its getContext() logs a
// "Not implemented" error the moment chart.js (pulled in by the chart widgets)
// touches a canvas. No test asserts on canvas pixels, so replace getContext with
// a no-op stub to keep the test output clean.
if (typeof HTMLCanvasElement !== 'undefined') {
    HTMLCanvasElement.prototype.getContext = (() => null) as unknown as HTMLCanvasElement['getContext'];
}
