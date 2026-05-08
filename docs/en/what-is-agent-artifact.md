---
title: What is Agent Artifact?
description: The scope and boundary of the Agent Artifact standard.
---

# What is Agent Artifact?

Agent Artifact defines the durable deliverable layer for agent systems. It is the portable record of what an agent produced, which version is current, which parts make it up, where the bytes live, which sources and runs created it, how it should be rendered, what changed, what was exported, and what can be handed to another system.

Agent outputs should not disappear into chat text. A report, image, transcript, browser snapshot, code patch, dataset, presentation, webpage, or support bundle often needs its own identity, lifecycle, preview, version history, source links, export policy, evidence refs, and handoff metadata.

## Use Agent Artifact when

- a response becomes a durable deliverable rather than a transient message.
- the output has multiple parts, blocks, files, previews, attachments, or source links.
- users can revise, approve, compare, export, or hand off the result.
- runtime, UI, evidence, policy, and storage need to reference the same generated object.
- artifact bytes are large or private and should be referenced, not embedded.
- a peer agent or external service needs a package with stable ids, manifests, hashes, and constraints.

## What it is not

Agent Artifact is not a storage backend, not a UI renderer, not a file format, not a model output schema, not an evidence archive, not a policy engine, and not a runtime task protocol.

| Adjacent system | Owns | Agent Artifact owns |
| --- | --- | --- |
| Runtime | Tool execution, tasks, events, retries, cancellation. | Artifact ids, produced-by refs, versions, operations, and status. |
| UI | Workbench layout, preview components, editors, interactions. | Render manifests, viewer hints, active version, and part selection facts. |
| Evidence | Claim support, verification, review, replay, audit export. | Artifact refs and artifact-local provenance links that evidence can cite. |
| Policy | Approval, retention, redaction, export permission. | Policy refs, export constraints, and recorded redaction/export state. |
| Storage | Bytes, object store, database rows, CDN, filesystem paths. | Portable byte refs, hashes, media type, size, and manifest identity. |
| Knowledge | Trusted source material and compiled context. | Source links from artifact parts back to knowledge/source refs. |

## Minimum compatible outcome

A minimal compatible implementation can create one `artifact` envelope with a stable id, kind, title, status, current version, parts, byte refs, hashes, runtime refs, and export refs. It can later add richer versions, operations, diffs, render manifests, handoff packages, source links, and evidence refs without changing the identity model.
