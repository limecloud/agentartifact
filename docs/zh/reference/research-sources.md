---
title: 调研来源
description: Agent Artifact 草案使用的外部参考。
---

# 调研来源

| Source | 对 Agent Artifact 的启发 |
| --- | --- |
| [Model Context Protocol specification](https://modelcontextprotocol.io/specification) | resources、resource links、embedded resources、content blocks、media content、annotations 与 URI refs。 |
| [Agent2Agent Protocol](https://github.com/a2aproject/A2A) | peer agent tasks、messages、artifacts 与 handoff refs。 |
| [OCI Image Specification](https://github.com/opencontainers/image-spec) | media type、digest、size、annotations、manifests 与 content-addressable refs。 |
| [W3C PROV Data Model](https://www.w3.org/TR/prov-dm/) | entities、activities、agents、derivation、attribution 与 provenance graphs。 |
| [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/) | targets、bodies、selectors 与 states。 |
| [in-toto Attestation Framework](https://github.com/in-toto/attestation) | subject digests、predicates 与 signed provenance attestations。 |
| [SLSA Provenance](https://slsa.dev/spec/v1.0/provenance) | artifact integrity 的 build/generation provenance。 |
| [BagIt RFC 8493](https://www.rfc-editor.org/rfc/rfc8493) | package layout、manifests、payload files 与 checksums。 |
| [RO-Crate](https://www.researchobject.org/ro-crate/) | metadata-rich research object packaging。 |
| [C2PA Specification](https://c2pa.org/specifications/specifications/2.1/index.html) | content provenance manifests、ingredients、assertions 与 generated media provenance。 |
| [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | portable event envelope。 |
| [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | model/tool-generated artifacts 的 trace 与 span correlation。 |
