import React from 'react';

import type { RxWidgetInfo, VisRxWidgetProps, VisRxWidgetState } from '@iobroker/types-vis-2';

import { BaseRxData, RenderProps, VisWidget, card, commonAttrs, createInfo, setStateValue, stateValue } from './widgetUtils';

export default class MaterialDesignCheckbox extends VisWidget {
    constructor(props: VisRxWidgetProps) {
        super(props);
    }

    static getWidgetInfo(): RxWidgetInfo {
        return createInfo('tplMaterialDesignCheckbox', 'Checkbox', commonAttrs);
    }

    getWidgetInfo(): RxWidgetInfo {
        return MaterialDesignCheckbox.getWidgetInfo();
    }

    renderWidgetBody(props: RenderProps): React.JSX.Element {
        super.renderWidgetBody(props);
        const data = this.state.rxData as BaseRxData;
        const checked = stateValue(this.state as VisRxWidgetState, data.oid) === true;

        return card(
            <label style={{ alignItems: 'center', cursor: 'pointer', display: 'inline-flex', gap: 8 }}>
                <input checked={checked} onChange={() => setStateValue(this.props, data.oid, !checked)} type="checkbox" />
                <span>{data.label || data.oid || 'Checkbox'}</span>
            </label>,
        );
    }
}
