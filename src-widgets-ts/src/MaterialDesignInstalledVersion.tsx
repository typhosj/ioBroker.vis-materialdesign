import React from 'react';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import { RenderProps, VisWidget, createInfo } from './widgetUtils';

export default class MaterialDesignInstalledVersion extends VisWidget {
    private version = 'x.x.x';
    static getWidgetInfo(): RxWidgetInfo { return { ...createInfo('tplVis2-materialdesign-Installed-Version', 'Installed Version', [{ name: 'common', fields: [{ name: 'debug', label: 'debug', type: 'checkbox' }] }]), visPrev: '<div id="prev_tplVis-materialdesign-Installed-Version" style="position:relative;padding:4px"><div class="vis-widget_prev materialdesign-installed-version" style="width:120px;height:22px;text-align:center"><div class="materialdesign-version-container"><div class="materialdesign-version-content" style="background:#5a5a5a;border-radius:4px 0 0 4px">installed</div><div class="materialdesign-version-content" style="background:#45b31b;border-radius:0 4px 4px 0">x.x.x</div></div></div></div>', visDefaultStyle: { width: 120, height: 20 } }; }
    getWidgetInfo(): RxWidgetInfo { return MaterialDesignInstalledVersion.getWidgetInfo(); }
    componentDidMount(): void { super.componentDidMount(); void this.props.context?.socket?.getObject('system.adapter.vis-materialdesign').then(obj => { this.version = String(obj?.common?.installedVersion || obj?.common?.version || 'unknown'); this.forceUpdate(); }).catch(() => undefined); }
    renderWidgetBody(props: RenderProps): React.JSX.Element { super.renderWidgetBody(props); return <div className="materialdesign-widget materialdesign-installed-version" style={{ height: '100%', textAlign: 'center', width: '100%' }}><div className="materialdesign-version-container"><div className="materialdesign-version-content" style={{ background: '#5a5a5a', borderRadius: '4px 0 0 4px' }}>installed</div><div className="materialdesign-version-content" style={{ background: '#45b31b', borderRadius: '0 4px 4px 0' }}>{this.version}</div></div></div>; }
}
