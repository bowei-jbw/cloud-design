/**
 * @title 彩色标签
 * @description 带颜色的标签，如果颜色不能满足，可以自定义颜色(只能是实心标签)
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon, ConfigProvider } from '@alicloudfe/components'
import TeamixIcon from '@teamix/icon'

TeamixIcon.setConfig(TeamixIcon.YUNXIAO)

const { Group: TagGroup } = Tag

const hybridcloud = ['error', 'success', 'prompt', 'warning', 'help', 'mention']
const yunxiaoStatus = [
  'error',
  'success',
  'prompt',
  'warning',
  'help',
  'loading'
]
const statusTextMap = {
  error: '报错',
  success: '成功',
  prompt: '默认',
  warning: '警示',
  help: '帮助',
  loading: '等待'
}
const yunxiao = [
  'wealthyGold',
  'coffeeBrown',
  'mintGreen',
  'absolutelyPurple',
  'cloisonne',
  'cyanGray',
  'grassGreen'
]

const presetColors = ['blue', 'green', 'orange', 'red', 'turquoise', 'yellow']
// set custom color with hex value, do not use color keywords
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']

export default function DemoComponent() {
  const content = (
    <ConfigProvider>
      <div className="tag-list">
        <h4>hybridcloud colors</h4>
        <TagGroup>
          {hybridcloud.map(color => (
            <Tag key={`p_n_${color}`} color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>

        <h4>yunxiao status colors</h4>
        <TagGroup>
          {yunxiaoStatus.map(color => (
            <Tag
              key={`p_n_${color}`}
              color={color}
              icon={<Icon type="warning" />}
            >
              {statusTextMap[color]}
            </Tag>
          ))}
        </TagGroup>
        {/* <TagGroup>
          {yunxiaoStatus.map(color => (
            <Tag
              key={`p_n_${color}`}
              color={color}
              icon={<TeamixIcon type="send-line" />}
            >
              {statusTextMap[color]}
            </Tag>
          ))}
        </TagGroup>
        <TagGroup>
          {yunxiaoStatus.map(color => (
            <Tag
              size="large"
              key={`p_n_${color}`}
              color={color}
              icon={<TeamixIcon type="send-line" />}
            >
              {statusTextMap[color]}
            </Tag>
          ))}
        </TagGroup> */}
        <TagGroup>
          {yunxiaoStatus.map(color => (
            <Tag
              size="large"
              key={`p_n_${color}`}
              color={color}
              icon={<Icon type="warning" />}
            >
              {statusTextMap[color]}
            </Tag>
          ))}
        </TagGroup>

        <h4>yunxiao colors</h4>
        <TagGroup>
          {yunxiao.map(color => (
            <Tag key={`p_n_${color}`} color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>

        <h4>preset colors</h4>
        <TagGroup>
          {presetColors.map(color => (
            <Tag key={`p_n_${color}`} type="normal" color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>

        <TagGroup>
          {presetColors.map(color => (
            <Tag key={`p_p_${color}`} type="primary" color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>

        <h4>custom colors</h4>

        <TagGroup>
          {customColors.map(color => (
            <Tag key={`c_${color}`} color={color}>
              {color}
            </Tag>
          ))}
        </TagGroup>
      </div>
    </ConfigProvider>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
