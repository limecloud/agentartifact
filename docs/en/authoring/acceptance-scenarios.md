---
title: Acceptance scenarios
description: Scenarios a compatible Agent Artifact implementation should pass.
---

# Acceptance Scenarios

## Report document

An agent creates a report as `report_document`, adds structured parts, links sources per section, creates version 1, renders a preview, exports Markdown and PDF, and evidence can cite the artifact id and version id.

## Image output

An image generation task creates `image_output` with PNG byte refs, thumbnail refs, prompt/source links, model refs, policy refs, and export metadata. The UI does not infer identity from a file card.

## Transcript correction

An audio transcription artifact contains transcript segments. A user edits segments, an operation records the change, version 2 is created, and the original ASR bytes remain immutable.

## Browser snapshot

A browser session artifact links actions, screenshots, observations, URL, timestamp, and trace ids. The replay viewer consumes the artifact graph instead of scraping UI state.

## Handoff

A peer agent receives a handoff package containing artifact envelope, selected version, safe byte refs, source links, policy refs, and omitted private payload reasons.
