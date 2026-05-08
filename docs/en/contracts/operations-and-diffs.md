---
title: Operations and diffs
description: Typed mutations and semantic comparisons.
---


# Operations and Diffs

Operations describe how an artifact changed. Diffs describe what changed between two artifact states.

## Operation examples

- `artifact.create`
- `artifact.add_part`
- `artifact.update_part`
- `artifact.remove_part`
- `artifact.reorder_parts`
- `artifact.attach_source`
- `artifact.finalize_version`
- `artifact.redact`
- `artifact.export`
- `artifact.handoff`

## Diff rules

Diffs should identify changed parts, changed byte refs, changed source links, changed order, changed status, and changed policy/export state. A text diff alone is not enough for media, transcript, browser, or structured-document artifacts.
