---
title: Research sources
description: External references used by the Agent Artifact draft.
---

# Research Sources

Agent Artifact v0.1.0 uses established resource, artifact, provenance, packaging, eventing, telemetry, and content provenance references. These references inform the shape of the standard; they do not transfer ownership of Agent Artifact semantics.

| Source | What Agent Artifact takes from it |
| --- | --- |
| [Model Context Protocol specification](https://modelcontextprotocol.io/specification) | Resources, resource links, embedded resources, content blocks, media content, annotations, and URI-based references. |
| [Agent2Agent Protocol](https://github.com/a2aproject/A2A) | Peer agent tasks, messages, artifacts, and handoff references. |
| [OCI Image Specification](https://github.com/opencontainers/image-spec) | Descriptors with media type, digest, size, annotations, manifests, and content-addressable refs. |
| [W3C PROV Data Model](https://www.w3.org/TR/prov-dm/) | Entities, activities, agents, derivation, attribution, and provenance graphs. |
| [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/) | Targets, bodies, selectors, and states for part-level annotations and source ranges. |
| [in-toto Attestation Framework](https://github.com/in-toto/attestation) | Subject digests, predicates, and signed provenance attestations. |
| [SLSA Provenance](https://slsa.dev/spec/v1.0/provenance) | Build and generation provenance for artifact integrity. |
| [BagIt RFC 8493](https://www.rfc-editor.org/rfc/rfc8493) | Package layout, manifests, payload files, and checksums. |
| [RO-Crate](https://www.researchobject.org/ro-crate/) | Metadata-rich research object packaging. |
| [C2PA Specification](https://c2pa.org/specifications/specifications/2.1/index.html) | Content provenance manifests, ingredients, assertions, and generated media provenance. |
| [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | Portable event envelope design. |
| [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | Trace and span correlation for model and tool-generated artifacts. |
