---
title: Ecosystem boundaries
description: What Agent Artifact owns and does not own.
---

# Ecosystem Boundaries

Agent Artifact owns durable deliverable semantics. It should not become the whole content system.

| Boundary | Rule |
| --- | --- |
| Runtime | Runtime produces and updates; Agent Artifact records deliverable identity, versions, parts, and refs. |
| UI | UI renders and edits; Agent Artifact supplies render manifests and source-of-truth ids. |
| Evidence | Evidence verifies and audits; Agent Artifact supplies artifact/version/part/export refs. |
| Policy | Policy allows or blocks export/retention/redaction; Agent Artifact records policy refs and resulting export state. |
| Knowledge | Knowledge supplies sources; Agent Artifact links parts to source refs. |
| Tool | Tools produce files and media; Agent Artifact normalizes outputs into durable artifacts. |
| Storage | Storage owns bytes; Agent Artifact owns byte refs and integrity metadata. |

## Anti-patterns

- Treating chat markdown as the only artifact source of truth.
- Using file extension as artifact kind.
- Letting viewer-local state become the artifact graph.
- Exporting private bytes without an export manifest and policy refs.
- Creating a new generic file card for every domain output.
- Losing source links and version ids during peer handoff.
