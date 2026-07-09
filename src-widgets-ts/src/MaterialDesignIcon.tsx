import React from 'react';

import type { RxWidgetInfo, VisRxWidgetProps } from '@iobroker/types-vis-2';

import { BaseRxData, RenderProps, VisWidget, card, createInfo } from './widgetUtils';

const attrs = [
    {
        name: 'common',
        label: 'group_common',
        fields: [
            {
                name: 'icon',
                label: 'icon',
                type: 'text',
                default: 'home',
            },
            {
                name: 'color',
                label: 'color',
                type: 'color',
                default: '#1976d2',
            },
            {
                name: 'size',
                label: 'size',
                type: 'text',
                default: '32px',
            },
        ],
    },
];

export default class MaterialDesignIcon extends VisWidget {
    constructor(props: VisRxWidgetProps) {
        super(props);
    }

    static getWidgetInfo(): RxWidgetInfo {
        return createInfo('tplMaterialDesignIcon', 'Icon', attrs);
    }

    getWidgetInfo(): RxWidgetInfo {
        return MaterialDesignIcon.getWidgetInfo();
    }

    renderWidgetBody(props: RenderProps): React.JSX.Element {
        super.renderWidgetBody(props);
        const data = this.state.rxData as BaseRxData;

        return card(
            <span
                className={`mdi mdi-${data.icon || 'home'}`}
                style={{
                    color: data.color || '#1976d2',
                    fontSize: data.size || '32px',
                    lineHeight: 1,
                }}
            />,
        );
    }
}
