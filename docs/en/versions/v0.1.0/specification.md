---
title: v0.1.0 specification
description: Versioned Agent Artifact v0.1.0 specification.
---

# v0.1.0 Specification

This page snapshots the v0.1.0 contract. See the [latest specification](../../specification) for the current draft text.

## Core objects

`artifact`, `artifact_part`, `byte_ref`, `artifact_version`, `artifact_operation`, `artifact_diff`, `artifact_source_link`, `render_manifest`, `export_manifest`, `handoff_package`, and `artifact_event`.

## Compatibility

- Producers should include `schema_version: "0.1.0"`.
- Consumers should ignore unknown fields.
- Producers should preserve artifact, version, part, byte ref, export, and handoff ids.
