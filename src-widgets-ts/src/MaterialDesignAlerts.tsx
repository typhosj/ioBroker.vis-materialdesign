import React from 'react';
import type { RxWidgetInfo, VisRxWidgetState } from '@iobroker/types-vis-2';
import { renderIcon } from './MaterialDesignButtons';
import { RenderProps, VisWidget, createInfo, setStateValue, stateValue } from './widgetUtils';

type Alert = { text?: string; icon?: string; backgroundColor?: string; borderColor?: string; iconColor?: string; fontColor?: string };
type Data = Record<string, unknown> & { oid?: string };
const s = (value: unknown, fallback = ''): string => value === undefined || value === null || value === '' || value === 'null' ? fallback : String(value);
const n = (value: unknown, fallback = 0): number => value === undefined || value === null || value === '' || !Number.isFinite(Number(value)) ? fallback : Number(value);
const b = (value: unknown, fallback = false): boolean => value === undefined || value === null || value === '' ? fallback : value === true || value === 'true' || value === 1 || value === '1';
function parse(value: unknown): Alert[] | null { try { const result: unknown = JSON.parse(s(value)); return Array.isArray(result) ? result as Alert[] : null; } catch { return null; } }
const attrs: RxWidgetInfo['visAttrs'] = [
    { name: 'common', fields: [{ name: 'oid', label: 'oid', type: 'id' }, { name: 'showMaxAlerts', label: 'showMaxAlerts', type: 'number', default: 3 }, { name: 'minScreenResolution', label: 'minScreenResolution', type: 'number' }, { name: 'debug', label: 'debug', type: 'checkbox' }] },
    { name: 'alertLayout', label: 'group_alertLayout', fields: [{ name: 'alertLayouts', label: 'alertLayouts', type: 'select', options: ['normal', 'outlined', 'tile'], default: 'normal' }, { name: 'alertDense', label: 'alertDense', type: 'checkbox', default: true }, { name: 'alertElevation', label: 'alertElevation', type: 'slider', min: 0, max: 24, step: 1, default: 1 }, { name: 'alertMarginBottom', label: 'alertMarginBottom', type: 'number', default: 16 }, { name: 'alertBorderLayout', label: 'alertBorderLayout', type: 'select', options: ['none', 'top', 'right', 'left', 'bottom'], default: 'none' }, { name: 'alertFontSize', label: 'alertFontSize', type: 'number' }, { name: 'alertFontFamily', label: 'alertFontFamily', type: 'fontname' }, { name: 'alertIconSize', label: 'alertIconSize', type: 'number' }, { name: 'closeIcon', label: 'closeIcon', type: 'icon', default: 'close-circle-outline' }, { name: 'closeIconColor', label: 'closeIconColor', type: 'color' }, { name: 'closeIconPressColor', label: 'closeIconPressColor', type: 'color' }] },
];
export default class MaterialDesignAlerts extends VisWidget {
    static getWidgetInfo(): RxWidgetInfo { return { ...createInfo('tplVis2-materialdesign-Alerts', 'Alerts', attrs), visPrev: '<img src="widgets/materialdesign/img/prev_alerts.png"></img>', visDefaultStyle: { width: 150, height: 38 } }; }
    getWidgetInfo(): RxWidgetInfo { return MaterialDesignAlerts.getWidgetInfo(); }
    renderWidgetBody(props: RenderProps): React.JSX.Element {
        super.renderWidgetBody(props);
        const data = this.state.rxData as unknown as Data;
        const raw = stateValue(this.state as VisRxWidgetState, s(data.oid));
        const parsed = parse(raw);
        const alerts = parsed ?? (raw === undefined || raw === null || raw === '' ? [] : [{ text: 'Error in JSON string', borderColor: 'red', icon: 'alert-box', iconColor: 'red' }]);
        const shown = n(data.showMaxAlerts) > 0 ? alerts.slice(0, n(data.showMaxAlerts)) : alerts;
        const close = (index: number): void => { if (!parsed) return; parsed.splice(index, 1); setStateValue(this.props, s(data.oid), JSON.stringify(parsed)); };
        const border = s(data.alertBorderLayout);
        return <div className="materialdesign-widget materialdesign-alerts" style={{ height: '100%', overflow: 'visible', pointerEvents: 'none', width: '100%' }}><style>{`@media (max-width:${Math.max(0, n(data.minScreenResolution) - 1)}px){.materialdesign-alerts{display:none!important}}`}</style><div className="materialdesign-vuetify-alerts" style={{ pointerEvents: 'auto', width: '100%' }}>{shown.map((alert, index) => <div className={`v-alert ${s(data.alertLayouts, 'normal') === 'outlined' ? 'v-alert--outlined' : ''} ${s(data.alertLayouts) === 'tile' ? 'v-alert--tile' : ''}`} key={index} style={{ alignItems: 'center', background: s(alert.backgroundColor), borderBottom: border === 'bottom' ? `3px solid ${s(alert.borderColor)}` : undefined, borderLeft: border === 'left' ? `3px solid ${s(alert.borderColor)}` : undefined, borderRight: border === 'right' ? `3px solid ${s(alert.borderColor)}` : undefined, borderTop: border === 'top' ? `3px solid ${s(alert.borderColor)}` : undefined, boxShadow: n(data.alertElevation) ? `0 ${n(data.alertElevation) / 2}px ${n(data.alertElevation)}px rgba(0,0,0,.24)` : undefined, display: 'flex', fontFamily: s(data.alertFontFamily, 'inherit'), fontSize: n(data.alertFontSize, 16), marginBottom: n(data.alertMarginBottom, 16), minHeight: b(data.alertDense, true) ? 32 : 48, padding: b(data.alertDense, true) ? '6px 8px' : '16px' }}><span className="materialdesign-v-alerts-prepend" style={{ display: 'inline-flex', marginRight: 8 }}>{alert.icon ? renderIcon(alert.icon, s(alert.iconColor), n(data.alertIconSize, 24), !!alert.iconColor) : null}</span><label className="materialdesign-v-alert-text" style={{ color: s(alert.fontColor), flex: 1 }} dangerouslySetInnerHTML={{ __html: s(alert.text) }} /><button className="materialdesign-icon-button v-alert-materialdesign-icon-button" onClick={() => close(index)} style={{ background: 'transparent', border: 0, cursor: 'pointer', height: 30, width: 30 }}>{renderIcon(s(data.closeIcon, 'close-circle-outline'), s(data.closeIconColor), 20, !!data.closeIconColor)}</button></div>)}</div></div>;
    }
}
