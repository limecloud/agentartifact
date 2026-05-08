---
title: Render manifest
description: Preview and viewer contracts without owning UI.
---


# Render Manifest

A `render_manifest` tells UI surfaces how to preview an artifact. It is not a component implementation.

## Fields

A render manifest SHOULD include viewer surface, preferred layout, supported part types, thumbnail refs, preview refs, fallback media type, hydration boundaries, unsupported-part behavior, and active version.

## Boundary

UI owns actual components and interactions. Agent Artifact owns the portable facts that let a UI choose a safe renderer and preserve artifact identity.
