import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/en/what-is-agent-artifact' },
  { text: 'Specification', link: '/en/specification' },
  { text: 'Examples', link: '/en/examples/report-document' },
  { text: 'Ecosystem', link: '/en/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/en/reference/json-schemas' },
  {
    text: 'Version',
    items: [
      { text: 'latest', link: '/en/specification' },
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
      { text: 'v0.1.2', link: '/en/versions/v0.1.2/specification' },
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
    { text: 'v0.1.2 specification', link: '/en/versions/v0.1.2/specification' },
    { text: 'v0.1.2 changelog', link: '/en/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
      { text: 'v0.1.1', link: '/en/versions/v0.1.1/specification' },
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
    { text: 'v0.1.2 specification', link: '/en/versions/v0.1.2/specification' },
    { text: 'v0.1.2 changelog', link: '/en/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
    { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
    { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/en/versions/v0.1.0/specification' }
    ]
  }
]

const zhNav = [
  { text: '指南', link: '/zh/what-is-agent-artifact' },
  { text: '规范', link: '/zh/specification' },
  { text: '示例', link: '/zh/examples/report-document' },
  { text: '生态', link: '/zh/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/zh/reference/json-schemas' },
  {
    text: '版本',
    items: [
      { text: 'latest', link: '/zh/specification' },
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
      { text: 'v0.1.2', link: '/zh/versions/v0.1.2/specification' },
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
    { text: 'v0.1.2 规范', link: '/zh/versions/v0.1.2/specification' },
    { text: 'v0.1.2 变更记录', link: '/zh/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
      { text: 'v0.1.1', link: '/zh/versions/v0.1.1/specification' },
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
    { text: 'v0.1.2 规范', link: '/zh/versions/v0.1.2/specification' },
    { text: 'v0.1.2 变更记录', link: '/zh/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
    { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
    { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/zh/versions/v0.1.0/specification' }
    ]
  }
]

const enSidebar = [
  { text: 'Start here', items: [
    { text: 'Overview', link: '/en/' },
    { text: 'What is Agent Artifact?', link: '/en/what-is-agent-artifact' },
    { text: 'Artifact model', link: '/en/concepts/artifact-model' },
    { text: 'Specification', link: '/en/specification' }
  ]},
  { text: 'Contracts', items: [
    { text: 'Artifact envelope', link: '/en/contracts/artifact-envelope' },
    { text: 'Artifact parts', link: '/en/contracts/artifact-parts' },
    { text: 'Versions and snapshots', link: '/en/contracts/versions-and-snapshots' },
    { text: 'Operations and diffs', link: '/en/contracts/operations-and-diffs' },
    { text: 'Source links', link: '/en/contracts/source-links' },
    { text: 'Render manifest', link: '/en/contracts/render-manifest' },
    { text: 'Export manifest', link: '/en/contracts/export-manifest' },
    { text: 'Handoff package', link: '/en/contracts/handoff-package' },
    { text: 'Interoperability', link: '/en/contracts/interoperability' }
  ]},
  { text: 'For implementors', items: [
    { text: 'Implementation quickstart', link: '/en/authoring/quickstart' },
    { text: 'Acceptance scenarios', link: '/en/authoring/acceptance-scenarios' }
  ]},
  { text: 'Reference', items: [
    { text: 'Glossary', link: '/en/reference/glossary' },
    { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
    { text: 'Ecosystem boundaries', link: '/en/reference/ecosystem-boundaries' },
    { text: 'Research sources', link: '/en/reference/research-sources' },
    { text: 'Source analysis', link: '/en/reference/source-analysis' }
  ]},
  { text: 'Examples', items: [
    { text: 'Report document', link: '/en/examples/report-document' },
    { text: 'Image output', link: '/en/examples/image-output' },
    { text: 'Transcript correction', link: '/en/examples/transcript-correction' },
    { text: 'Browser snapshot', link: '/en/examples/browser-snapshot' }
  ]},
  { text: 'Versions', items: [
    { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
    { text: 'v0.1.2 specification', link: '/en/versions/v0.1.2/specification' },
    { text: 'v0.1.2 changelog', link: '/en/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
    { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
    { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
    { text: 'v0.1.0 specification', link: '/en/versions/v0.1.0/specification' },
    { text: 'v0.1.0 changelog', link: '/en/versions/v0.1.0/changelog' }
  ]}
]

const zhSidebar = [
  { text: '开始', items: [
    { text: '概览', link: '/zh/' },
    { text: '什么是 Agent Artifact', link: '/zh/what-is-agent-artifact' },
    { text: 'Artifact 模型', link: '/zh/concepts/artifact-model' },
    { text: '规范', link: '/zh/specification' }
  ]},
  { text: '契约', items: [
    { text: 'Artifact envelope', link: '/zh/contracts/artifact-envelope' },
    { text: 'Artifact parts', link: '/zh/contracts/artifact-parts' },
    { text: 'Versions 与 snapshots', link: '/zh/contracts/versions-and-snapshots' },
    { text: 'Operations 与 diffs', link: '/zh/contracts/operations-and-diffs' },
    { text: 'Source links', link: '/zh/contracts/source-links' },
    { text: 'Render manifest', link: '/zh/contracts/render-manifest' },
    { text: 'Export manifest', link: '/zh/contracts/export-manifest' },
    { text: 'Handoff package', link: '/zh/contracts/handoff-package' },
    { text: 'Interoperability', link: '/zh/contracts/interoperability' }
  ]},
  { text: '实现者', items: [
    { text: '快速开始', link: '/zh/authoring/quickstart' },
    { text: '验收场景', link: '/zh/authoring/acceptance-scenarios' }
  ]},
  { text: '参考', items: [
    { text: '术语表', link: '/zh/reference/glossary' },
    { text: 'Agent 标准生态', link: '/zh/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/zh/reference/json-schemas' },
    { text: '生态边界', link: '/zh/reference/ecosystem-boundaries' },
    { text: '调研来源', link: '/zh/reference/research-sources' },
    { text: '实现分析摘要', link: '/zh/reference/source-analysis' }
  ]},
  { text: '示例', items: [
    { text: '报告文档', link: '/zh/examples/report-document' },
    { text: '图片输出', link: '/zh/examples/image-output' },
    { text: '转写校对', link: '/zh/examples/transcript-correction' },
    { text: '浏览器快照', link: '/zh/examples/browser-snapshot' }
  ]},
  { text: '版本', items: [
    { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
    { text: 'v0.1.2 规范', link: '/zh/versions/v0.1.2/specification' },
    { text: 'v0.1.2 变更记录', link: '/zh/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
    { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
    { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
    { text: 'v0.1.0 规范', link: '/zh/versions/v0.1.0/specification' },
    { text: 'v0.1.0 变更记录', link: '/zh/versions/v0.1.0/changelog' }
  ]}
]

export default defineConfig({
  base,
  title: 'Agent Artifact',
  description: 'A portable standard for agent deliverables, versions, parts, previews, exports, and handoff packages.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'English', items: enNav },
      { text: '中文', items: zhNav }
    ],
    sidebar: { '/en/': enSidebar, '/zh/': zhSidebar },
    search: { provider: 'local' },
    footer: {
      message: 'Draft standard for portable agent deliverables, versions, parts, previews, exports, and handoff packages.',
      copyright: 'Copyright © 2026'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
