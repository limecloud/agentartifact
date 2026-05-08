---
title: Source analysis
description: Analysis distilled from artifact systems, resource protocols, and agent product patterns.
---

# Source Analysis

Agent Artifact exists because agent systems produce more than messages. They produce deliverables that need identity, versioning, preview, provenance, export, and handoff semantics.

## What existing standards already solve

Resource protocols show how clients can reference external content by URI and media type. Container and package standards show why descriptors need digest, size, media type, annotations, and manifests. Provenance standards show that artifacts are entities created by activities and agents. Annotation standards show how comments and source links need selectors rather than whole-document copies. Attestation standards show how generation and build facts can be signed or verified. Event and telemetry standards show how artifact lifecycle events should correlate with traces without becoming the trace backend.

## What agent systems add

Agent outputs may stream, get repaired, be rewritten by models, edited by users, verified by evidence, blocked by policy, exported to support bundles, or handed to peer agents. A single answer can become a report, a table, an image, a transcript, and a browser replay. These products need stable artifact ids and part ids so UI, runtime, evidence, policy, and storage can refer to the same object.

## Design conclusions

1. Make artifact identity independent from chat messages, files, and UI cards.
2. Separate artifact kind from media type and file extension.
3. Separate parts, byte refs, versions, operations, diffs, renders, exports, and handoff packages.
4. Prefer refs and hashes over embedded private payloads.
5. Preserve source links at part level.
6. Treat exports as snapshots, not as the source of truth.
7. Preserve artifact envelope and audit shape even when bytes expire or are redacted.
