---
title: 浏览器快照
description: 浏览器会话复盘的 artifact flow 示例。
---

# 浏览器快照

浏览器控制任务创建 `browser_session` 与 `browser_snapshot` artifacts。Snapshot 连接 URL、timestamp、screenshot byte ref、observation text、DOM/network refs、tool call ids 与 telemetry trace ids。Replay viewer 消费 artifact graph，而不是 UI-local state。
