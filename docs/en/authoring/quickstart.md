---
title: Implementation quickstart
description: A small path to implement Agent Artifact.
---

# Implementation Quickstart

## 1. Pick one durable output

Start with one artifact kind: report, image, transcript, browser snapshot, code patch, dataset, or support bundle.

## 2. Create the envelope

Assign `artifact_id`, `artifact_kind`, `title`, `status`, timestamps, creator, and runtime refs.

## 3. Attach parts or byte refs

Use structured parts for blocks, segments, slides, tables, patches, and annotations. Use byte refs for files and media. Include media type, size, digest, and access constraints.

## 4. Create a version

Create an immutable `artifact_version` after the first useful snapshot. Record parent version and operation refs when later edits happen.

## 5. Add render and export manifests

Render manifests tell UI how to preview safely. Export manifests record what was exported, how it was redacted, and which files and hashes were included.

## 6. Link adjacent standards

Link runtime ids, evidence packs, policy decisions, knowledge sources, tool calls, model calls, telemetry spans, and peer-agent handoff refs. Do not copy their payloads unless explicitly safe.
