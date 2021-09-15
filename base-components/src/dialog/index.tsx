import { Dialog as NextDialog } from '@alifd/next'
import ReactDOM from 'react-dom';
import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { useEffect, useRef } from 'react'
import { useCssVar } from '../utils/useCssVar'
import { DialogProps, QuickShowConfig, QuickShowRet } from '@alifd/next/types/dialog';

type CustomDialogProps = DialogProps & {
  /**
   * 抽屉大小
   */
     size?: 'mini' | 'small' | 'medium' | 'large';
}

type CustomQuickShowConfig = QuickShowConfig & {
   /**
   * 抽屉大小
   */
    size?: 'mini' | 'small' | 'medium' | 'large';
}

// 获取 size 大小
const getCustomWidth = (size: CustomDialogProps['size']): string | number => {
    switch(size) {
      case 'mini': 
        return 400;
      case 'small':
        return 600;
      case 'medium':
        return 800;
      case 'large':
        return 1200;
      default: 
        return 400;
    }
  }

const Dialog: React.FC<CustomDialogProps> & {
  show: (config: CustomQuickShowConfig) => QuickShowRet;
  confirm: (config: CustomQuickShowConfig) => QuickShowRet;
  alert: (config: CustomQuickShowConfig) => QuickShowRet;
} = (props) => {
  const { size, ...others } = props;
  const theme = useCssVar('--alicloudfe-components-theme').trim()

  const customRef = useRef(null);
  
  // 有滚动条时底部显示阴影
  const setFooterShadow = () => {
    if (theme !== 'wind' && !theme.startsWith('xconsole')) {
      const dialogDom = ReactDOM.findDOMNode(customRef.current);
      const dialogBodyDom = dialogDom?.getElementsByClassName('next-dialog-body')?.[0];
      const dialogFooterDom = dialogDom?.getElementsByClassName('next-dialog-footer')?.[0];
      if (dialogFooterDom) {
        if (dialogBodyDom?.clientHeight < dialogBodyDom?.scrollHeight) {
          dialogFooterDom.style.boxShadow = 'var(--shadow-1-up)';
        }else {
          dialogFooterDom.style.boxShadow = 'none';
        }
      }
    }
  }

  useEffect(() => {
    if (customRef) {
      setFooterShadow();
    }
  })

  useEffect(() => {
    setFooterShadow();
  }, [ReactDOM.findDOMNode(customRef.current)?.getElementsByClassName('next-dialog')?.[0]?.clientHeight])

  // 云效混合云主题样式主操作在右边
  const defaultFooterActions = (() => {
    if (
      theme === 'yunxiao' ||
      theme === 'yunxiao-dark' ||
      theme === 'hybridcloud' ||
      theme === 'hybridcloud-dark'
    )
      return ['cancel', 'ok']
    return ['ok', 'cancel']
  })()

  return <NextDialog style={{width: getCustomWidth(size) + 'px'}} footerActions={defaultFooterActions} {...others} ref={customRef} />
}

const showDefaultFooterActions = () => {
  const theme = window
    .getComputedStyle?.(window.document.body)
    .getPropertyValue('--alicloudfe-components-theme')
    .trim()
  if (
    theme === 'yunxiao' ||
    theme === 'yunxiao-dark' ||
    theme === 'hybridcloud' ||
    theme === 'hybridcloud-dark'
  )
    return ['cancel', 'ok']
  return ['ok', 'cancel']
}

// 快捷调用的操作按钮顺序
const show: ((config: CustomQuickShowConfig) => QuickShowRet) = (config) => {
  const {size, ...others} = config;

  return NextDialog.show({
    style: {width: getCustomWidth(size) + 'px'},
    footerActions: showDefaultFooterActions(),
    ...others,
    // 将Dialog.show与其他quick弹窗区分出来，单独做样式覆盖，
    // 因为它的body是不包含Message的
    className: ['quick-show', config.className].filter(Boolean).join(' ')
  })
}

const confirm: ((config: CustomQuickShowConfig) => QuickShowRet) = (config) => {
  const {size, ...others} = config;
  return NextDialog.confirm({
    style: {width: getCustomWidth(size) + 'px'},
    footerActions: showDefaultFooterActions(),
    ...others
  })
}

const alert: ((config: CustomQuickShowConfig) => QuickShowRet) = (config) => {
  const {size, ...others} = config;
  return NextDialog.alert({
    style: {width: getCustomWidth(size) + 'px'},
    footerActions: showDefaultFooterActions(),
    ...others
  })
}


hoistNonReactStatics(Dialog, NextDialog, { show: true, confirm: true })
Dialog.show = show
Dialog.confirm = confirm
Dialog.alert = alert


export default Dialog
