---
title: 转写校对
description: ASR 输出与用户校对的 artifact flow 示例。
---

# 转写校对

音频转写 artifact 初始包含 ASR segments。用户修改第 12 段后，系统记录 `artifact.update_part`，生成 draft snapshot，并 finalize version 2。原始 ASR 输出保持不可变。
