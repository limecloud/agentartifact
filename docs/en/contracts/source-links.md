---
title: Source links
description: Part-addressable origins for artifact content.
---


# Source Links

`artifact_source_link` connects an artifact or part to an origin. Origins include documents, retrieval results, tool calls, model calls, prompts, human edits, runtime events, policy decisions, evidence claims, telemetry spans, peer tasks, and previous artifact versions.

## Link roles

- `supports`
- `derived_from`
- `quoted_from`
- `generated_by`
- `edited_by`
- `reviewed_by`
- `verified_by`
- `blocked_by_policy`
- `redacted_by_policy`

## Rule

Source links should point to stable refs and selectors. Do not duplicate full source documents inside an artifact unless the source owner permits embedding.
