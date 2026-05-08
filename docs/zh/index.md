---
layout: home
title: Agent Artifact
titleTemplate: false
hero:
  name: Agent Artifact
  text: 面向 Agent 系统的可移植交付物标准。
  tagline: 统一描述 Agent 输出如何成为持久、可版本化、可预览、可编辑、可导出、可复查、可安全交接的正式产物。
  image:
    src: /logo.svg
    alt: Agent Artifact logo
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: 什么是 Agent Artifact
      link: /zh/what-is-agent-artifact
    - theme: alt
      text: LLM 全量上下文
      link: ../llms-full.txt
features:
  - title: 交付物身份
    details: 稳定 id、kind、status、media type、byte ref、hash 与 owner 边界。
  - title: Parts 与 blocks
    details: 结构化文档块、媒体部件、文件、范围、selector、附件与 render hints。
  - title: 版本与 diff
    details: snapshots、operations、change summaries、semantic diffs 与可回放更新事实。
  - title: 导出与交接
    details: render manifests、export manifests、redaction state、provenance refs 与 peer-agent handoff packages。
---

## 从这里开始

- [什么是 Agent Artifact](what-is-agent-artifact)
- [Artifact 模型](concepts/artifact-model)
- [最新规范](specification)
- [实现快速开始](authoring/quickstart)
- [JSON Schemas](reference/json-schemas)
