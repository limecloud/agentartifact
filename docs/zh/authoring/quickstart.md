---
title: 实现快速开始
description: 实现 Agent Artifact 的最小路径。
---

# 实现快速开始

1. 选择一个 durable output：报告、图片、转写稿、浏览器快照、代码补丁、数据集或支持包。
2. 创建 envelope：`artifact_id`、`artifact_kind`、`title`、`status`、timestamps、creator 与 runtime refs。
3. 挂接 parts 或 byte refs：blocks、segments、slides、tables、patches、annotations 用 parts；files/media 用 byte refs，并写入 media type、size、digest 与 access constraints。
4. 创建 version：第一个有用 snapshot 后生成不可变 `artifact_version`。
5. 增加 render/export manifests：render 描述安全预览；export 记录导出了什么、如何脱敏、包含哪些 files 与 hashes。
6. 连接相邻标准：runtime ids、evidence packs、policy decisions、knowledge sources、tool calls、model calls、telemetry spans 与 peer-agent handoff refs。
