---
title: Browser snapshot
description: Example artifact flow for browser session replay.
---

# Browser Snapshot

A browser control task creates `browser_session` and `browser_snapshot` artifacts. The snapshot links URL, timestamp, screenshot byte ref, observation text, DOM/network refs when available, tool call ids, and telemetry trace ids.

A replay viewer consumes the artifact graph and byte refs. It does not infer browser history from UI-local state.
