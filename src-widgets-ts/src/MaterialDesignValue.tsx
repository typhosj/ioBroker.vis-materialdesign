import React from 'react';

import type { RxWidgetInfo, VisRxWidgetProps, VisRxWidgetState } from '@iobroker/types-vis-2';

import { BaseRxData, RenderProps, VisWidget, card, createInfo, stateValue, valueTextAttrs } from './widgetUtils';

export default class MaterialDesignValue extends VisWidget {
    static adapter = 'vis-materialdesign';

    constructor(props: VisRxWidgetProps) {
        super(props);
    }

    static getWidgetInfo(): RxWidgetInfo {
        return createInfo('tplMaterialDesignValue', 'Value', valueTextAttrs);
    }

    getWidgetInfo(): RxWidgetInfo {
        return MaterialDesignValue.getWidgetInfo();
    }

    renderWidgetBody(props: RenderProps): React.JSX.Element {
        super.renderWidgetBody(props);
        const data = this.state.rxData as BaseRxData;
        const value = stateValue(this.state as VisRxWidgetState, data.oid);

        return card(
            <div style={{ color: data.color || 'inherit', fontSize: data.size || 'inherit' }}>
                {data.label ? <div style={{ fontSize: '0.85em', opacity: 0.72 }}>{data.label}</div> : null}
                <span>{data.prefix}</span>
                <span>{value ?? ''}</span>
                <span>{data.suffix}</span>
            </div>,
        );
    }
}
