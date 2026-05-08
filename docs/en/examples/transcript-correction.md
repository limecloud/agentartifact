---
title: Transcript correction
description: Example artifact flow for ASR output and user correction.
---

# Transcript Correction

An audio transcription artifact starts with ASR segments. A user edits segment 12. The product records `artifact.update_part`, creates a new draft snapshot, then finalizes version 2.

The original ASR output stays immutable. The correction operation links to the user, timestamp, segment id, previous version, new version, and evidence refs.
