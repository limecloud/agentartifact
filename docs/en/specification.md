---
title: Specification
description: Latest Agent Artifact draft specification.
---

# Specification

Agent Artifact latest draft is a portable standard for durable agent deliverables. It defines artifact identity, kind, parts, byte refs, versions, operations, diffs, render manifests, source links, export manifests, handoff packages, lifecycle events, and interoperability refs.

Agent Artifact owns deliverable semantics. It does not own storage engines, UI rendering, model APIs, runtime tasks, evidence graphs, policy decisions, knowledge stores, or legal retention rules.

## Scope

Agent Artifact standardizes these implementation concerns:

1. Artifact envelope identity, kind, lifecycle, ownership, current version, labels, and refs.
2. Artifact parts for blocks, media, files, pages, slides, transcript segments, patches, tables, and annotations.
3. Byte refs with media type, size, digest, URI, storage owner, access constraints, and redaction state.
4. Versions and snapshots that can be referenced, compared, exported, reviewed, and handed off.
5. Operations and diffs for streaming creation, partial rewrites, user edits, tool updates, and AI revisions.
6. Source links from artifact or part to sources, runs, tools, models, prompts, knowledge refs, evidence refs, and policy decisions.
7. Render manifests for safe preview, viewer surface, fallback, thumbnails, and partial hydration.
8. Export manifests for format, package contents, integrity, redaction, policy, provenance, and completeness.
9. Handoff packages for peer agents, support bundles, external tools, and offline review.
10. Event envelopes for artifact lifecycle changes.

Agent Artifact does **not** standardize a document editor schema, visual component system, object storage API, archive format, citation policy, model output contract, or workflow language.

## Core objects

| Object | Purpose |
| --- | --- |
| `artifact` | Stable envelope for one deliverable across versions and exports. |
| `artifact_part` | Structured block, file, media, page, slide, segment, patch, table, or annotation. |
| `byte_ref` | Pointer to bytes with media type, size, digest, storage owner, and access constraints. |
| `artifact_version` | Immutable snapshot of artifact metadata, parts, and byte refs. |
| `artifact_operation` | Mutation intent or applied operation. |
| `artifact_diff` | Comparison summary between versions, parts, or byte refs. |
| `artifact_source_link` | Relationship between artifact content and source, run, tool, model, human, policy, or evidence refs. |
| `render_manifest` | Preview and viewer contract for UI surfaces. |
| `export_manifest` | Export package, format, integrity, completeness, redaction, and policy facts. |
| `handoff_package` | Portable package for another system or peer agent. |
| `artifact_event` | Lifecycle event envelope. |

## Artifact envelope

Every exported `artifact` SHOULD include:

| Field | Requirement |
| --- | --- |
| `schema_version` | Required Agent Artifact schema version. |
| `artifact_id` | Required stable id. |
| `artifact_kind` | Required product kind. |
| `title` | Required user-visible title. |
| `status` | Required lifecycle status. |
| `created_at`, `updated_at` | Required timestamps. |
| `created_by` | Required actor or system ref. |
| `current_version_id` | Recommended after the first snapshot exists. |
| `parts` | Recommended compact part records or refs. |
| `byte_refs` | Recommended byte refs when the artifact has stored payloads. |
| `versions` | Recommended version refs. |
| `source_links` | Recommended source/provenance refs. |
| `render_manifest_ref` | Recommended when UI preview exists. |
| `export_refs` | Recommended when exports exist. |
| `policy_refs`, `evidence_refs`, `runtime_refs` | Optional adjacent standard refs. |

## Artifact kinds

Compatible implementations SHOULD start with this vocabulary and extend with product-specific kinds under namespaced values when needed:

- `report_document`
- `analysis_document`
- `plan_document`
- `table_document`
- `presentation_document`
- `webpage_artifact`
- `image_output`
- `audio_output`
- `video_output`
- `transcript`
- `browser_session`
- `browser_snapshot`
- `code_patch`
- `code_file`
- `dataset`
- `model_output_bundle`
- `support_bundle`
- `generic_file`

`generic_file` SHOULD be a compatibility fallback, not the default for domain artifacts.

## Lifecycle status

| Status | Meaning |
| --- | --- |
| `planned` | Artifact intent exists but no content is available. |
| `streaming` | Content is being generated or updated. |
| `draft` | Usable but not final. |
| `ready` | Current version is ready for normal use. |
| `reviewed` | Review verdict exists. |
| `exported` | Export manifest exists. |
| `handed_off` | Handoff package was produced. |
| `archived` | Artifact is no longer active. |
| `redacted` | Payload or parts were transformed or withheld. |
| `failed` | Creation or update failed. |
| `deleted` | Payload has been removed; audit metadata may remain. |

## Parts

Parts SHOULD include stable `part_id`, `part_type`, `role`, `order`, `media_type`, content or byte refs, source links, annotations, and fallback text when possible.

Initial part types:

- `document_block`
- `rich_text`
- `table`
- `image`
- `audio`
- `video`
- `file`
- `page`
- `slide`
- `transcript_segment`
- `code_patch`
- `annotation`
- `source_appendix`
- `preview`
- `thumbnail`

## Byte refs

A `byte_ref` SHOULD include:

- `byte_ref_id`
- `uri`
- `media_type`
- `size_bytes`
- `digest`
- `digest_algorithm`
- `storage_owner`
- `access`
- `redaction_state`
- `expires_at` when access is temporary.

The standard prefers refs over embedded bytes. Inline payloads are appropriate only for compact, safe data required for offline inspection.

## Versions and snapshots

An `artifact_version` SHOULD be immutable. It should include version number or label, creation time, created by, snapshot refs, parent version refs, operation refs, integrity summary, source links, policy refs, and evidence refs.

A compatible implementation MUST NOT rely on mutable UI state as the only current artifact version. If a user edits an artifact, the edit should create an operation and eventually a version or draft snapshot.

## Operations and diffs

Operations SHOULD be small, typed, and replayable when practical.

Initial operation types:

- `artifact.create`
- `artifact.set_metadata`
- `artifact.add_part`
- `artifact.update_part`
- `artifact.remove_part`
- `artifact.reorder_parts`
- `artifact.attach_source`
- `artifact.attach_byte_ref`
- `artifact.finalize_version`
- `artifact.redact`
- `artifact.export`
- `artifact.handoff`
- `artifact.fail`

Diffs SHOULD summarize additions, removals, modifications, moved parts, changed byte refs, changed source links, and changed policy/export state.

## Source links

A source link connects artifact content to its origins. It may point to a runtime event, tool call, model call, prompt, source document, knowledge item, human edit, policy decision, evidence claim, telemetry span, peer task, or previous artifact version.

Source links SHOULD be part-addressable. A report section, transcript segment, image, or code patch should be able to cite different sources.

## Render manifest

A render manifest describes how a product can preview an artifact without making UI the owner of the artifact. It SHOULD include viewer surface, preferred layout, preview refs, thumbnails, fallback media type, safe hydration boundaries, part ordering, and unsupported-part fallback.

## Export manifest

An export manifest describes a produced package or file. It SHOULD include export id, artifact id, version id, format, files, media types, digests, redaction state, policy refs, completeness, created by, created at, and access constraints.

## Handoff package

A handoff package SHOULD include artifact envelope, selected versions, selected parts, byte refs, source links, policy refs, evidence refs, export refs, integrity summary, and receiver constraints. It should avoid copying private bytes unless the package policy explicitly allows it.

## Event classes

Compatible implementations SHOULD emit or export these event classes:

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

## Fail-safe guidance

If bytes are missing, private, expired, or inaccessible, consumers should preserve the artifact envelope, version ids, digests, source links, and reason codes. A missing payload should not erase the existence of the artifact.

## Version compatibility

Version `0.1.0` is a draft. Implementations SHOULD include `schema_version: "0.1.0"` and tolerate unknown fields. Producers SHOULD preserve identity fields and add optional fields rather than changing artifact kind or lifecycle semantics.
