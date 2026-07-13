import type { RxWidgetInfo } from '@iobroker/types-vis-2';
import { dialogInfo, MaterialDesignDialog } from './MaterialDesignDialog';
export default class MaterialDesignDialogIFrame extends MaterialDesignDialog { constructor(props: any) { super(props, 'iframe'); } static getWidgetInfo(): RxWidgetInfo { return dialogInfo('iframe'); } getWidgetInfo(): RxWidgetInfo { return MaterialDesignDialogIFrame.getWidgetInfo(); } }
