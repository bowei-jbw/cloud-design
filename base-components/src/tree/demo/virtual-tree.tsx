/**
 * @title 虚拟滚动
 * @description 当树的节点数比较多的时候，设置虚拟滚动提高性能，注意设置高度，且允许滚动。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree } from '@alicloudfe/components'

function createDataSource(level = 3, count = 5) {
  const dataSource = []
  let num = 0

  const drill = (children, _level, _count) => {
    children.forEach((child, i) => {
      child.children = new Array(_count).fill(null).map((item, k) => {
        const key = `${child.key}-${k}`
        num++
        return {
          key,
          label: key
        }
      })
      _level > 0 && drill(child.children, _level - 1, count)
    })
  }

  dataSource.push({
    label: '0-0',
    key: '0-0'
  })
  drill(dataSource, level, count)

  console.log('node num:', num + 1)

  return dataSource
}

class Demo extends React.Component {
  constructor() {
    super()

    this.state = {
      dataSource: []
    }
  }
  componentDidMount() {
    this.setState({
      dataSource: createDataSource()
    })
  }

  onSelect(keys, info) {
    console.log('onSelect', keys, info)
  }

  onCheck(keys, info) {
    console.log('onCheck', keys, info)
  }

  render() {
    const dataSource = this.state.dataSource

    return dataSource.length ? (
      <Tree
        checkable
        showLine
        useVirtual
        style={{ maxHeight: '300px', overflow: 'auto' }} // 注意设置Tree组件高度&允许滚动
        defaultExpandAll
        defaultCheckedKeys={['0-0-1', '0-0-2']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
        dataSource={dataSource}
      />
    ) : null
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
