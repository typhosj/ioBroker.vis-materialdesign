import type { RxWidgetInfo } from '@iobroker/types-vis-2';
import { dialogInfo, MaterialDesignDialog } from './MaterialDesignDialog';
export default class MaterialDesignDialogView extends MaterialDesignDialog { constructor(props: any) { super(props, 'view'); } static getWidgetInfo(): RxWidgetInfo { return dialogInfo('view'); } getWidgetInfo(): RxWidgetInfo { return MaterialDesignDialogView.getWidgetInfo(); } }
