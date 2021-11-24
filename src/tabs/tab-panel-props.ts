/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */

import { TdTabPanelProps } from './type';
const props: TdTabPanelProps = {
  /** 选项卡内容隐藏时是否销毁 */
  destroyOnHide: {
    type: Boolean,
    value: true,
  },
  /** 是否禁用当前选项卡 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 选项卡名称，可自定义选项卡导航内容 */
  label: {
    type: String,
  },
  /** 用于自定义选项卡面板内容 */
  panel: {
    type: String,
  },
  /** 选项卡的值，唯一标识 */
  value: {
    type: String,
    optionalTypes: [Number],
  },
};

export default props;
