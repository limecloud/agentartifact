---
title: Interoperability
description: How Agent Artifact fits with runtime, UI, evidence, policy, storage, and external standards.
---


# Interoperability

Agent Artifact is storage-neutral and UI-neutral. It should preserve native ids from adjacent systems rather than replacing them.

| System | Alignment |
| --- | --- |
| MCP | Resources, content blocks, resource links, media content, and annotations inform refs and embedded content boundaries. |
| A2A | Peer-agent tasks and artifacts can carry artifact ids, parts, files, and handoff refs. |
| OCI descriptors | Media type, digest, size, and annotation patterns inform byte refs and export manifests. |
| W3C PROV | Entities, activities, and agents inform provenance refs. |
| Web Annotation | Selectors and targets inform part-level annotations and source links. |
| in-toto / SLSA | Attestation and provenance patterns inform integrity and generated-by records. |
| BagIt / RO-Crate | Package manifests and metadata inform export and handoff packages. |
| C2PA | Content provenance and ingredients inform generated media provenance. |
| CloudEvents | Event envelope reference. |
| OpenTelemetry | Trace and span correlation reference. |

## Boundary rule

If the question is "where are the bytes stored?", use storage. If the question is "how is this rendered?", use UI. If the question is "what did the agent produce and how can it be versioned, previewed, exported, cited, and handed off?", use Agent Artifact.
