/**
 * @title 彩色标签
 * @description 带颜色的标签，如果颜色不能满足，可以自定义颜色(只能是实心标签)
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon } from '@alicloudfe/components'

const { Group: TagGroup } = Tag

const presetColors = ['blue', 'green', 'orange', 'red', 'turquoise', 'yellow']
// set custom color with hex value, do not use color keywords
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']

export default function DemoComponent() {
  const content = (
    <div className="tag-list">
      <h4>preset colors</h4>
      <TagGroup>
        {presetColors.map((color) => (
          <Tag key={`p_n_${color}`} type="normal" color={color}>
            {color}
          </Tag>
        ))}
      </TagGroup>

      <TagGroup>
        {presetColors.map((color) => (
          <Tag key={`p_p_${color}`} type="primary" color={color}>
            {color}
          </Tag>
        ))}
      </TagGroup>

      <h4>custom colors</h4>

      <TagGroup>
        {customColors.map((color) => (
          <Tag key={`c_${color}`} color={color}>
            {color}
          </Tag>
        ))}
      </TagGroup>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
