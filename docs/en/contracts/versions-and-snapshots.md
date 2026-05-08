---
title: Versions and snapshots
description: Immutable artifact snapshots and current-version semantics.
---


# Versions and Snapshots

An artifact version is an immutable snapshot. It can point to metadata, parts, byte refs, source links, render manifests, export manifests, policy refs, and evidence refs.

## Version rules

- Create a new version for meaningful user-visible changes.
- Record parent version refs for branching and rewrites.
- Keep version ids stable and immutable.
- Store draft state separately from finalized snapshots when needed.
- Do not treat a UI editor buffer as the only version source of truth.

## Snapshot contents

A snapshot may inline compact metadata and part summaries, but large bytes should remain in storage and be referenced by digest and media type.
