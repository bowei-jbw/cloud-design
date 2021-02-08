const path = require('path')
const fs = require('fs-extra')
const {
  codeExportLibInfoESM,
  codeExportLibInfoCJS,
  getCommonJSReExport,
  getESMReExport,
  getComponentNames
} = require('../../utils')

const xconsoleRoot = path.join(__dirname, '../../publish-xconsole')
const pkgPath = path.join(__dirname, '../')

const sourcePkgJson = fs.readJsonSync(
  path.join(xconsoleRoot, 'package.json'),
  'utf-8'
)
const pkgJson = fs.readJsonSync(path.join(pkgPath, 'package.json'), 'utf-8')
const pkgVersion = pkgJson.version
const pkgName = pkgJson.name

console.log(`正在生成${pkgName}@${pkgVersion}`)

// 同步 @alicloud/console-components 版本
pkgJson.dependencies['@alicloud/console-components'] = sourcePkgJson.version
fs.writeFileSync(
  path.join(pkgPath, 'package.json'),
  JSON.stringify(pkgJson, null, 2) + '\n'
)

// 创建入口文件
const libIndexJsPath = path.join(pkgPath, 'lib', 'index.js')
const esmIndexJsPath = path.join(pkgPath, 'esm', 'index.js')
const libIndexDTSPath = path.join(pkgPath, 'lib', 'index.d.ts')

const libIndexJsCode = [
  ...getCommonJSReExport('@alicloud/console-components/lib/index.js'),
  codeExportLibInfoCJS('@ali/wind', pkgVersion)
]
const esmIndexJsCode = [
  getESMReExport('@alicloud/console-components/esm/index.js')[0],
  codeExportLibInfoESM('@ali/wind', pkgVersion)
]
const libIndexDTSCode = [
  getESMReExport('@alicloud/console-components/lib/index')[0]
]

fs.ensureFileSync(libIndexJsPath)
fs.writeFileSync(libIndexJsPath, libIndexJsCode.join('\n'))
fs.ensureFileSync(esmIndexJsPath)
fs.writeFileSync(esmIndexJsPath, esmIndexJsCode.join('\n'))
fs.ensureFileSync(libIndexDTSPath)
fs.writeFileSync(libIndexDTSPath, libIndexDTSCode.join('\n'))

const componentNames = getComponentNames()
// 为每个组件创建re-export，
// 比如button：/lib/button/index.js /lib/button/index.scss /types/button/index.d.ts
componentNames.forEach(createReExportForComponent)
function createReExportForComponent(componentName) {
  const libIndexJsPath = path.join(pkgPath, 'lib', componentName, 'index.js')
  const jsFileContent = getCommonJSReExport(
    `@alicloud/console-components/lib/${componentName}/index.js`
  ).join('\n')
  fs.ensureFileSync(libIndexJsPath)
  fs.writeFileSync(libIndexJsPath, jsFileContent)

  const libIndexDTSPath = path.join(pkgPath, 'lib', componentName, 'index.d.ts')
  const dtsFileContent = getESMReExport(
    `@alicloud/console-components/lib/${componentName}/index`
  )[1]
  fs.ensureFileSync(libIndexDTSPath)
  fs.writeFileSync(libIndexDTSPath, dtsFileContent)

  const esmIndexJsPath = path.join(pkgPath, 'esm', componentName, 'index.js')
  const esmIndexJSContent = getESMReExport(
    `@alicloud/console-components/esm/${componentName}/index.js`
  ).join('\n')
  fs.ensureFileSync(esmIndexJsPath)
  fs.writeFileSync(esmIndexJsPath, esmIndexJSContent)
}

const distFrom = path.join(xconsoleRoot, 'dist')
const distTo = path.join(pkgPath, 'dist')
fs.copySync(distFrom, distTo)
