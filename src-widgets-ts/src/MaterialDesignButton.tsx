import React from 'react';

import type { RxWidgetInfo, VisRxWidgetProps } from '@iobroker/types-vis-2';

import { BaseRxData, RenderProps, VisWidget, card, commonAttrs, createInfo, setStateValue } from './widgetUtils';

const attrs = [
    ...commonAttrs,
    {
        name: 'action',
        fields: [
            {
                name: 'value',
                label: 'value',
                type: 'text',
                default: 'true',
            },
        ],
    },
];

export default class MaterialDesignButton extends VisWidget {
    static adapter = 'vis-materialdesign';

    constructor(props: VisRxWidgetProps) {
        super(props);
    }

    static getWidgetInfo(): RxWidgetInfo {
        return createInfo('tplMaterialDesignButton', 'Button', attrs);
    }

    getWidgetInfo(): RxWidgetInfo {
        return MaterialDesignButton.getWidgetInfo();
    }

    renderWidgetBody(props: RenderProps): React.JSX.Element {
        super.renderWidgetBody(props);
        const data = this.state.rxData as BaseRxData;

        return card(
            <button
                type="button"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 0,
                    borderRadius: 4,
                    background: '#1976d2',
                    color: '#fff',
                    cursor: 'pointer',
                    padding: '8px 12px',
                }}
                onClick={() => setStateValue(this.props, data.oid, data.value)}
            >
                {data.label || 'Button'}
            </button>,
        );
    }
}
