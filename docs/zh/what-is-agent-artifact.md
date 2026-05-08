---
title: 什么是 Agent Artifact
description: Agent Artifact 标准的范围与边界。
---

# 什么是 Agent Artifact

Agent Artifact 定义 Agent 系统里的持久交付物层。它记录 Agent 产出了什么、当前版本是什么、由哪些 parts 组成、字节在哪里、来源和运行链路是什么、如何预览、如何导出、如何交给另一个系统继续处理。

Agent 输出不应只消失在聊天正文里。报告、图片、转写稿、浏览器快照、代码补丁、数据集、演示文稿、网页或支持包，都需要自己的身份、生命周期、预览、版本历史、来源链接、导出策略、Evidence refs 与 handoff metadata。

## 适用场景

- 回复变成 durable deliverable，而不是临时消息。
- 输出包含多个 parts、blocks、files、previews、attachments 或 source links。
- 用户可以修订、批准、对比、导出或交接结果。
- Runtime、UI、Evidence、Policy、Storage 需要引用同一个生成对象。
- Artifact 字节很大或私密，应通过 refs 引用而不是内嵌。

## 不是什么

Agent Artifact 不是存储后端、不是 UI renderer、不是文件格式、不是模型输出 schema、不是 Evidence archive、不是 Policy engine、也不是 Runtime task protocol。

## 最小兼容结果

最小实现可以创建一个 `artifact` envelope，包含稳定 id、kind、title、status、current version、parts、byte refs、hashes、runtime refs 与 export refs。后续可逐步增加 versions、operations、diffs、render manifests、handoff packages、source links 与 evidence refs。
