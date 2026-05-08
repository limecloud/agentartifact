---
title: 生态边界
description: Agent Artifact 拥有什么、不拥有什么。
---

# 生态边界

Agent Artifact 拥有 durable deliverable semantics，不应变成整个内容系统。

| Boundary | 规则 |
| --- | --- |
| Runtime | Runtime 生产和更新；Agent Artifact 记录 deliverable identity、versions、parts 与 refs。 |
| UI | UI 渲染和编辑；Agent Artifact 提供 render manifests 与 source-of-truth ids。 |
| Evidence | Evidence 验证和审计；Agent Artifact 提供 artifact/version/part/export refs。 |
| Policy | Policy 允许或阻断 export/retention/redaction；Agent Artifact 记录 policy refs 与 export state。 |
| Knowledge | Knowledge 提供 sources；Agent Artifact 把 parts 连接到 source refs。 |
| Tool | Tool 产出 files/media；Agent Artifact 把输出归一为 durable artifacts。 |
| Storage | Storage 拥有 bytes；Agent Artifact 拥有 byte refs 与 integrity metadata。 |

反模式：把聊天 Markdown 当成唯一 artifact truth；用文件扩展名当 kind；让 viewer-local state 变成 artifact graph；没有 export manifest 和 policy refs 就导出私有 bytes；所有 domain output 都退回 generic file。
