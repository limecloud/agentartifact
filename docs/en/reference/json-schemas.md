---
title: JSON Schemas
description: Public draft schemas for Agent Artifact objects.
---

# JSON Schemas

The v0.1.0 schemas are draft interoperability anchors. They are permissive for extension but strict about identity and lifecycle vocabulary.

| Schema | Purpose |
| --- | --- |
| [agentartifact-artifact.schema.json](../../schemas/agentartifact-artifact.schema.json) | Artifact envelope. |
| [agentartifact-part.schema.json](../../schemas/agentartifact-part.schema.json) | Artifact part. |
| [agentartifact-version.schema.json](../../schemas/agentartifact-version.schema.json) | Artifact version. |
| [agentartifact-operation.schema.json](../../schemas/agentartifact-operation.schema.json) | Artifact operation. |
| [agentartifact-render-manifest.schema.json](../../schemas/agentartifact-render-manifest.schema.json) | Render manifest. |
| [agentartifact-export-manifest.schema.json](../../schemas/agentartifact-export-manifest.schema.json) | Export manifest. |
| [agentartifact-handoff.schema.json](../../schemas/agentartifact-handoff.schema.json) | Handoff package. |
| [agentartifact-event.schema.json](../../schemas/agentartifact-event.schema.json) | Event envelope. |

## Compatibility guidance

- Producers SHOULD include `schema_version`.
- Consumers SHOULD ignore unknown fields.
- Producers SHOULD preserve artifact, version, part, byte ref, export, and handoff ids.
- Large payloads SHOULD be referenced rather than embedded.
