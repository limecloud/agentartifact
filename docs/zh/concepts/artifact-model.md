---
title: Artifact 模型
description: Agent Artifact 的核心建模方式。
---

# Artifact 模型

Agent Artifact 把交付物建模为结构化、可版本化对象，而不是消息装饰。标准把产品语义与 storage bytes、UI views、runtime tasks、evidence graphs 分离。

## 核心循环

```text
agent work -> artifact intent -> parts / bytes -> version -> render -> export / handoff -> evidence refs
```

1. Runtime、工具、模型、人或 peer agent 产出 artifact candidate。
2. Artifact 层分配稳定 identity、kind、status、owner 与 refs。
3. 内容以 parts、blocks、byte refs 或 external resources 表达。
4. Versions 与 operations 记录 artifact 如何变化。
5. Render manifests 描述安全预览 surface，但不拥有 UI 组件。
6. Export manifests 描述 package、format、redaction、policy 与 integrity。
7. Handoff packages 让其他系统在不丢失 provenance 的情况下接收 artifact。

## Kind 与 format

`artifact_kind` 描述产品含义，`media_type` 描述表示方式。`report_document` 可以导出为 Markdown、HTML、PDF 与 JSON。不要只用文件扩展名当 artifact kind。

## Parts 与 bytes

文档块、转写段、表格行、幻灯片、补丁和注释是 parts；PNG、WAV、PDF、ZIP、HTML、JSON 或大 raw outputs 是 byte refs。大 payload 或私密 payload 应留在拥有系统中，以 URI、digest、size、media type 与 access constraints 引用。
