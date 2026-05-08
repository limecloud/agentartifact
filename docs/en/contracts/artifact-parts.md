---
title: Artifact parts
description: Blocks, media parts, files, segments, pages, and annotations.
---


# Artifact Parts

`artifact_part` records a meaningful unit inside an artifact. A part can be a document block, table, transcript segment, image, slide, file, code patch, annotation, or source appendix.

## Part rules

- `part_id` must be stable inside the artifact.
- `part_type` describes structure, not visual styling.
- `order` is a logical order, not a DOM layout system.
- Every part should have fallback text or a byte ref when possible.
- Source links should be part-addressable.

## Why parts matter

Parts let systems update one section, diff two versions, cite a source, redact one range, render a thumbnail, or review a transcript segment without rewriting the entire artifact.
