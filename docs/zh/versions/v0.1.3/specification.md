---
title: 规范
description: Agent Artifact 最新草案规范。
---

# 规范

Agent Artifact 最新草案是面向 Agent 持久交付物的可移植标准。它定义 artifact identity、kind、parts、byte refs、versions、operations、diffs、render manifests、source links、export manifests、handoff packages、lifecycle events 与 interoperability refs。

Agent Artifact 拥有交付物语义；不拥有 storage engine、UI rendering、model API、runtime tasks、evidence graphs、policy decisions、knowledge stores 或 legal retention rules。

## 范围

Agent Artifact 标准化以下内容：

1. Artifact envelope 的 identity、kind、lifecycle、ownership、current version、labels 与 refs。
2. 面向 blocks、media、files、pages、slides、transcript segments、patches、tables 与 annotations 的 artifact parts。
3. 带 media type、size、digest、URI、storage owner、access constraints 与 redaction state 的 byte refs。
4. 可引用、对比、导出、评审与 handoff 的 versions 与 snapshots。
5. 支持 streaming creation、partial rewrites、user edits、tool updates 与 AI revisions 的 operations 与 diffs。
6. Artifact 或 part 到 sources、runs、tools、models、prompts、knowledge refs、evidence refs 与 policy decisions 的 source links。
7. 面向 safe preview、viewer surface、fallback、thumbnails 与 partial hydration 的 render manifests。
8. 面向 format、package contents、integrity、redaction、policy、provenance 与 completeness 的 export manifests。
9. 面向 peer agents、support bundles、external tools 与 offline review 的 handoff packages。
10. Artifact lifecycle event envelopes。

## 核心对象

| Object | 用途 |
| --- | --- |
| `artifact` | 一个交付物跨版本与导出的稳定 envelope。 |
| `artifact_part` | 结构化 block、file、media、page、slide、segment、patch、table 或 annotation。 |
| `byte_ref` | 指向 bytes 的 ref，包含 media type、size、digest、storage owner 与 access constraints。 |
| `artifact_version` | Artifact metadata、parts 与 byte refs 的不可变 snapshot。 |
| `artifact_operation` | 变更意图或已应用操作。 |
| `artifact_diff` | versions、parts 或 byte refs 之间的对比摘要。 |
| `artifact_source_link` | Artifact content 与 source、run、tool、model、human、policy 或 evidence refs 的关系。 |
| `render_manifest` | UI surface 的 preview 与 viewer contract。 |
| `export_manifest` | Export package、format、integrity、completeness、redaction 与 policy facts。 |
| `handoff_package` | 给另一个系统或 peer agent 的可移植 package。 |
| `artifact_event` | Lifecycle event envelope。 |

## Artifact kinds

初始 vocabulary：`report_document`、`analysis_document`、`plan_document`、`table_document`、`presentation_document`、`webpage_artifact`、`image_output`、`audio_output`、`video_output`、`transcript`、`browser_session`、`browser_snapshot`、`code_patch`、`code_file`、`dataset`、`model_output_bundle`、`support_bundle`、`generic_file`。

`generic_file` SHOULD 作为兼容兜底，而不是 domain artifact 的默认值。

## Lifecycle status

`planned`、`streaming`、`draft`、`ready`、`reviewed`、`exported`、`handed_off`、`archived`、`redacted`、`failed`、`deleted`。

## Event classes

- `artifact.created`
- `artifact.updated`
- `artifact.part.added`
- `artifact.part.updated`
- `artifact.byte_ref.attached`
- `artifact.source_link.attached`
- `artifact.version.created`
- `artifact.diff.created`
- `artifact.render_manifest.created`
- `artifact.export.created`
- `artifact.handoff.created`
- `artifact.redacted`
- `artifact.archived`
- `artifact.failed`
- `artifact.deleted`

## 版本兼容

v0.1.0 是草案。实现 SHOULD 包含 `schema_version: "0.1.0"`，消费者 SHOULD 忽略未知字段，生产者 SHOULD 保留 artifact、version、part、byte ref、export 与 handoff ids。
