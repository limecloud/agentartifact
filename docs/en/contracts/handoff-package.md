---
title: Handoff package
description: Portable artifact packages for peer agents and external systems.
---


# Handoff Package

A `handoff_package` gives another system enough artifact facts to continue work without losing identity, provenance, policy, or evidence boundaries.

## Package contents

A package SHOULD include selected artifact envelopes, versions, parts, byte refs, source links, export manifests, policy refs, evidence refs, integrity summary, receiver constraints, and omitted payload reasons.

## Rule

Handoff should preserve refs before copying bytes. If a receiver cannot access private byte refs, the package should say why and include safe previews or redacted substitutes when permitted.
