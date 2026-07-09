import React from 'react';

import type { RxWidgetInfo, VisRxWidgetProps } from '@iobroker/types-vis-2';

import { PressState, RenderProps, VisWidget, createInfo, parseActionValue, setStateValue, stateValue } from './widgetUtils';

type ButtonKind = 'navigation' | 'link' | 'state' | 'multiState' | 'addition' | 'toggle' | 'slider';
type ButtonLayout = 'default' | 'vertical' | 'icon';

interface ButtonData {
    oid?: string;
    nav_view?: string;
    href?: string;
    openNewWindow?: boolean;
    value?: string;
    valueOff?: string;
    valueOn?: string;
    readOnly?: boolean;
    pushButton?: boolean;
    countOids?: number;
    minmax?: string;
    buttontext?: string;
    labelTrue?: string;
    labelColorFalse?: string;
    labelColorTrue?: string;
    buttonStyle?: 'text' | 'raised' | 'unelevated' | 'outlined';
    toggleType?: 'boolean' | 'value';
    stateIfNotTrueValue?: 'on' | 'off';
    sliderOnly?: boolean;
    sliderWidth?: number;
    sliderThikness?: number;
    showInFront?: boolean;
    showAlways?: boolean;
    foregroundColor?: string;
    backgroundColor?: string;
    colorize?: boolean;
    colorizeFactor?: number;
    angleOffset?: number;
    angleArc?: number;
    enable?: boolean;
    widgetId?: string;
    prepandText?: string;
    appendText?: string;
    unit?: string;
    valueLabelMin?: string;
    valueLabelMax?: string;
    imageValueWidgetLink?: string;
    imageColorValueWidgetLink?: string;
    generateHtmlControl?: boolean;
    debug?: boolean;
    mdwButtonPrimaryColor?: string;
    mdwButtonSecondaryColor?: string;
    mdwButtonColorPress?: string;
    colorBgFalse?: string;
    colorBgTrue?: string;
    colorPress?: string;
    image?: string;
    imageTrue?: string;
    imageColor?: string;
    imageTrueColor?: string;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    iconHeight?: number;
    labelWidth?: number;
    alignment?: 'flex-start' | 'center' | 'flex-end';
    distanceBetweenTextAndImage?: number;
    textFontSize?: number;
    textFontFamily?: string;
    lockEnabled?: boolean;
    autoLockAfter?: number;
    lockIcon?: string;
    lockIconTop?: number;
    lockIconLeft?: number;
    lockIconSize?: number;
    lockIconColor?: string;
    lockIconBackground?: string;
    lockBackgroundSizeFactor?: number;
    lockFilterGrayscale?: number;
    clickSoundPlay?: boolean;
    clickSoundVolume?: number;
    vibrateOnMobilDevices?: number;
    [key: string]: unknown;
}

interface ButtonDefinition {
    id: string;
    name: string;
    kind: ButtonKind;
    layout: ButtonLayout;
    label: string;
    icon: string;
}

const previewIcons: Record<ButtonKind, string> = {
    navigation: '▶',
    link: '↗',
    state: '✎',
    multiState: '▣',
    addition: '+',
    toggle: '✓',
    slider: '◉',
};

const styleFields = [
    { name: 'buttonStyle', label: 'buttonStyle', type: 'select', options: ['text', 'raised', 'unelevated', 'outlined'], default: 'raised' },
];

const feedbackFields = [
    { name: 'vibrateOnMobilDevices', label: 'vibrateOnMobilDevices', type: 'number' },
    { name: 'clickSoundPlay', label: 'clickSoundPlay', type: 'checkbox' },
    { name: 'clickSoundVolume', label: 'clickSoundVolume', type: 'slider', min: 0, max: 1, step: 0.05, default: 0.5 },
    { name: 'debug', label: 'debug', type: 'checkbox' },
];

const actionFields = {
    navigation: [{ name: 'nav_view', label: 'nav_view', type: 'views' }],
    link: [
        { name: 'href', label: 'href', type: 'text' },
        { name: 'openNewWindow', label: 'openNewWindow', type: 'checkbox' },
        { name: 'generateHtmlControl', label: 'generateHtmlControl', type: 'checkbox' },
    ],
    state: [
        { name: 'oid', label: 'oid', type: 'id' },
        { name: 'value', label: 'value', type: 'text' },
    ],
    multiState: [
        { name: 'countOids', label: 'countOids', type: 'number', default: 1 },
        ...Array.from({ length: 11 }, (_, index) => [
            { name: `oid${index}`, label: `oid${index}`, type: 'id' },
            { name: `value${index}`, label: `value${index}`, type: 'text' },
            { name: `delayInMs${index}`, label: `delayInMs${index}`, type: 'number', default: 0 },
        ]).flat(),
    ],
    addition: [
        { name: 'oid', label: 'oid', type: 'id' },
        { name: 'value', label: 'value', type: 'number' },
        { name: 'minmax', label: 'minmax', type: 'text' },
    ],
    toggle: [
        { name: 'oid', label: 'oid', type: 'id' },
        { name: 'readOnly', label: 'readOnly', type: 'checkbox' },
        { name: 'toggleType', label: 'toggleType', type: 'select', options: ['boolean', 'value'], default: 'boolean' },
        { name: 'pushButton', label: 'pushButton', type: 'checkbox' },
        { name: 'valueOff', label: 'valueOff', type: 'text' },
        { name: 'valueOn', label: 'valueOn', type: 'text' },
        { name: 'stateIfNotTrueValue', label: 'stateIfNotTrueValue', type: 'select', options: ['on', 'off'], default: 'on' },
    ],
    slider: [
        { name: 'oid', label: 'oid', type: 'id' },
        { name: 'readOnly', label: 'readOnly', type: 'checkbox' },
        { name: 'sliderOnly', label: 'sliderOnly', type: 'checkbox' },
        { name: 'valueOff', label: 'valueOff', type: 'number' },
        { name: 'valueOn', label: 'valueOn', type: 'number' },
        { name: 'sliderWidth', label: 'sliderWidth', type: 'number', default: 20 },
        { name: 'sliderThikness', label: 'sliderThikness', type: 'number' },
        { name: 'showInFront', label: 'showInFront', type: 'checkbox' },
        { name: 'showAlways', label: 'showAlways', type: 'checkbox' },
        { name: 'foregroundColor', label: 'foregroundColor', type: 'color' },
        { name: 'backgroundColor', label: 'backgroundColor', type: 'color' },
        { name: 'colorize', label: 'colorize', type: 'checkbox' },
        { name: 'colorizeFactor', label: 'colorizeFactor', type: 'number', default: 0.5 },
        { name: 'angleOffset', label: 'angleOffset', type: 'number' },
        { name: 'angleArc', label: 'angleArc', type: 'number', default: 360 },
        { name: 'enable', label: 'enable', type: 'checkbox' },
        { name: 'widgetId', label: 'widgetId', type: 'text' },
        { name: 'prepandText', label: 'prepandText', type: 'text' },
        { name: 'appendText', label: 'appendText', type: 'text' },
        { name: 'unit', label: 'unit', type: 'text' },
        { name: 'valueLabelMin', label: 'valueLabelMin', type: 'text' },
        { name: 'valueLabelMax', label: 'valueLabelMax', type: 'text' },
        { name: 'imageValueWidgetLink', label: 'imageValueWidgetLink', type: 'image' },
        { name: 'imageColorValueWidgetLink', label: 'imageColorValueWidgetLink', type: 'color' },
    ],
} satisfies Record<ButtonKind, Record<string, unknown>[]>;

function attrs(def: ButtonDefinition): RxWidgetInfo['visAttrs'] {
    const isIcon = def.layout === 'icon';
    const isVertical = def.layout === 'vertical';
    const labelFields = isIcon
        ? []
        : [
              { name: 'buttontext', label: 'buttontext', type: 'html', default: def.label },
              { name: 'labelTrue', label: 'labelTrue', type: 'html' },
              { name: 'labelColorFalse', label: 'labelColorFalse', type: 'color' },
              { name: 'labelColorTrue', label: 'labelColorTrue', type: 'color' },
              { name: 'textFontFamily', label: 'textFontFamily', type: 'fontname' },
              { name: 'textFontSize', label: 'textFontSize', type: 'number' },
              isVertical
                  ? { name: 'alignment', label: 'alignment', type: 'select', options: ['flex-start', 'center', 'flex-end'], default: 'center' }
                  : { name: 'labelWidth', label: 'labelWidth', type: 'slider', min: 0, max: 100, step: 1 },
              isVertical ? { name: 'distanceBetweenTextAndImage', label: 'distanceBetweenTextAndImage', type: 'slider', min: 0, max: 100, step: 1 } : null,
          ].filter(Boolean);

    return [
        {
            name: 'common',
            fields: [...(isIcon ? [] : styleFields), ...actionFields[def.kind], ...feedbackFields],
        },
        {
            name: 'label',
            fields: labelFields,
        },
        {
            name: 'color',
            fields: [
                { name: 'mdwButtonPrimaryColor', label: 'mdwButtonPrimaryColor', type: 'color' },
                { name: 'mdwButtonSecondaryColor', label: 'mdwButtonSecondaryColor', type: 'color' },
                { name: 'mdwButtonColorPress', label: 'mdwButtonColorPress', type: 'color' },
                { name: 'colorBgFalse', label: 'colorBgFalse', type: 'color' },
                { name: 'colorBgTrue', label: 'colorBgTrue', type: 'color' },
                { name: 'colorPress', label: 'colorPress', type: 'color' },
            ],
        },
        {
            name: 'icon',
            fields: [
                { name: 'image', label: 'image', type: 'image', default: def.icon },
                { name: 'imageColor', label: 'imageColor', type: 'color' },
                { name: 'imageTrue', label: 'imageTrue', type: 'image' },
                { name: 'imageTrueColor', label: 'imageTrueColor', type: 'color' },
                { name: 'iconPosition', label: 'iconPosition', type: 'select', options: isVertical ? ['top', 'bottom'] : ['left', 'right'], default: isVertical ? 'top' : 'left' },
                { name: 'iconHeight', label: 'iconHeight', type: 'slider', min: 0, max: 200, step: 1, default: isVertical ? 26 : undefined },
            ],
        },
        {
            name: 'lock',
            fields: [
                { name: 'lockEnabled', label: 'lockEnabled', type: 'checkbox' },
                { name: 'autoLockAfter', label: 'autoLockAfter', type: 'number', default: 10 },
                { name: 'lockIcon', label: 'lockIcon', type: 'image' },
                { name: 'lockIconTop', label: 'lockIconTop', type: 'slider', min: 0, max: 100, step: 1, default: isIcon ? 45 : 5 },
                { name: 'lockIconLeft', label: 'lockIconLeft', type: 'slider', min: 0, max: 100, step: 1, default: isIcon ? 55 : 5 },
                { name: 'lockIconSize', label: 'lockIconSize', type: 'number' },
                { name: 'lockIconColor', label: 'lockIconColor', type: 'color' },
                { name: 'lockIconBackground', label: 'lockIconBackground', type: 'color' },
                { name: 'lockBackgroundSizeFactor', label: 'lockBackgroundSizeFactor', type: 'number', default: 1 },
                { name: 'lockFilterGrayscale', label: 'lockFilterGrayscale', type: 'slider', min: 0, max: 100, step: 1, default: 30 },
            ],
        },
    ] as RxWidgetInfo['visAttrs'];
}

function color(value: unknown, fallback: string): string {
    return typeof value === 'string' && value ? value : fallback;
}

function numeric(value: unknown, fallback = 0): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function isImageSource(value: string): boolean {
    const normalized = value.toLowerCase();
    return (
        ['.gif', '.png', '.bmp', '.jpg', '.jpeg', '.tif', '.svg', 'http://', 'https://', ';base64,'].some(extension =>
            normalized.includes(extension),
        )
    );
}

function isSvgSource(value: string): boolean {
    const normalized = value.toLowerCase();
    return normalized.includes('.svg') || normalized.includes('image/svg+xml');
}

function renderIcon(image: string, colorValue: string, size: number): React.JSX.Element | null {
    if (!image) {
        return null;
    }
    const style: React.CSSProperties = {
        color: colorValue,
        fontSize: size || undefined,
        height: size || undefined,
        lineHeight: 1,
        width: size || undefined,
    };

    if (isImageSource(image)) {
        if (isSvgSource(image)) {
            return (
                <span
                    style={{
                        ...style,
                        backgroundColor: colorValue,
                        display: 'inline-block',
                        maskImage: `url("${image}")`,
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        WebkitMaskImage: `url("${image}")`,
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                    }}
                />
            );
        }
        return (
            <img
                alt=""
                src={image}
                style={{
                    ...style,
                    objectFit: 'contain',
                }}
            />
        );
    }

    return <span className={`mdi mdi-${image}`} style={style} />;
}

function isOn(current: ioBroker.StateValue | undefined, data: ButtonData): boolean {
    if (data.toggleType === 'value') {
        const onValue = parseActionValue(String(data.valueOn ?? true));
        const offValue = parseActionValue(String(data.valueOff ?? false));
        const currentNumber = Number(current);
        const onNumber = Number(onValue);
        const offNumber = Number(offValue);
        const isKnownOn = Number.isFinite(currentNumber) && Number.isFinite(onNumber) ? currentNumber === onNumber : current === onValue;
        const isKnownOff = Number.isFinite(currentNumber) && Number.isFinite(offNumber) ? currentNumber === offNumber : current === offValue;
        return isKnownOn || (!isKnownOff && data.stateIfNotTrueValue === 'on');
    }
    return current === true || current === 'true' || current === 1 || current === '1';
}

function isActive(def: ButtonDefinition, current: ioBroker.StateValue | undefined, data: ButtonData): boolean {
    if (def.kind === 'state') {
        return current === parseActionValue(String(data.value ?? ''));
    }
    return isOn(current, data);
}

function clampByMinMax(value: number, minmax: unknown): number {
    if (typeof minmax !== 'string') {
        return value;
    }
    const [min, max] = minmax.split(';').map(part => Number(part.trim()));
    if (Number.isFinite(min) && value < min) {
        return min;
    }
    if (Number.isFinite(max) && value > max) {
        return max;
    }
    return value;
}

function formatSliderValue(value: number, data: ButtonData, min: number, max: number): string {
    if (value <= min && data.valueLabelMin) {
        return data.valueLabelMin;
    }
    if (value >= max && data.valueLabelMax) {
        return data.valueLabelMax;
    }
    return `${Math.round(value)}${data.unit || ''}`;
}

function writeMultiState(props: VisRxWidgetProps, data: ButtonData): void {
    const count = Math.max(0, numeric(data.countOids, 1));
    for (let index = 0; index <= count; index++) {
        const oid = String(data[`oid${index}`] ?? '');
        const value = parseActionValue(String(data[`value${index}`] ?? ''));
        const delay = Math.max(0, numeric(data[`delayInMs${index}`], 0));
        if (delay) {
            window.setTimeout(() => setStateValue(props, oid, value), delay);
        } else {
            setStateValue(props, oid, value);
        }
    }
}

function feedback(data: ButtonData): void {
    const vibrate = numeric(data.vibrateOnMobilDevices, 0);
    if (vibrate > 0 && navigator.vibrate) {
        navigator.vibrate(vibrate);
    }
    if (data.clickSoundPlay) {
        const audio = new Audio('widgets/vis2-materialdesign/materialdesign-widgets-click-sound.mp3');
        audio.volume = Math.max(0, Math.min(1, numeric(data.clickSoundVolume, 0.5)));
        void audio.play().catch(() => undefined);
    }
}

function widgetLabel(def: ButtonDefinition): string {
    return def.name.toLowerCase().replace(/&nbsp;/g, '').replace(/\s+/g, '_');
}

function preview(def: ButtonDefinition): string {
    const isIcon = def.layout === 'icon';
    const width = isIcon ? 48 : 100;
    const height = def.layout === 'vertical' ? 60 : isIcon ? 48 : 30;
    const radius = isIcon ? 24 : 4;
    const label = def.label.replace(/&nbsp;/g, '').trim();
    const icon = previewIcons[def.kind];
    const text = isIcon ? icon : def.layout === 'vertical' ? `${icon}\n${label}` : `${icon} ${label}`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<rect width="${width}" height="${height}" rx="${radius}" fill="${isIcon ? '#fff' : '#44739e'}" stroke="#44739e"/>
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${isIcon ? 24 : 13}" fill="${isIcon ? '#44739e' : '#fff'}">${text}</text>
</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function execute(def: ButtonDefinition, props: VisRxWidgetProps, data: ButtonData, current: ioBroker.StateValue | undefined): void {
    if (def.kind === 'navigation' && data.nav_view) {
        props.context.changeView(data.nav_view);
    } else if (def.kind === 'link' && data.href) {
        if (data.openNewWindow) {
            window.open(data.href, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = data.href;
        }
    } else if (def.kind === 'state') {
        setStateValue(props, data.oid || '', parseActionValue(String(data.value ?? '')));
    } else if (def.kind === 'multiState') {
        writeMultiState(props, data);
    } else if (def.kind === 'addition') {
        const nextValue = numeric(current, 0) + numeric(data.value, 0);
        setStateValue(props, data.oid || '', clampByMinMax(nextValue, data.minmax));
    } else if ((def.kind === 'toggle' || def.kind === 'slider') && !data.readOnly) {
        const onValue = def.kind === 'slider' ? numeric(data.valueOn, 100) : data.toggleType === 'value' ? parseActionValue(String(data.valueOn ?? true)) : true;
        const offValue = def.kind === 'slider' ? numeric(data.valueOff, 0) : data.toggleType === 'value' ? parseActionValue(String(data.valueOff ?? false)) : false;
        setStateValue(props, data.oid || '', isOn(current, data) ? offValue : onValue);
        if (data.pushButton) {
            window.setTimeout(() => setStateValue(props, data.oid || '', offValue), 250);
        }
    }
}

export function createButtonClass(def: ButtonDefinition): typeof VisWidget {
    return class MaterialDesignButtonVariant extends VisWidget {
        private lockTimer: number | undefined;

        constructor(props: VisRxWidgetProps) {
            super(props);
        }

        static getWidgetInfo(): RxWidgetInfo {
            return {
                ...createInfo(def.id, def.name, attrs(def)),
                visWidgetLabel: widgetLabel(def),
                visPrev: preview(def),
                visDefaultStyle: {
                    width: def.layout === 'icon' ? 48 : 100,
                    height: def.layout === 'vertical' ? 60 : def.layout === 'icon' ? 48 : 30,
                },
                visResizeLocked: def.layout === 'icon',
            };
        }

        getWidgetInfo(): RxWidgetInfo {
            return MaterialDesignButtonVariant.getWidgetInfo();
        }

        componentWillUnmount(): void {
            if (this.lockTimer) {
                window.clearTimeout(this.lockTimer);
            }
        }

        isLocked(data: ButtonData): boolean {
            return Boolean(data.lockEnabled) && !(this.state as PressState & { unlocked?: boolean }).unlocked;
        }

        unlock(data: ButtonData): void {
            this.setState({ unlocked: true } as PressState & { unlocked: boolean });
            if (this.lockTimer) {
                window.clearTimeout(this.lockTimer);
            }
            this.lockTimer = window.setTimeout(
                () => this.setState({ unlocked: false } as PressState & { unlocked: boolean }),
                Math.max(1, numeric(data.autoLockAfter, 10)) * 1000,
            );
        }

        activate(data: ButtonData, current: ioBroker.StateValue | undefined): void {
            feedback(data);
            if (this.isLocked(data)) {
                this.unlock(data);
                return;
            }
            if (def.kind === 'slider' && data.sliderOnly) {
                return;
            }
            execute(def, this.props, data, current);
        }

        pushDown(data: ButtonData): void {
            if (def.kind !== 'toggle' || data.readOnly || !data.pushButton) {
                return;
            }
            feedback(data);
            if (this.isLocked(data)) {
                this.unlock(data);
                return;
            }
            const onValue = data.toggleType === 'value' ? parseActionValue(String(data.valueOn ?? true)) : true;
            setStateValue(this.props, data.oid || '', onValue);
        }

        pushUp(data: ButtonData): void {
            if (this.isLocked(data) || def.kind !== 'toggle' || data.readOnly || !data.pushButton) {
                return;
            }
            const offValue = data.toggleType === 'value' ? parseActionValue(String(data.valueOff ?? false)) : false;
            setStateValue(this.props, data.oid || '', offValue);
        }

        renderWidgetBody(props: RenderProps): React.JSX.Element {
            super.renderWidgetBody(props);
            const data = this.state.rxData as ButtonData;
            const pressState = this.state as PressState;
            const current = stateValue(this.state, data.oid || '');
            const on = isActive(def, current, data);
            const locked = this.isLocked(data);
            const primary = color(on ? data.colorBgTrue : data.mdwButtonPrimaryColor || data.colorBgFalse, def.layout === 'icon' ? 'transparent' : '#44739e');
            const secondary = color(on ? data.imageTrueColor || data.mdwButtonSecondaryColor : data.mdwButtonSecondaryColor || data.imageColor, def.layout === 'icon' ? '#44739e' : '#fff');
            const labelColor = color(on ? data.labelColorTrue : data.labelColorFalse, secondary);
            const pressed = color(data.mdwButtonColorPress || data.colorPress, '#1565c0');
            const background = pressState.active || pressState.hovered ? pressed : primary;
            const isVertical = def.layout === 'vertical';
            const isIcon = def.layout === 'icon';
            const image = on && data.imageTrue ? data.imageTrue : data.image || def.icon;
            const label = (on && data.labelTrue ? data.labelTrue : data.buttontext) || def.label;
            const iconFirst = isVertical ? data.iconPosition !== 'bottom' : data.iconPosition !== 'right';
            const iconSize = numeric(data.iconHeight, isVertical || isIcon ? 26 : 18);
            const lockSize = numeric(data.lockIconSize, isIcon ? 16 : 18);
            const lockElementSize = lockSize * Math.max(1, numeric(data.lockBackgroundSizeFactor, 1));
            const direction = isVertical ? 'column' : 'row';
            const gap = numeric(data.distanceBetweenTextAndImage, isVertical ? 2 : 4);
            const click = (): void => this.activate(data, current);
            const sliderMin = numeric(data.valueOff, 0);
            const sliderMax = numeric(data.valueOn, 100);
            const sliderValue = Math.min(sliderMax, Math.max(sliderMin, numeric(current, sliderMin)));
            const sliderVisible = def.kind === 'slider' && (data.showAlways || pressState.hovered || pressState.active);
            const sliderColor = color(data.foregroundColor, '#44739e');
            const sliderTrackColor = color(data.backgroundColor, '#eeeeee');
            const sliderLabel = formatSliderValue(sliderValue, data, sliderMin, sliderMax);
            const content = (
                <>
                    {renderIcon(image, secondary, iconSize)}
                    {!isIcon ? (
                        <span
                            style={{
                                color: labelColor,
                                fontFamily: data.textFontFamily || undefined,
                                fontSize: numeric(data.textFontSize, 0) || undefined,
                                width: !isVertical && numeric(data.labelWidth, 0) > 0 ? `${numeric(data.labelWidth)}%` : undefined,
                            }}
                            dangerouslySetInnerHTML={{ __html: label }}
                        />
                    ) : null}
                </>
            );

            return (
                <div style={{ boxSizing: 'border-box', width: '100%', height: '100%', padding: 0 }}>
                    <button
                        type="button"
                        aria-pressed={on}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: data.buttonStyle === 'outlined' ? `1px solid ${secondary}` : 0,
                            borderRadius: isIcon ? '50%' : 4,
                            background: data.buttonStyle === 'text' || data.buttonStyle === 'outlined' ? 'transparent' : background,
                            color: secondary,
                            cursor: data.readOnly ? 'default' : 'pointer',
                            padding: isIcon ? 0 : '0 8px',
                            display: 'flex',
                            flexDirection: direction,
                            alignItems: isVertical ? data.alignment || 'center' : 'center',
                            justifyContent: 'center',
                            gap,
                            transform: pressState.active ? 'translateY(1px)' : 'none',
                            transition: 'background 120ms ease, transform 80ms ease',
                            position: 'relative',
                        }}
                        onMouseEnter={() => this.setState({ hovered: true } as PressState)}
                        onMouseLeave={() => this.setState({ active: false, hovered: false } as PressState)}
                        onMouseDown={() => {
                            this.setState({ active: true } as PressState);
                            this.pushDown(data);
                        }}
                        onMouseUp={() => {
                            this.setState({ active: false } as PressState);
                            if (data.pushButton) {
                                this.pushUp(data);
                            } else {
                                click();
                            }
                        }}
                        onKeyDown={event => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                this.setState({ active: true } as PressState);
                            }
                        }}
                        onKeyUp={event => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                this.setState({ active: false } as PressState);
                                if (data.pushButton) {
                                    this.pushDown(data);
                                    this.pushUp(data);
                                } else {
                                    click();
                                }
                            }
                        }}
                        onTouchStart={() => {
                            this.setState({ active: true } as PressState);
                            this.pushDown(data);
                        }}
                        onTouchEnd={() => {
                            this.setState({ active: false } as PressState);
                            if (data.pushButton) {
                                this.pushUp(data);
                            } else {
                                click();
                            }
                        }}
                    >
                        <span
                            style={{
                                alignItems: isVertical ? data.alignment || 'center' : 'center',
                                display: 'flex',
                                flexDirection: direction,
                                filter: locked ? `grayscale(${numeric(data.lockFilterGrayscale, 30)}%)` : undefined,
                                gap,
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            {iconFirst ? content : React.Children.toArray(content.props.children).reverse()}
                        </span>
                        {locked ? (
                            <span
                                style={{
                                    position: 'absolute',
                                    left: `${numeric(data.lockIconLeft, isIcon ? 55 : 5)}%`,
                                    top: `${numeric(data.lockIconTop, isIcon ? 45 : 5)}%`,
                                    width: lockElementSize || undefined,
                                    height: lockElementSize || undefined,
                                    lineHeight: lockElementSize ? `${lockElementSize}px` : undefined,
                                    fontSize: lockSize || undefined,
                                    color: color(data.lockIconColor, '#B22222'),
                                    background: color(data.lockIconBackground, 'transparent'),
                                    borderRadius: lockElementSize || undefined,
                                    textAlign: 'center',
                                }}
                            >
                                {renderIcon(data.lockIcon || 'lock-outline', color(data.lockIconColor, '#B22222'), lockSize)}
                            </span>
                        ) : null}
                        {def.kind === 'slider' ? (
                            <>
                                <input
                                    aria-label={def.name}
                                    disabled={data.readOnly || locked}
                                    max={sliderMax}
                                    min={sliderMin}
                                    onChange={event => {
                                        setStateValue(this.props, data.oid || '', Number(event.currentTarget.value));
                                    }}
                                    onClick={event => event.stopPropagation()}
                                    onMouseDown={event => {
                                        event.stopPropagation();
                                        feedback(data);
                                    }}
                                    onMouseUp={event => event.stopPropagation()}
                                    onTouchEnd={event => event.stopPropagation()}
                                    onTouchStart={event => {
                                        event.stopPropagation();
                                        feedback(data);
                                    }}
                                    step={1}
                                    style={{
                                        accentColor: sliderColor,
                                        background: sliderTrackColor,
                                        bottom: data.showInFront ? '35%' : -Math.max(6, numeric(data.sliderWidth, 20)),
                                        cursor: data.readOnly || locked ? 'default' : 'pointer',
                                        display: sliderVisible ? 'block' : 'none',
                                        height: Math.max(4, numeric(data.sliderThikness, 6)),
                                        left: '10%',
                                        position: 'absolute',
                                        width: '80%',
                                        zIndex: data.showInFront ? 2 : 0,
                                    }}
                                    type="range"
                                    value={sliderValue}
                                />
                                {data.enable && sliderVisible ? (
                                    <span
                                        style={{
                                            alignItems: 'center',
                                            background: 'rgba(0, 0, 0, 0.72)',
                                            borderRadius: 4,
                                            bottom: data.showInFront ? '58%' : 4,
                                            color: '#fff',
                                            display: 'flex',
                                            fontSize: 11,
                                            gap: 3,
                                            left: '50%',
                                            maxWidth: '92%',
                                            padding: '2px 5px',
                                            pointerEvents: 'none',
                                            position: 'absolute',
                                            transform: 'translateX(-50%)',
                                            whiteSpace: 'nowrap',
                                            zIndex: 3,
                                        }}
                                    >
                                        {data.imageValueWidgetLink ? renderIcon(data.imageValueWidgetLink, color(data.imageColorValueWidgetLink, '#fff'), 12) : null}
                                        {data.prepandText || ''}
                                        {sliderLabel}
                                        {data.appendText || ''}
                                    </span>
                                ) : null}
                            </>
                        ) : null}
                    </button>
                </div>
            );
        }
    };
}
