import { describe, expect, it } from 'vitest';
import { circularGeometry } from './MaterialDesignProgressCircular';

describe('circularGeometry', () => {
    it('falls back to the widget style size when no explicit size is set', () => {
        const { size } = circularGeometry({}, 50, { width: 120, height: 90 });
        expect(size).toBe(90);
    });

    it('prefers an explicit progressCircularSize over the widget style', () => {
        const { size } = circularGeometry({ progressCircularSize: 40 }, 50, { width: 120, height: 90 });
        expect(size).toBe(40);
    });

    it('derives radius from size and stroke width', () => {
        const { radius, stroke } = circularGeometry({ progressCircularSize: 100, progressCircularWidth: 10 }, 0, {});
        expect(stroke).toBe(10);
        expect(radius).toBe(45); // 100/2 - 10/2
    });

    it('never lets radius drop to zero or below', () => {
        const { radius } = circularGeometry({ progressCircularSize: 2, progressCircularWidth: 10 }, 0, {});
        expect(radius).toBe(1);
    });

    it('computes dashOffset from percent for determinate progress', () => {
        const { circumference, dashOffset } = circularGeometry({ progressCircularSize: 100, progressCircularWidth: 4 }, 100, {});
        expect(dashOffset).toBeCloseTo(0, 10);
        const half = circularGeometry({ progressCircularSize: 100, progressCircularWidth: 4 }, 50, {});
        expect(half.dashOffset).toBeCloseTo(circumference / 2, 10);
    });

    it('uses a fixed quarter-turn dashOffset for indeterminate progress regardless of percent', () => {
        const { circumference, dashOffset } = circularGeometry({ progressCircularSize: 100, progressCircularWidth: 4, progressIndeterminate: true }, 90, {});
        expect(dashOffset).toBeCloseTo(circumference * 0.25, 10);
    });
});
