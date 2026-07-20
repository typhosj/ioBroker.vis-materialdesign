import { describe, it, expect } from 'vitest';
import committed from './groupLabels.json';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { build } = require('../../../scripts/gen-group-labels.cjs');

// Guards the committed runtime subset (used by widgetUtils' group-header bridge) against drift
// from the admin i18n. If this fails, run `node scripts/gen-group-labels.cjs` (or `npm run build`).
describe('generated group labels', () => {
    it('matches the current admin i18n group_* keys', () => {
        expect(committed).toStrictEqual(build());
    });
});
