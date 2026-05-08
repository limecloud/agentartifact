---
title: Artifact model
description: Core modeling choices behind Agent Artifact.
---

# Artifact Model

Agent Artifact treats deliverables as structured, versioned objects rather than message decorations. The standard separates product semantics from storage bytes, UI views, runtime tasks, and evidence graphs.

## Core loop

```text
agent work -> artifact intent -> parts / bytes -> version -> render -> export / handoff -> evidence refs
```

1. Runtime, tool, model, human, or peer agent produces an artifact candidate.
2. The artifact layer assigns stable identity, kind, status, owner, and refs.
3. Content is represented as parts, blocks, byte refs, or external resources.
4. Versions and operations record how the artifact changes.
5. Render manifests describe safe preview surfaces without owning UI components.
6. Export manifests describe package, format, redaction, policy, and integrity state.
7. Handoff packages let other systems receive the artifact without losing provenance.

## Identity axes

| Axis | Meaning |
| --- | --- |
| `artifact_id` | Stable artifact identity across versions and exports. |
| `artifact_kind` | Domain kind such as report, image, audio, transcript, browser snapshot, code patch, dataset, presentation, or generic file. |
| `version_id` | Stable identity for one immutable artifact snapshot. |
| `part_id` | Stable identity for a block, file, media part, table, source appendix, page, slide, or segment. |
| `byte_ref_id` | Stable pointer to bytes in a storage system. |
| `operation_id` | Stable identity for a mutation. |
| `export_id` | Stable identity for a produced export. |
| `handoff_id` | Stable identity for a package given to another system. |

## Kind versus format

`artifact_kind` describes product meaning. `media_type` describes representation. A `report_document` may export to Markdown, HTML, PDF, and JSON. An `image_output` may have PNG bytes, a thumbnail, a prompt manifest, and a source mask. Do not use file extension alone as the artifact kind.

## Parts versus bytes

Agent Artifact supports both structured parts and byte refs:

- document blocks, transcript segments, table rows, slides, patches, and annotations are parts.
- PNG, WAV, PDF, ZIP, HTML, JSON, or large raw outputs are byte refs.
- embedded data is allowed only for compact, safe payloads.
- large or private payloads should stay in the owning storage system and be referenced by URI, digest, size, media type, and access constraints.

## Versions and operations

A version is an immutable snapshot. An operation is an intended or applied change. A diff is a comparison between versions or parts. Keeping them separate lets a product support streaming generation, local edits, AI rewrites, review comments, export, and replay without making UI state the source of truth.
