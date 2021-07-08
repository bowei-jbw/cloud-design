import React, { ReactNode, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Drawer as NextDrawer } from '@alifd/next'
import { withThemeClass } from '../utils/withThemeClass';
import hoistNonReactStatics from 'hoist-non-react-statics'
import { default as Button } from '../button'
import cls from 'classnames'
import { useCssVar } from '../utils/useCssVar'
import { ButtonProps } from '@alifd/next/types/button';

type NextDrawerProps = React.ComponentProps<typeof NextDrawer>

interface IDrawer {
  /**
   * 点击确认按钮时的回调。有此参数就默认显示确认按钮
   */
  onOk?: (event: React.MouseEvent) => void;
  /**
   * 点击取消按钮时的回调。有此参数就默认显示取消按钮
   */
  onCancel?: (event: React.MouseEvent) => void;
  /**
   * 完全自定义底部操作栏
   */
  renderFooter?: React.ReactNode;
  /**
   * 是否有底部分割线
   */
  hasFooterLine?: boolean;
  /**
   * 底部按钮位置
   */
  footerAlign?: 'left' | 'center' | 'right';
  /**
   * 取消按钮的文字
   */
  cancelText?: React.ReactNode;
  /**
   * 确认按钮的文字
   */
  okText?: React.ReactNode;
  /**
   * 透传给取消按钮的Props
   */
  cancelBtnProps?: ButtonProps;
  /**
   * 透传给确认按钮的Props
   */
  okBtnProps?: ButtonProps;
  /**
   * 给footer增加className
   */
  footerClass?: string;
  /**
   * 抽屉大小，也可以直接传入width自定义
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
}

export type DrawerProps = NextDrawerProps & IDrawer

const Drawer: React.FC<DrawerProps> = withThemeClass(
  React.forwardRef((props: DrawerProps, ref: any) => {

    const {
      visible = false,
      onOk,
      onCancel,
      renderFooter,
      hasFooterLine,
      footerAlign,
      children,
      okText = '确认',
      cancelText = '取消',
      cancelBtnProps = {},
      okBtnProps = {},
      footerClass,
      size = 'mini',
      width,
      ...filterProps
    } = props;
    const [customVisible, setCustomVisible] = useState<boolean>(visible);
    const customRef = useRef(null);
    const theme = useCssVar('--alicloudfe-components-theme').trim();

    const setFooterShadow = (iRef: any) => {
      if (iRef?.current && theme !== 'wind' && !theme.startsWith('xconsole')) {
        const drawerDom = ReactDOM.findDOMNode(iRef.current);
        const drawerFirstDom = drawerDom?.getElementsByClassName('next-drawer')?.[0]?.firstChild;
        if (drawerFirstDom) {
          drawerFirstDom.style.overflow = 'hidden';
        }
        const drawerBodyDom = drawerDom?.getElementsByClassName('next-drawer-body')?.[0];
        if (drawerBodyDom) {
          drawerBodyDom.style.overflow = 'auto';
        }
        const drawerFooterDom = drawerDom?.getElementsByClassName('next-drawer-footer')?.[0];
        if (drawerFooterDom) {
          if (drawerBodyDom?.clientHeight < drawerBodyDom?.scrollHeight) {
            drawerFooterDom.style.boxShadow = 'var(--shadow-1-up)';
          }else {
            drawerFooterDom.style.boxShadow = 'none';
          }
        }
      }
    }

    useEffect(() => {
      setFooterShadow(ref ? ref : customRef);
    })

    useEffect(() => {
      setFooterShadow(ref ? ref : customRef);
    }, [ReactDOM.findDOMNode(ref?.current)?.getElementsByClassName('next-drawer')?.[0]?.clientHeight])

    useEffect(() => {
      setCustomVisible(visible);
    }, [visible])

    const drawerCustomClassName = cls({
      'next-drawer-has-footer': onOk || onCancel || renderFooter
    })
    
    const drawerFooterClassName = cls({
      'next-drawer-footer': true,
      'next-drawer-footer-line': hasFooterLine,
      'next-drawer-footer-right': footerAlign === 'right',
      'next-drawer-footer-left': footerAlign === 'left',
      'next-drawer-footer-center': footerAlign === 'center',
      [footerClass]: !!footerClass 
    })

    const getCustomWidth = (): string | number => {
      if (width) {
        return width;
      }
      if (size) {
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
    }

    return (
      <NextDrawer
        {...filterProps}
        ref={ref ? ref : customRef}
        visible={customVisible}
        width={getCustomWidth()}
        className={drawerCustomClassName}
      >
        { children }
        {
          (onOk || onCancel || renderFooter) && (
            <div
              className={drawerFooterClassName}
            >
              { (onOk && !renderFooter) && (
                  <Button 
                    type="primary"
                    onClick={onOk}
                    style={{ marginRight: 8 }}
                    {...okBtnProps}
                  >
                    {okText}
                  </Button>
                )
              }
              { (onCancel && !renderFooter) && (
                <Button
                  onClick={onCancel}
                  {...cancelBtnProps}
                >
                  {cancelText}
                </Button>
              )}
              { renderFooter && renderFooter}
            </div>
          )
        }
        
      </NextDrawer>
    )
  })
) as any

hoistNonReactStatics(Drawer, NextDrawer)

// @ts-ignore
Drawer.displayName = NextDrawer.displayName

export default Drawer;
    
  