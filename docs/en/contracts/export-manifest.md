---
title: Export manifest
description: Exported files, packages, integrity, redaction, and completeness.
---


# Export Manifest

An `export_manifest` records a produced package or file. It lets users, support teams, peer agents, and audit systems know exactly what was exported.

## Required concerns

- export id, artifact id, and version id.
- format and package type.
- file list with media type, size, digest, and path.
- redaction and retention state.
- policy refs and evidence refs.
- completeness and omitted items.
- access constraints and expiry.

## Rule

Export is a snapshot, not the source of truth. The artifact and version remain the primary identity.
