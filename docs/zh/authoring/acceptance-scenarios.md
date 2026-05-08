---
title: 验收场景
description: 兼容 Agent Artifact 的实现应通过的场景。
---

# 验收场景

## 报告文档

Agent 创建 `report_document`，添加结构化 parts，按 section 连接 sources，创建 version 1，生成 preview，导出 Markdown/PDF，Evidence 可引用 artifact id 与 version id。

## 图片输出

图片生成任务创建 `image_output`，包含 PNG byte ref、thumbnail ref、prompt/source links、model refs、policy refs 与 export metadata。UI 不从 file card 推断 identity。

## 转写校对

转写 artifact 包含 transcript segments。用户修改 segment 后生成 operation 和 version 2，原始 ASR 输出保持不可变。

## 浏览器快照

浏览器 artifact 连接 action、screenshot、observation、URL、timestamp 与 trace ids。Replay viewer 消费 artifact graph，而不是 UI local state。
