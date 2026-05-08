---
title: v0.1.0 规范
description: Agent Artifact v0.1.0 版本化规范。
---

# v0.1.0 规范

此页快照 v0.1.0 契约。当前草案见[最新规范](../../specification)。

## 核心对象

`artifact`、`artifact_part`、`byte_ref`、`artifact_version`、`artifact_operation`、`artifact_diff`、`artifact_source_link`、`render_manifest`、`export_manifest`、`handoff_package` 与 `artifact_event`。

## Compatibility

- Producers should include `schema_version: "0.1.0"`。
- Consumers should ignore unknown fields。
- Producers should preserve artifact、version、part、byte ref、export 与 handoff ids。
