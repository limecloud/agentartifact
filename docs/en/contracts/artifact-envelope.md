---
title: Artifact envelope
description: Stable identity and lifecycle for one deliverable.
---


# Artifact Envelope

The `artifact` envelope is the stable identity of a deliverable. It survives edits, exports, UI changes, storage moves, and peer handoff.

## Required shape

```json
{
  "schema_version": "0.1.0",
  "artifact_id": "art_01JZ...",
  "artifact_kind": "report_document",
  "title": "Market analysis report",
  "status": "draft",
  "created_at": "2026-05-08T10:00:00Z",
  "updated_at": "2026-05-08T10:02:00Z",
  "created_by": { "type": "agent", "id": "agent_123" },
  "current_version_id": "artver_001"
}
```

## Rules

- Keep `artifact_id` stable across versions and exports.
- Use `artifact_kind` for domain meaning, not file extension.
- Store large payloads through `byte_refs`, not inline fields.
- Link runtime, evidence, policy, source, and telemetry through refs.
- Preserve the envelope even when payload bytes expire or are redacted.
