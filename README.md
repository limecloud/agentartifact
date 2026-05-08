# Agent Artifact

Agent Artifact is a portable draft standard for durable agent deliverables: artifact identity, kinds, parts, byte refs, versions, operations, diffs, render manifests, export manifests, source links, and handoff packages.

It interoperates with runtime, UI, evidence, policy, knowledge, tool, storage, telemetry, and peer-agent systems without taking ownership of those systems. Runtime produces and updates artifacts. UI renders previews and editors. Storage owns bytes. Evidence verifies and audits. Policy controls export and retention. Agent Artifact defines the portable deliverable facts those systems share.

## What v0.1.0 defines

- Artifact envelopes with stable identity, kind, lifecycle, ownership, current version, and refs.
- Artifact parts for blocks, media, files, pages, slides, transcript segments, code patches, tables, and annotations.
- Byte refs with URI, media type, size, digest, access, storage owner, and redaction state.
- Versions, snapshots, operations, and diffs.
- Source links, render manifests, export manifests, and handoff packages.
- Public JSON Schemas and LLM-friendly `llms.txt` / `llms-full.txt` entrypoints.

## Documentation

- [Specification](docs/en/specification.md)
- [Artifact model](docs/en/concepts/artifact-model.md)
- [Artifact envelope](docs/en/contracts/artifact-envelope.md)
- [Artifact parts](docs/en/contracts/artifact-parts.md)
- [Versions and snapshots](docs/en/contracts/versions-and-snapshots.md)
- [Operations and diffs](docs/en/contracts/operations-and-diffs.md)
- [Render manifest](docs/en/contracts/render-manifest.md)
- [Export manifest](docs/en/contracts/export-manifest.md)
- [Handoff package](docs/en/contracts/handoff-package.md)
- [JSON Schemas](docs/en/reference/json-schemas.md)
- [Research sources](docs/en/reference/research-sources.md)
- [中文规范](docs/zh/specification.md)

## LLM entrypoints

- [`llms.txt`](llms.txt): concise navigation index for AI clients.
- [`llms-full.txt`](llms-full.txt): concatenated current English documentation with source URLs.
- [`llm.txt`](llm.txt) and [`llm-full.txt`](llm-full.txt): compatibility aliases.

## Related Agent standards

- [Agent Knowledge](https://limecloud.github.io/agentknowledge/) - source-grounded knowledge packs.
- [Agent UI](https://limecloud.github.io/agentui/) - interaction surfaces for agent products.
- [Agent Runtime](https://limecloud.github.io/agentruntime/) - execution facts, controls, tasks, tools, and recovery.
- [Agent Evidence](https://limecloud.github.io/agentevidence/) - evidence, provenance, verification, review, replay, and export.
- [Agent Policy](https://limecloud.github.io/agentpolicy/) - policy decisions, approvals, permissions, risk, retention, waivers, and traces.
- [Agent Artifact](https://limecloud.github.io/agentartifact/) - durable deliverables, versions, parts, previews, exports, and handoff packages.
- [Agent Tool](https://limecloud.github.io/agenttool/) - tool declarations, surfaces, invocations, progress, results, permissions, and audit refs.
- [Agent Context](https://limecloud.github.io/agentcontext/) - context surfaces, items, source refs, selection, budgets, assembly, injection, compaction, and missing-context facts.

See the [Agent standards ecosystem](docs/en/reference/agent-ecosystem.md) page for the mutual-link map and future standard candidates.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated at `docs/.vitepress/dist`.
