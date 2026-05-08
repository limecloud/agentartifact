---
title: 图片输出
description: 生成图片的 artifact flow 示例。
---

# 图片输出

图片生成任务创建 `image_output` artifact，包含 PNG byte ref、thumbnail ref、prompt/source links、model refs、policy refs 与 export metadata。即使 PNG 从本地存储迁移到对象存储，artifact envelope 仍保持稳定。
